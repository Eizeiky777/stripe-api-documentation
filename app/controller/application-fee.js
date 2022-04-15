/* eslint-disable no-unused-vars */
const { env } = process;
const { stripe } = require('./documentation');

exports.documentationApplicationFees = async (req, res) => {
  const applicationFee = await stripe.applicationFees.retrieve(
    env.APP_FEE_SAMPLE,
  );

  const applicationFees = await stripe.applicationFees.list({
    limit: 3,
  });

  const createFeeRefund = await stripe.applicationFees.createRefund(
    env.APP_FEE_SAMPLE,
  );

  const retrieveFeeRefund = await stripe.applicationFees.retrieveRefund(
    env.APP_FEE_SAMPLE,
    env.APP_FEE_SAMPLE_2,
  );

  const updateFeeRefund = await stripe.applicationFees.updateRefund(
    env.APP_FEE_SAMPLE,
    env.APP_FEE_SAMPLE_2,
    { metadata: { order_id: '6735' } },
  );

  const listFeeRefunds = await stripe.applicationFees.listRefunds(
    env.APP_FEE_SAMPLE,
    { limit: 3 },
  );

  return res.send({ status: 200 });
};
