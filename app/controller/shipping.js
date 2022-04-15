/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationShipping = async (req, res) => {
  const createShippingRate = await stripe.shippingRates.create({
    display_name: 'Ground shipping',
    type: 'fixed_amount',
    fixed_amount: { amount: 500, currency: 'usd' },
  });

  const retrieveShippingRate = await stripe.shippingRates.retrieve(
    'shr_1Kohd4FGbM9HwCxiPJZnRGmx',
  );

  const updateShippingRate = await stripe.shippingRates.update(
    'shr_1Kohd4FGbM9HwCxiPJZnRGmx',
    { metadata: { order_id: '6735' } },
  );

  const listShippingRates = await stripe.shippingRates.list({
    limit: 3,
  });
  return res.send({ status: 200 });
};
