import json
import pandas as pd
import requests
import boto3
from datetime import datetime
from io import StringIO
import time


# API key and S3 bucket name defined directly in the code
ALPHA_VANTAGE_API_KEY = "your-api" 
S3_BUCKET_NAME = "stock-data-528"


def fetch_stock_data(symbol, api_key):
    """Fetch stock data from Alpha Vantage."""
    url = "https://www.alphavantage.co/query"
    params = {
        "function": "TIME_SERIES_DAILY",
        "symbol": symbol,
        "apikey": api_key,
        "outputsize": "compact"
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        if "Time Series (Daily)" in data:
            return data
        else:
            print(f"No time series data found for {symbol}. Response: {data}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data for {symbol}: {e}")
        return None


def process_data(data):
    """Process the raw stock data into a Pandas DataFrame."""
    try:
        time_series = data['Time Series (Daily)']
        rows = [
            {
                "Date": datetime.strptime(date, "%Y-%m-%d").strftime("%d-%m-%Y"),
                "Open": float(stats["1. open"]),
                "High": float(stats["2. high"]),
                "Low": float(stats["3. low"]),
                "Close": float(stats["4. close"]),
                "Volume": int(stats["5. volume"])
            }
            for date, stats in time_series.items()
        ]
        return pd.DataFrame(rows)
    except KeyError:
        print("Invalid data format: Missing 'Time Series (Daily)'")
        return None


def save_to_csv_s3(df, symbol, bucket_name):
    """Save the DataFrame to a CSV and upload to S3."""
    s3_client = boto3.client('s3')
    csv_buffer = StringIO()
    df.to_csv(csv_buffer, index=False)
    s3_key = f"stocks/{symbol}.csv"

    try:
        s3_client.put_object(Bucket=bucket_name, Key=s3_key, Body=csv_buffer.getvalue())
        print(f"Uploaded data for {symbol} to S3 at {s3_key}")
    except boto3.exceptions.Boto3Error as e:
        print(f"Error uploading {symbol} to S3: {e}")


def lambda_handler(event, context):
    """Main Lambda function."""
    # List of stock symbols
    symbols = event.get('symbols', ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'JNJ', 'NFLX'])

    for symbol in symbols:
        print(f"Processing {symbol}...")
        data = fetch_stock_data(symbol, ALPHA_VANTAGE_API_KEY)
        if data:
            df = process_data(data)
            if df is not None:
                save_to_csv_s3(df, symbol, S3_BUCKET_NAME)
        time.sleep(12)

    return {
        'statusCode': 200,
        'body': json.dumps('Stock data processed and uploaded to S3 successfully.')
    }
