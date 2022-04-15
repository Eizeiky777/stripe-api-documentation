/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationTransfersReversal = async (req, res) => {
  const createReversal = await stripe.transfers.createReversal(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
    { amount: 100 },
  );

  const retrieveReversal = await stripe.transfers.retrieveReversal(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
    'trr_1Kohd6FGbM9HwCxi9m2gecg6',
  );

  const updateReversal = await stripe.transfers.updateReversal(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
    'trr_1Kohd6FGbM9HwCxi9m2gecg6',
    { metadata: { order_id: '6735' } },
  );

  const listReversals = await stripe.transfers.listReversals(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
    { limit: 3 },
  );

  return res.send({ status: 200 });
};
