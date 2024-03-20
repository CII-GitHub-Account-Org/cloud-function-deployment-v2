const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

// Import intent handlers
const {cardActivation} = require('./dialogflow/intents/cardActivation');
const {accountBalance} = require('./dialogflow/intents/accountBalance');
const {payment} = require('./dialogflow/intents/payment');
const {transactionHistory} = require('./dialogflow/intents/transactionHistory');

// Map intents to handlers
app.intent('Card Activation', cardActivation);
app.intent('Account Balance', accountBalance);
app.intent('Payment', payment);
app.intent('Transaction History', transactionHistory);

exports['cloud-function-deployment-v2'] = functions.https.onRequest(app);