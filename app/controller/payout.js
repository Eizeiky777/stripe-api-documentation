/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPayouts = async (req, res) => {
  /**
   *
   *  cairin dana ke owner stripe
   *
   */

  const createPayout = await stripe.payouts.create({
    amount: 1100,
    currency: 'sgd',
  });

  const retreivePayout = await stripe.payouts.retrieve(
    'po_1KogU1FGbM9HwCxia6pUSnz5',
  );

  const updatePayout = await stripe.payouts.update(
    'po_1KogU1FGbM9HwCxia6pUSnz5',
    { metadata: { order_id: '6735' } },
  );

  const listPayouts = await stripe.payouts.list({
    limit: 3,
  });

  const cancelPayout = await stripe.payouts.cancel(
    'po_1KogU1FGbM9HwCxia6pUSnz5',
  );

  return res.send({ status: 200 });
};
