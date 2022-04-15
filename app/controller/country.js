/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationCountrySpec = async (req, res) => {
  const listCountrySpecs = await stripe.countrySpecs.list({
    limit: 3,
  });

  const retrieveCountrySpec = await stripe.countrySpecs.retrieve(
    'US',
  );

  return res.send({ status: 200 });
};
