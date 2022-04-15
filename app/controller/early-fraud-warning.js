/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationEarlyFraudWarning = async (req, res) => {
  const retrieveEarlyFraudWarning = await stripe.radar.earlyFraudWarnings.retrieve(
    'issfr_1Kohd6FGbM9HwCxiZLFERapu',
  );

  const listEarlyFraudWarnings = await stripe.radar.earlyFraudWarnings.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
