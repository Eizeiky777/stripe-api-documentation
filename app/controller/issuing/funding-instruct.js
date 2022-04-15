/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationIssuingFundingInstruction = async (req, res) => {
  const createFundingInstructions = await stripe.fundingInstructions.create({
    currency: 'eur',
    funding_type: 'bank_transfer',
    bank_transfer: { type: 'eu_bank_account' },
  });

  const listFundingInstructions = await stripe.fundingInstructions.list({
    limit: 3,
  });

  const topupFundingInstructions = await stripe.fundingInstructions.fund(
    'fi_1Kohd6FGbM9HwCxiEzJ65tl4',
    { currency: 'eur', amount: 4200 },
  );

  return res.send({ status: 200 });
};
