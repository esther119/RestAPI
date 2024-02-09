# Deploying a Simple REST API on AWS Lambda

This tutorial will guide you through deploying a simple REST API on AWS Lambda using the Serverless Framework. The API will respond with a personalized greeting based on the provided name.

## Prerequisites

- Node.js
- AWS account

## Installation

1. Install the Serverless Framework globally on your machine:

   ```bash
   npm install -g serverless
   ```

2. Clone this repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure your AWS credentials:

   ```bash
   serverless config credentials --provider aws --key <aws-access-key> --secret <aws-secret-key>
   ```

## Usage

1. Open the `handler.py` file and replace its contents with the following code:

   ```python
   import json

   def hello(event, context):
       print('Received event:', event)

       name = event['queryStringParameters']['name']
       message = f'Hello, {name}!'

       body = {
           'message': message
       }

       response = {
           'statusCode': 200,
           'body': json.dumps(body)
       }

       print('Sending response:', response)

       return response
   ```

2. Open the `serverless.yml` file and replace its contents with the following code:

   ```yaml
   service: my-rest-api

   provider:
     name: aws
     runtime: python3.8

   functions:
     hello:
       handler: handler.hello
       events:
         - http:
             path: hello
             method: get
   ```

3. Deploy the REST API to AWS Lambda:

   ```bash
   serverless deploy
   ```

4. After the deployment is complete, you will see the API Gateway endpoint URL in the terminal output. You can use this URL to make HTTP requests to your API.

   Example:

   ```bash
   curl <api-gateway-url>/hello?name=John
   ```

   The response will be a JSON object with a personalized greeting.
