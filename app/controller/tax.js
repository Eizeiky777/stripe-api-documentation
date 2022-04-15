/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationTaxes = async (req, res) => {
  const taxCodes = await stripe.taxCodes.list({
    limit: 3,
  });

  const taxCode = await stripe.taxCodes.retrieve(
    'txcd_99999999',
  );

  const createTaxRate = await stripe.taxRates.create({
    display_name: 'VAT',
    description: 'VAT Germany',
    jurisdiction: 'DE',
    percentage: 16,
    inclusive: false,
  });

  const retrieveTaxRate = await stripe.taxRates.retrieve(
    'txr_1Kohd4FGbM9HwCxikE78wjts',
  );

  const updateTaxRate = await stripe.taxRates.update(
    'txr_1Kohd4FGbM9HwCxikE78wjts',
    { active: false },
  );

  const listTaxRates = await stripe.taxRates.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
