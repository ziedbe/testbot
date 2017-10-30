# Create and setup your Facebook Messenger Bot with dialogflow.com, Node.js

The purpose of this repo is to provide instructions for how to setup a [Facebook Messenger
Chatbot](https://developers.facebook.com/docs/messenger-platform) using
[dialogflow.com](https://dialogflow.com/), [Node.js](https://nodejs.org) and [ngrok](https://ngrok.com/).

##Setting up the project
To be able to run this project, please make sure that you successfully installed [Node.js](https://nodejs.org).
Clone this project & run the following command:
	```
    npm install --save
    ```

##Setting up a temporary webhook Endpoint  with Ngrok
Ngrok gives you the opportunity to serve a localhost to a public URL that can be used in Facebook Messenger webhook endpoint. Ngrok is super easy to run, you don't need to deploy your application until it is completed.

1. Download [ngrok](https://ngrok.com/), install it on your machine, go to your terminal & run the following command(We will be using port 5000).
	```
    ngrok http 5000
    ```

2. When started, ngrok will display a public URL. This URL will be needed later in setting up the facebook endpoint(The URL that will be used following this picture is https://47ba4dd4.ngrok.io).

	![alt text](http://www.girliemac.com/assets/images/articles/2017/01/ngrok.png "Ngrok")

## <a name="facebook"></a> Setup the Facebook App

1. Create your Facebook App at <https://developers.facebook.com/apps>

    ![alt text](https://github.com/Novatics/botalize/raw/master/images/create-app-facebook.png "Facebook App")


2. Go to the Messenger tab and select your Facebook Page to generate an Page
Access Token. Make sure to save it somewhere, as it will be used in your Node.js
sever.

    ![alt text](https://github.com/Novatics/botalize/raw/master/images/page-token-facebook.png "Facebook App")

3. Go back to your ngrok terminal. Copy the public URL and paste it in the **Callback URL** field. Next, go to verification.js file in your code and paste the 'verify_token' (You can use a random string) and paste it in the **Verify Token**. Make sure to select at least **messages** and **messaging_postbacks** in the subscription fields. Finally, click on **Verify and Save** button, it should work.

    ![alt text](https://github.com/Novatics/botalize/raw/master/images/webhook-facebook.png "Facebook App")

5. Select a page to subscribe your webhook to the page events

    ![alt text](https://github.com/Novatics/botalize/raw/master/images/webhook-approved-facebook.png "Facebook App") 