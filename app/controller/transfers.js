/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationTransfers = async (req, res) => {
  const createTransfer = await stripe.transfers.create({
    amount: 400,
    currency: 'sgd',
    destination: 'acct_1KoMn7FGbM9HwCxi',
    transfer_group: 'ORDER_95',
  });

  const retrieveTransfer = await stripe.transfers.retrieve(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
  );

  const updateTransfer = await stripe.transfers.update(
    'tr_1Kohd6FGbM9HwCxiY7PU65Fk',
    { metadata: { order_id: '6735' } },
  );

  const listTransfers = await stripe.transfers.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
