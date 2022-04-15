/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationIssuingTransaction = async (req, res) => {
  const retrieveTransaction = await stripe.issuing.transactions.retrieve(
    'ipi_1Kohd6FGbM9HwCxipqaplEH8',
  );

  const updateTransaction = await stripe.issuing.transactions.update(
    'ipi_1Kohd6FGbM9HwCxipqaplEH8',
    { metadata: { order_id: '6735' } },
  );

  const listTransactions = await stripe.issuing.transactions.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
