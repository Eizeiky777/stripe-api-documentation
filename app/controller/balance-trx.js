/* eslint-disable no-unused-vars */
const { env } = process;
const { stripe } = require('./documentation');

exports.documentationBalance = async (req, res) => {
  const balanceApp = await stripe.balance.retrieve((err, balance) => balance);

  const balanceTransaction = await stripe.balanceTransactions.retrieve(
    env.BALANCE_APP_ID,
  );

  const balanceTransactions = await stripe.balanceTransactions.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
