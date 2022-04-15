/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationCoupons = async (req, res) => {
  const createCoupon = await stripe.coupons.create({
    percent_off: 25.5,
    duration: 'repeating',
    duration_in_months: 3,
  });

  const retrieveCoupon = await stripe.coupons.retrieve(
    'Z4OV52SU',
  );

  const updateCoupon = await stripe.coupons.update(
    'Z4OV52SU',
    { metadata: { order_id: '6735' } },
  );

  const deletedCoupon = await stripe.coupons.del(
    'Z4OV52SU',
  );

  const listCoupons = await stripe.coupons.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
