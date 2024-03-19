# My Cloud Function

This project contains a Google Cloud Function that serves as a fulfillment for a Dialogflow bot. The bot has three intents: AccountBalance, Payment, and TransactionHistory.

## Setup

1. Install the Google Cloud SDK and authenticate with your Google Cloud account.
2. Install Node.js and npm.
3. Clone this repository and navigate to the project directory.
4. Run `npm install` to install the necessary dependencies.

## Deployment

This project uses GitHub Actions to automatically deploy the Cloud Function whenever changes are pushed to the repository. The workflow is defined in `.github/workflows/deploy.yml`.

To manually deploy the function, run the following command:

```
gcloud functions deploy my-cloud-function --runtime nodejs14 --trigger-http --allow-unauthenticated
```

Replace `my-cloud-function` with the name of your function.

## Dialogflow Bot

The Dialogflow bot is defined by the intents in the `dialogflow/intents` directory. Each intent has a corresponding JavaScript file in the `functions` directory that contains the fulfillment logic.

To use the bot, import the intents into your Dialogflow agent and deploy the Cloud Function. The function's URL serves as the fulfillment URL for the Dialogflow agent.