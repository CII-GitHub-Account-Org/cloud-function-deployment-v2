const {WebhookClient} = require('dialogflow-fulfillment');

exports.dialogflowFulfillment = (request, response) => {
  const agent = new WebhookClient({request, response});

  function cardActivation(agent) {
    // Access the card number, date of birth, and SSN parameters from the Dialogflow intent
    let cardNumber = agent.parameters.cardNumber;
    let dob = new Date(agent.parameters.dateOfBirth);
    let ssn = agent.parameters.ssn;

    // Validate the card number length
    if (cardNumber.length !== 16 && cardNumber.length !== 19) {
      // If the card number length is neither 16 nor 19, send an error message
      agent.add('Invalid card number. Please check your card number and try again.');
      return;
    }

    // Validate the date of birth
    let currentDate = new Date();
    if (dob > currentDate) {
      // If the date of birth is a future date, send an error message
      agent.add('Invalid date of birth. Please check your date of birth and try again.');
      return;
    }

    // Validate the SSN
    if (ssn.length !== 5) {
      // If the SSN length is not 5, send an error message
      agent.add('Invalid SSN. Please check your SSN and try again.');
      return;
    }

    // If all validations pass, prompt the user to generate a PIN
    agent.add('Your card has been activated. Please generate a PIN to complete the activation process.');
    agent.add('Please enter a 4-digit PIN.');
  }

  function pinGeneration(agent) {
    let pin = agent.parameters.pin;
    if (pin.length !== 4) {
      agent.add('Invalid PIN. Please enter a 4-digit PIN.');
      return;
    }
    agent.add('Please confirm your PIN by entering it again.');
  }

  function pinConfirmation(agent) {
    let pin = agent.parameters.pin;
    let confirmedPin = agent.parameters.confirmedPin;
    if (pin !== confirmedPin) {
      agent.add('PIN confirmation failed. Please enter your PIN again.');
      return;
    }
    agent.add('PIN generation successful. Your card is now activated.');
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
  intentMap.set('cardActivation', cardActivation); // 'cardActivation' is the name of the Dialogflow intent
  intentMap.set('pinGeneration', pinGeneration); // 'pinGeneration' is the name of the Dialogflow intent
  intentMap.set('pinConfirmation', pinConfirmation); // 'pinConfirmation' is the name of the Dialogflow intent
  intentMap.set('Account Balance', accountBalance);
  intentMap.set('Payment', payment);
  intentMap.set('Transaction History', transactionHistory);
  agent.handleRequest(intentMap);
};