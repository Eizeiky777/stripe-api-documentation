/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('../documentation');

exports.documentationSources = async (req, res) => {
  await stripe.sources.create({
    type: 'ach_credit_transfer',
    currency: 'usd',
    owner: {
      email: 'jenny.rosen@example.com',
    },
  }, (err, source) => {
    console.log('🚀 ~ file: source.js ~ line 12 ~ exports.documentationSources= ~ source', source);
    // asynchronously called
  });

  const retrieveSource = await stripe.sources.retrieve(
    'src_1Kohd4FGbM9HwCxi7wnoUVPm',
  );

  const updateSource = await stripe.sources.update(
    'src_1Kohd4FGbM9HwCxi7wnoUVPm',
    { metadata: { order_id: '6735' } },
  );

  // attach a source
  stripe.customers.createSource(
    'cus_LVj5vj0mPO9U4N',
    {
      source: 'src_1Kohd4FGbM9HwCxi7wnoUVPm',
    },
    (err, source) => {
      console.log('🚀 ~ file: source.js ~ line 31 ~ exports.documentationSources= ~ source', source);
      // asynchronously called
    },
  );

  // detach a source
  stripe.customers.deleteSource(
    'cus_LVj5vj0mPO9U4N',
    'src_1Kohd4FGbM9HwCxi7wnoUVPm',
    (err, confirmation) => {
      console.log('🚀 ~ file: source.js ~ line 42 ~ exports.documentationSources= ~ confirmation', confirmation);
      // asynchronously called
    },
  );

  return res.send({ status: 200 });
};
