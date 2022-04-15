/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationSigmaScheduledQuery = async (req, res) => {
  const retrieveScheduledQueryRun = await stripe.sigma.scheduledQueryRuns.retrieve(
    'sqr_1Kohd7JnvmXwwenzwanfabvU',
  );

  const listScheduledQueryRuns = await stripe.sigma.scheduledQueryRuns.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
