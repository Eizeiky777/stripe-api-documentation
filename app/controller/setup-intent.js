/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationSetupIntents = async (req, res) => {
  const createSetupIntent = await stripe.setupIntents.create({
    payment_method_types: ['card'],
  });

  const retrieveSetupIntent = await stripe.setupIntents.retrieve(
    'seti_1KOfddJnvmXwwenzQYMRylgc',
  );

  const updateSetupIntent = await stripe.setupIntents.update(
    'seti_1KOfddJnvmXwwenzQYMRylgc',
    { metadata: { user_id: '3435453' } },
  );

  const confirmSetupIntent = await stripe.setupIntents.confirm(
    'seti_1KOfddJnvmXwwenzQYMRylgc',
    { payment_method: 'pm_card_visa' },
  );

  const cancelSetupIntent = await stripe.setupIntents.cancel(
    'seti_1KOfddJnvmXwwenzQYMRylgc',
  );

  const listSetupIntents = await stripe.setupIntents.list({
    limit: 3,
  });

  // verify micro-deposit
  const Resource = stripe.StripeResource.extend({
    request: stripe.StripeResource.method({
      method: 'POST',
      path: 'payment_intents/seti_1KOfddJnvmXwwenzQYMRylgc/verify_microdeposits',
    }),
  });

  new Resource(stripe).request({
    amounts: [
      32,
      45,
    ],
  },
  (err, response) => {
    console.log('🚀 ~ file: setup-intent.js ~ line 45 ~ exports.documentationSetupIntents= ~ response', response);
    // asynchronously called
  });

  const setupAttempts = await stripe.setupAttempts.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
