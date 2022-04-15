/* eslint-disable no-unused-vars */
const { stripe } = require('../documentation');

exports.documentationBankAccount = async (req, res) => {
  const createBankAccount = await stripe.customers.createSource(
    'cus_LVj5vj0mPO9U4N',
    { source: 'btok_1Kohd3FGbM9HwCxiRJGUO5tX' },
  );

  const retrieveBankAccount = await stripe.customers.retrieveSource(
    'cus_LVj5vj0mPO9U4N',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
  );

  const updateBankAccount = await stripe.customers.updateSource(
    'cus_LVj5vj0mPO9U4N',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
    { metadata: { order_id: '6735' } },
  );

  const verifyBankAccount = await stripe.customers.verifySource(
    'cus_LVj5vj0mPO9U4N',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
    { amounts: [32, 45] },
  );

  const deletedBankAccount = await stripe.customers.deleteSource(
    'cus_LVj5vj0mPO9U4N',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
  );

  const listBankAccounts = await stripe.customers.listSources(
    'cus_LVj5vj0mPO9U4N',
    { object: 'bank_account', limit: 3 },
  );

  return res.send({ status: 200 });
};
