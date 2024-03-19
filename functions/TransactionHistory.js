const {dialogflow} = require('actions-on-google');

const app = dialogflow();

app.intent('TransactionHistory', (conv, {accountType}) => {
    // Here you would typically fetch the transaction history from a database
    // For the sake of this example, let's assume we have some dummy data
    const dummyData = {
        'savings': 'Your last transaction was a deposit of $500 on 1st Jan',
        'checking': 'Your last transaction was a withdrawal of $200 on 2nd Jan',
    };

    const response = dummyData[accountType.toLowerCase()];

    if (response) {
        conv.close(`Here is your transaction history: ${response}`);
    } else {
        conv.close(`I'm sorry, I couldn't find any transactions for that account type.`);
    }
});

exports.TransactionHistory = app;