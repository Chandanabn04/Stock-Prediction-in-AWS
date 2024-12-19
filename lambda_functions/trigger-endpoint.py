import boto3
import csv
import json
import logging
import matplotlib.pyplot as plt
import io
import base64
import numpy as np
import random  # Import random for adding randomness

# Initialize clients
runtime_client = boto3.client('sagemaker-runtime')
s3_client = boto3.client('s3')

# Constants
endpoint_name = 'tensorflow-inference-2024-12-12-16-21-19-842'
BUCKET_NAME = 'stockbucket-ece528'

# Logging setup
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # Get the stock symbol from queryStringParameters
        stock_symbol = event.get('queryStringParameters', {}).get('stock')
        logger.info(f"Processing stock symbol: {stock_symbol}")

        # Download the CSV file from S3
        file_key = stock_symbol  # Use stock symbol directly as the file name
        response = s3_client.get_object(Bucket=BUCKET_NAME, Key=file_key + ".csv")
        file_content = response['Body'].read().decode('utf-8')
        
        # Parse CSV to extract close prices
        close_prices = []
        csv_reader = csv.reader(file_content.splitlines())
        next(csv_reader)  # Skip the header row
        for row in csv_reader:
            close_prices.append(float(row[4]))  # Assuming 'Close' price is the 5th column

        # Min-Max scaling
        min_price = min(close_prices)
        max_price = max(close_prices)
        scale = lambda x: (x - min_price) / (max_price - min_price)
        close_prices_scaled = [scale(price) for price in close_prices]

        # Prepare last 60 days of data for prediction
        if len(close_prices_scaled) < 60:
            raise ValueError("Not enough data points for prediction (minimum 60 required).")
        
        new_data = close_prices_scaled[-60:]
        new_data_reshaped = [[price] for price in new_data]  # Reshape for LSTM input

        # Predict next n days
        def predict_next_n_days(n):
            predictions = []
            current_input = new_data_reshaped[-60:]  # Last 60 days as input
            
            for _ in range(n):
                # Invoke the SageMaker endpoint for the next day
                response = runtime_client.invoke_endpoint(
                    EndpointName=endpoint_name,
                    ContentType='application/json',
                    Body=json.dumps([current_input])
                )
        
                # Extract the prediction from the response
                prediction = json.loads(response['Body'].read().decode('utf-8'))
                
                # Ensure the prediction is extracted correctly
                predicted_scaled_price = prediction['predictions'][0][0]  # Ensure this is a scalar value (float)
        
                # Reverse the scaling to get the original predicted price
                predicted_price = predicted_scaled_price * (max_price - min_price) + min_price
                predicted_prices = random.uniform(-5, 5) 
                predicted_price += predicted_prices
                
                predictions.append(predicted_price)
                
                # Update current_input by adding the predicted value and removing the oldest data point
                current_input = current_input[1:] + [[predicted_price]]
            
            return predictions

        # Predict next 6 days
        predicted_prices = predict_next_n_days(15)
        logger.info(f"Predicted prices: {predicted_prices}")

        # Generate a plot of predicted prices
        days = np.arange(1, 16)  # Days 1 to 6
        plt.figure(figsize=(10, 6))
        plt.plot(days, predicted_prices, marker='o', color='b', label='Predicted Price')
        plt.title(f'Predicted Prices for {stock_symbol} - Next 15 Days')
        plt.xlabel('Day')
        plt.ylabel('Predicted Price ($)')
        plt.grid(True)
        plt.xticks(days)  # Display days 1 through 6 on the x-axis
        plt.legend()

        # Save the plot to a BytesIO buffer
        img_buf = io.BytesIO()
        plt.savefig(img_buf, format='png')
        plt.close()  # Close the plot to avoid it being displayed

        img_buf.seek(0)  # Rewind the buffer to the beginning

        # Base64 encode the image
        base64_image = base64.b64encode(img_buf.read()).decode('utf-8')

        # Return the image as a response
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'image/png',
                'Access-Control-Allow-Origin': '*'  # Allow CORS
            },
            'body': base64_image,
            'isBase64Encoded': True  # Indicate that the response body is base64 encoded
        }
    
    except Exception as e:
        logger.error(f"Error: {e}")
        return {
            'statusCode': 500,
            'error': str(e)
        }
