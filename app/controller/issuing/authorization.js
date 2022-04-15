/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationIssuingAuthorization = async (req, res) => {
  const retrieveAuthorization = await stripe.issuing.authorizations.retrieve(
    'iauth_1Kohd6FGbM9HwCxigEAcrf97',
  );

  const updateAuthorization = await stripe.issuing.authorizations.update(
    'iauth_1Kohd6FGbM9HwCxigEAcrf97',
    { metadata: { order_id: '6735' } },
  );

  const approveAuthorization = await stripe.issuing.authorizations.approve(
    'iauth_1Kohd6FGbM9HwCxigEAcrf97',
  );

  const declineAuthorization = await stripe.issuing.authorizations.decline(
    'iauth_1Kohd6FGbM9HwCxigEAcrf97',
  );

  const listAuthorizations = await stripe.issuing.authorizations.list({
    limit: 3,
  });
  return res.send({ status: 200 });
};
