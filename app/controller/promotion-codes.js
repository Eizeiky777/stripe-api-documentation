/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPromotionCodes = async (req, res) => {
  const createPromotionCode = await stripe.promotionCodes.create({
    coupon: 'Z4OV52SU',
  });

  const updatePromotionCode = await stripe.promotionCodes.update(
    'promo_1Kohd4FGbM9HwCxi55VNvlRY',
    { metadata: { order_id: '6735' } },
  );

  const retrievePromotionCode = await stripe.promotionCodes.retrieve(
    'promo_1Kohd4FGbM9HwCxi55VNvlRY',
  );

  const listPromotionCodes = await stripe.promotionCodes.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
