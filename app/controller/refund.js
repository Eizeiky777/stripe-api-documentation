/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationRefund = async (req, res) => {
  const createRefund = await stripe.refunds.create({
    charge: 'ch_3KoMuEFGbM9HwCxi0NUsTtio',
  });

  const retrieveRefund = await stripe.refunds.retrieve(
    're_3KoMuEFGbM9HwCxi0s5l7wLv',
  );

  const updateRefund = await stripe.refunds.update(
    're_3KoMuEFGbM9HwCxi0s5l7wLv',
    { metadata: { order_id: '6735' } },
  );

  const cancelRefund = await stripe.refunds.cancel(
    're_3KoMuEFGbM9HwCxi0s5l7wLv',
  );

  const listRefunds = await stripe.refunds.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
