const {WebhookClient} = require('dialogflow-fulfillment');

exports.dialogflowFulfillment = (request, response) => {
  const agent = new WebhookClient({request, response});

  function cardActivation(agent) {
    // Handle card activation here
  }

  function accountBalance(agent) {
    // Handle account balance check here
  }

  function payment(agent) {
    // Handle payment here
  }

  function transactionHistory(agent) {
    // Handle transaction history check here
  }

  let intentMap = new Map();
  intentMap.set('Card Activation', cardActivation);
  intentMap.set('Account Balance', accountBalance);
  intentMap.set('Payment', payment);
  intentMap.set('Transaction History', transactionHistory);
  agent.handleRequest(intentMap);
};