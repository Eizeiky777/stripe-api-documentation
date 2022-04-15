/* eslint-disable no-unused-vars */
const { env } = process;
const { stripe } = require('./documentation');

exports.documentationCapability = async (req, res) => {
  const retrieveCapability = await stripe.accounts.retrieveCapability(
    env.CAPABILITY_ID,
    'card_payments',
  );

  const updateCapability = await stripe.accounts.updateCapability(
    env.CAPABILITY_ID,
    'card_payments',
    { requested: true },
  );

  const listCapabilities = await stripe.accounts.listCapabilities(
    env.CAPABILITY_ID,
  );

  return res.send({ status: 200 });
};
