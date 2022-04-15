/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationDispute = async (req, res) => {
  /**
   *
   *  when facing claim
   * https://stripe.com/docs/api/disputes/retrieve?lang=node
   *
   */

  const createDispute = await stripe.issuing.disputes.create({
    transaction: 'ipi_1Kohd6FGbM9HwCxipqaplEH8',
    evidence: {
      reason: 'fraudulent',
      fraudulent: {
        explanation: 'Purchase was unrecognized.',
      },
    },
  });

  const submitDispute = await stripe.issuing.disputes.submit(
    'idp_1Kohd6FGbM9HwCxiIshJGXYd',
  );

  const retrieveDispute = await stripe.issuing.disputes.retrieve(
    'idp_1Kohd6FGbM9HwCxiIshJGXYd',
  );

  const updateDispute = await stripe.issuing.disputes.update(
    'idp_1Kohd6FGbM9HwCxiIshJGXYd',
    {
      evidence: {
        reason: 'not_received',
        not_received: {
          expected_at: 1590000000,
          explanation: '',
          product_description: 'Baseball cap',
          product_type: 'merchandise',
        },
      },
    },
  );

  const closeDispute = await stripe.disputes.close(
    'dp_1KoObdFGbM9HwCxizpQrPqHv',
  );

  const disputes = await stripe.issuing.disputes.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
