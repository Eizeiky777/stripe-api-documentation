/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationTopUp = async (req, res) => {
  const createTopup = await stripe.topups.create({
    amount: 2000,
    currency: 'sgd',
    description: 'Top-up for Jenny Rosen',
    statement_descriptor: 'Top-up',
  });

  const retrieveTopup = await stripe.topups.retrieve(
    'tu_1Kohd6FGbM9HwCxi9qdlKhbF',
  );

  const updateTopup = await stripe.topups.update(
    'tu_1Kohd6FGbM9HwCxi9qdlKhbF',
    { metadata: { order_id: '6735' } },
  );

  const listTopups = await stripe.topups.list({
    limit: 3,
  });

  const cancelTopup = await stripe.topups.cancel(
    'tu_1Kohd6FGbM9HwCxi9qdlKhbF',
  );

  return res.send({ status: 200 });
};
