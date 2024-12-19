import json
import boto3

def lambda_handler(event, context):
    try:
        stock_symbol = event['queryStringParameters']['stock']
        # Set up DynamoDB client
        dynamo_client = boto3.client('dynamodb')
        
        # Query the table based on StockSymbol and possibly other condition for ArticleID
        response = dynamo_client.query(
            TableName='news',
            KeyConditionExpression='StockSymbol = :symbol',
            ExpressionAttributeValues={
                ':symbol': {'S': stock_symbol}
            }
        )
        
        if 'Items' in response:
            articles = response['Items']
            return {
                'statusCode': 200,
                'body': json.dumps(articles),
                'headers': {'Access-Control-Allow-Origin': '*'}
            }
        else:
            raise Exception("No articles found for the given stock symbol.")
    
    except Exception as e:
        print(f"Error: {str(e)}")  # Log the error
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Error fetching news from DynamoDB', 'error': str(e)}),
            'headers': {'Access-Control-Allow-Origin': '*'}
        }