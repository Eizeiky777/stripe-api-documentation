/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationVerificationIdentity = async (req, res) => {
  const createVerificationSession = await stripe.identity.verificationSessions.create({
    type: 'document',
  });

  const listVerificationSessions = await stripe.identity.verificationSessions.list({
    limit: 3,
  });

  const retrieveVerificationSession = await stripe.identity.verificationSessions.retrieve(
    'vs_1Kohd7FGbM9HwCxi6l8JyPUZ',
  );

  const updateVerificationSession = await stripe.identity.verificationSessions.update(
    'vs_1Kohd7FGbM9HwCxi6l8JyPUZ',
    { type: 'id_number' },
  );

  const cancelVerificationSession = await stripe.identity.verificationSessions.cancel(
    'vs_1Kohd7FGbM9HwCxi6l8JyPUZ',
  );

  const redactVerificationSession = await stripe.identity.verificationSessions.redact(
    'vs_1Kohd7FGbM9HwCxi6l8JyPUZ',
  );

  const retrieveVerificationReport = await stripe.identity.verificationReports.retrieve(
    'vr_1Kohd7FGbM9HwCxiFHqEjqGt',
  );

  const listVerificationReports = await stripe.identity.verificationReports.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
