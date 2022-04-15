/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationMandates = async (req, res) => {
  const mandate = await stripe.mandates.retrieve(
    'mandate_1Kohd2FGbM9HwCxiKVaVqMTl',
  );

  return res.send({ status: 200 });
};
