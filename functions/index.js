const accountBalance = require('./AccountBalance');
const payment = require('./Payment');
const transactionHistory = require('./TransactionHistory');

exports.dialogflowFirebaseFulfillment = function(request, response) {
    const intent = request.body.queryResult.intent.displayName;

    switch(intent) {
        case 'AccountBalance':
            accountBalance(request, response);
            break;
        case 'Payment':
            payment(request, response);
            break;
        case 'TransactionHistory':
            transactionHistory(request, response);
            break;
        default:
            response.send({
                fulfillmentText: 'No intent matched.'
            });
    }
};