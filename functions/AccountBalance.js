const getAccountBalance = require('./path-to-your-module');

module.exports = function(accountNumber) {
  return new Promise((resolve, reject) => {
    getAccountBalance(accountNumber)
      .then(balance => {
        resolve({
          fulfillmentText: `Your account balance is ${balance}.`,
          source: 'getAccountBalance'
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};