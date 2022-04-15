/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationCharges = async (req, res) => {
  const createCharge = await stripe.charges.create({
    amount: 2000,
    currency: 'sgd',
    source: 'tok_mastercard',
    description: 'My First Test Charge (created for API docs)',
  });

  const retrieveCharge = await stripe.charges.retrieve(
    'ch_3KoMuEFGbM9HwCxi0NUsTtio',
  );

  /**
       *
       *    update charge
       *    https://stripe.com/docs/api/charges/update?lang=node
       *
       */

  const updateCharge = await stripe.charges.update(
    'ch_3KoMuEFGbM9HwCxi0NUsTtio',
    { metadata: { order_id: '6735' } },
  );

  const captureCharge = await stripe.charges.capture(
    'ch_3KoMuEFGbM9HwCxi0NUsTtio',
  );

  const listCharge = await stripe.charges.list({
    limit: 3,
  });

  const searchCharge = await stripe.charges.search({
    query: "amount>999 AND metadata['order_id']:'6735'",
  });

  return res.send({ status: 200 });
};
