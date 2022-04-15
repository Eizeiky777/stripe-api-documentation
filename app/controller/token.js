/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationToken = async (req, res) => {
  const createCardToken = await stripe.tokens.create({
    card: {
      number: '4242424242424242',
      exp_month: 4,
      exp_year: 2023,
      cvc: '314',
    },
  });

  const createBankToken = await stripe.tokens.create({
    bank_account: {
      country: 'US',
      currency: 'sgd',
      account_holder_name: 'Jenny Rosen',
      account_holder_type: 'individual',
      routing_number: '110000000',
      account_number: '000123456789',
    },
  });

  const createPersonalIdentifyInfoToken = await stripe.tokens.create({
    pii: { id_number: '000000000' },
  });

  const createAccountToken = await stripe.tokens.create({
    account: {
      individual: {
        first_name: 'Jane',
        last_name: 'Doe',
      },
      tos_shown_and_accepted: true,
    },
  });

  const createPersonToken = await stripe.tokens.create({
    person: {
      first_name: 'Jane',
      last_name: 'Doe',
      relationship: { owner: true },
    },
  });

  const createCvcToken = await stripe.tokens.create({
    cvc_update: { cvc: '123' },
  });

  const retrieveToken = await stripe.tokens.retrieve(
    'tok_1Kohd3FGbM9HwCxiOKdxLAvy',
  );

  return res.send({ status: 200 });
};
