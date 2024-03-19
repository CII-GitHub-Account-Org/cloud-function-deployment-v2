# My GCF Dialogflow Project

This project is a Node.js based Google Cloud Function that integrates with Dialogflow to create a banking bot. The bot can handle intents such as card activation, account balance checking, payment, and transaction history.

## Project Structure

- `.github/workflows/deploy.yml`: Defines the GitHub Actions workflow for deploying the project to Google Cloud.
- `functions/`: Contains the Google Cloud Function code.
- `dialogflow/`: Contains the Dialogflow intents and fulfillment code.
- `.gcloudignore`: Lists the files and directories that should not be uploaded to Google Cloud.
- `.gitignore`: Lists the files and directories that should not be tracked by Git.
- `package.json`: Lists the dependencies and scripts for the entire project.

## Setup

1. Clone the repository.
2. Install the dependencies by running `npm install` in the root directory.
3. Set up your Google Cloud and Dialogflow credentials.

## Deployment

This project uses GitHub Actions for continuous deployment. When you push to the main branch, the workflow defined in `.github/workflows/deploy.yml` will automatically deploy the project to Google Cloud.

## Usage

Once deployed, you can interact with the banking bot through Dialogflow. The bot can handle the following intents:

- `cardActivation`: Activate a card.
- `accountBalance`: Check the account balance.
- `payment`: Make a payment.
- `transactionHistory`: Check the transaction history.

Each intent corresponds to a JSON file in the `dialogflow/intents/` directory. The fulfillment for these intents is handled by the code in `dialogflow/fulfillment/index.js`.