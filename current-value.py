import json
import boto3
import os
import csv
from io import StringIO

# Initialize the S3 client
s3 = boto3.client('s3')

def lambda_handler(event, context):
    # Get the stock symbol from query parameters
    stock_symbol = event.get('queryStringParameters', {}).get('stock')
    if not stock_symbol:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Stock symbol is required'}),
            'headers': {'Access-Control-Allow-Origin': '*'}
        }

    # Replace with your bucket name and file key
    bucket_name = os.environ.get('stock-data-528', 'stock-data-528')
    file_key = f"stocks/{stock_symbol}.csv"

    try:
        # Fetch the file from S3
        response = s3.get_object(Bucket=bucket_name, Key=file_key)

        # Read the content of the file
        file_content = response['Body'].read().decode('utf-8')
        
        # Parse the CSV content
        csv_reader = csv.DictReader(StringIO(file_content))
        stock_data = {}

        # Convert CSV rows to dictionary
        for row in csv_reader:
            stock_data[row['Date']] = {
                "1. open": row["Open"],
                "2. high": row["High"],
                "3. low": row["Low"],
                "4. close": row["Close"],
                "5. volume": row["Volume"]
            }
        
        # Extract the first date (latest key)
        first_date = next(iter(stock_data))
        first_stock_data = {
            "date": first_date,
            "open": stock_data[first_date]["1. open"],
            "high": stock_data[first_date]["2. high"],
            "low": stock_data[first_date]["3. low"],
            "close": stock_data[first_date]["4. close"],
            "volume": stock_data[first_date]["5. volume"]
        }

        # Return the latest stock data
        return {
            'statusCode': 200,
            'body': json.dumps(first_stock_data),
            'headers': {'Access-Control-Allow-Origin': '*'}
        }

    except s3.exceptions.NoSuchKey:
        return {
            'statusCode': 404,
            'body': json.dumps({'message': 'File not found'}),
            'headers': {'Access-Control-Allow-Origin': '*'}
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Internal server error', 'error': str(e)}),
            'headers': {'Access-Control-Allow-Origin': '*'}
        }