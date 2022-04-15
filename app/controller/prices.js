/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPrices = async (req, res) => {
  const createPrice = await stripe.prices.create({
    unit_amount: 2000,
    currency: 'sgd',
    recurring: { interval: 'month' },
    product: 'prod_KFt3i5BPYVVw1q',
  });

  const retrievePrice = await stripe.prices.retrieve(
    'price_1Kohd4JnvmXwwenzSrWI61fs',
  );

  const updatePrice = await stripe.prices.update(
    'price_1Kohd4JnvmXwwenzSrWI61fs',
    { metadata: { order_id: '6735' } },
  );

  const listPrice = await stripe.prices.list({
    limit: 3,
  });

  const searchPrice = await stripe.prices.search({
    query: 'active:\'true\' AND metadata[\'order_id\']:\'6735\'',
  });

  return res.send({ status: 200 });
};
