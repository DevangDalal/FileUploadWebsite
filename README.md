# FileUploadWebsite

File Upload Website on AWS Serverless

Create the Website -
- Using React.js in Visual Studio Code create a default website.
- Commands - 
              npm npx create-react-app file-upload-app (To create the website)
              npm start (to deploy it to internet)
- Delete the packages that aren't necessary (package-lock.json, and inside the folder src delete logo.svg, reportWebVitals.jssetupTests.js, App.test.js
- Update the following files with the code in repo -
              App.js, App.css.
- Now our website is up and running.

Deploying Serverless architecture on AWS -
IAM Role - 
- Create an IAM role 'IAMroleForLambdaAccess'
- Assign the necessary permissions to the role and assign the role to your Lambda Function. (IAMRole.json)

Lambda - 
- Now, lets create our Lambda Function.
- Choose the programming language to NodeJS and select the role we just created in permissions.
- When the Lambda Function is created change the configuration and the timeout for the function just in case the file is too big to process and set the memory to 500 MB and timeout to 1 minute.

S3 - 
- Now go to the s3 console and create a bucket and give a name of your choice.
- Enable Bucket Versioning and Server-Side Encryption while creating the bucket.

API Gateway - 
- Next we're going to create an API Gateway.
- Select REST API and in the creation page select New APi and rest leave everything as default.
- First, go to actions dropdown and we're going to create a resource. Give it a name of your choice and make sure to select the Enable API Gateway CORS option.
- And then inside the resource we're gonna create a method which is going to be a POST method.
- On the setup page select Lambda Function, make sure to check the Use Lambda Proxy Integration check-box, choose the Lambda Function that we just created and select save.
- Note - This API that we created is going to be open to the world, so if your APIs are going to be used in production then you might wanna use API Keys to restrict access and required to put a authenticator.

Method -
- Deploy the API.
- Edit your Lambda code and for this project you can do it in the Lambda console itself as we don't need any external libraries.
- After you've written the code go to Lambda Env on the left hand side and create a new file named 'file-processing-service'  and 'util.js' and edit the 'index.js '  file.
- Copy the endpoint of the deployed API and paste it in the App.js website code.
- After you're done press on deploy and test your react website.
- After uploading the file check your S3 bucket and you'll see the files in the bucket you had made.
