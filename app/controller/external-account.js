/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationExternalAccount = async (req, res) => {
  const createExternalBankAccount = await stripe.accounts.createExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    {
      external_account: 'btok_1Kohd3FGbM9HwCxiRJGUO5tX',
    },
  );

  const retrieveExternalBankAccount = await stripe.accounts.retrieveExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'ba_1Kohd5FGbM9HwCxiNLcUMQ8V',
  );

  const updateExternalBankAccount = await stripe.accounts.updateExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
    { metadata: { order_id: '6735' } },
  );

  const deleteExternalBankAccount = await stripe.accounts.deleteExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'ba_1Kohd4FGbM9HwCxi31i2hPg9',
  );

  const listExternalBankAccount = await stripe.accounts.listExternalAccounts(
    'acct_1KoMn7FGbM9HwCxi',
    { object: 'bank_account', limit: 3 },
  );

  const createExternalCard = await stripe.accounts.createExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    { external_account: 'tok_mastercard_debit' },
  );

  const retrieveExternalCard = await stripe.accounts.retrieveExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'card_1Kohd1FGbM9HwCxi92w955qJ',
  );

  const updateExternalCard = await stripe.accounts.updateExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'card_1Kohd1FGbM9HwCxi92w955qJ',
    { metadata: { order_id: '6735' } },
  );

  const deleteExternalCard = await stripe.accounts.deleteExternalAccount(
    'acct_1KoMn7FGbM9HwCxi',
    'card_1Kohd1FGbM9HwCxi92w955qJ',
  );

  const listAccountCards = await stripe.accounts.listExternalAccounts(
    'acct_1KoMn7FGbM9HwCxi',
    { object: 'card', limit: 3 },
  );

  return res.send({ status: 200 });
};
