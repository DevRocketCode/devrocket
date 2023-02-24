---
title: Deploy Your First AWS Lambda Function with GitHub Actions
date: "2023-02-06T20:00:00.000Z"
description: "A Step-by-Step Guide to deploying to AWS Lambda - with Code Samples!"
featuredImage: header.png
---

Writing your first AWS Lambda function is a great way to get started with serverless computing. However, deploying your function can be a bit tricky. In this article, we'll walk through the process of deploying your first Lambda function using GitHub Actions.

## Step 1: Create a New Lambda Function

To get started, log in to your AWS console and navigate to the Lambda service. From there, you can create a new function by clicking the "Create function" button. Select the "Author from scratch" option and provide a name for your function.

Next, you'll need to choose a runtime for your function. In this example, we'll use Node.js. Once you've selected your runtime, click the "Create function" button to create your new Lambda function.

## Step 2: Write Your Function Code

Now that you've created your Lambda function, you can start writing your function code. In this example, we'll write a simple function that takes two numbers as input and returns their sum. Here's the code:

```js
exports.handler = async (event) => {
  const num1 = event.num1;
  const num2 = event.num2;
  const sum = num1 + num2;
  return sum;
};
```
Save this code as a file called "index.js".

## Step 3: Create a Deployment Package

To deploy your Lambda function, you'll need to create a deployment package that includes your function code and any dependencies it has. To do this, create a new folder and copy your "index.js" file into it. Then, run the following command to install the required dependencies:

```bash
npm install aws-sdk
```
Finally, create a ZIP archive of the entire folder.

## Step 4: Create a GitHub Repository

Next, you'll need to create a new GitHub repository to store your Lambda function code. Once you've created your repository, clone it to your local machine.

## Step 5: Create a GitHub Actions Workflow

To deploy your Lambda function using GitHub Actions, you'll need to create a new workflow file. Create a new file in your repository called ".github/workflows/deploy.yml" and add the following code:

```yaml
name: Deploy Lambda Function

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Deploy function
        run: |
          aws lambda update-function-code \
            --function-name my-function \
            --zip-file fileb://deployment-package.zip
```
This workflow will trigger a deployment every time a push is made to the main branch of your repository. It will first check out your code, then configure your AWS credentials using GitHub Secrets, and finally deploy your function by uploading your deployment package to your Lambda function.

## Step 6: Add GitHub Secrets

To securely store your AWS credentials, you'll need to add them as secrets in your GitHub repository. Navigate to your repository settings, click on "Secrets", and then click the "New repository secret" button. Add two secrets: "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY", and provide their respective values.

## Step 7: Commit and Push Your Changes

Now that you've written your function code, created a deployment package, and set up your GitHub Actions workflow, it's time to commit and push your changes to your repository. Once your changes are pushed, GitHub Actions will automatically trigger a deployment of your Lambda function.

Congrats! You've successfully deployed your first Lambda function using GitHub Actions!
