import json
import requests
import boto3
from botocore.exceptions import ClientError
from datetime import datetime

def lambda_handler(event, context):
    symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'JNJ', 'NFLX']
    API_KEY_NEWSAPI = 'news-api'  # Replace with your NewsAPI key
    NEWS_API_URL = 'https://newsapi.org/v2/everything'
    
    # DynamoDB client
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('news')  # Replace with your DynamoDB table name
    
    for stock_symbol in symbols:
        params = {
            'q': stock_symbol,  # Search for the stock symbol
            'apiKey': API_KEY_NEWSAPI,  # Your NewsAPI key
            'pageSize': 2,  # Limit to 2 articles
        }
        
        try:
            # Fetch news articles from NewsAPI
            response = requests.get(NEWS_API_URL, params=params)
            data = response.json()
            
            # Check if the API returns valid data
            if data['status'] == 'ok' and 'articles' in data:
                for article in data['articles']:
                    try:
                        # Store each article in DynamoDB
                        table.put_item(
                            Item={
                                'StockSymbol': stock_symbol,
                                'ArticleID': article['url'],  # Assuming article URL is unique
                                'Title': article['title'],
                                'Description': article.get('description', ''),
                                'PublishedAt': article['publishedAt'],
                                'Source': article['source']['name'],
                                'URL': article['url'],
                                'Timestamp': datetime.utcnow().isoformat()  # Adding a timestamp
                            }
                        )
                    except ClientError as e:
                        print(f"Error storing article in DynamoDB: {e}")
                        continue
            else:
                print(f"Error fetching news for {stock_symbol}")
        except Exception as e:
            print(f"Error fetching news for {stock_symbol}: {str(e)}")
    
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Articles stored successfully'})    }
