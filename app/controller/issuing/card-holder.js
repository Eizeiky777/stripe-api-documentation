/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationIssuingCardHolder = async (req, res) => {
  const createCardholder = await stripe.issuing.cardholders.create({
    type: 'individual',
    name: 'Jenny Rosen',
    email: 'jenny.rosen@example.com',
    phone_number: '+18888675309',
    billing: {
      address: {
        line1: '1234 Main Street',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        postal_code: '94111',
      },
    },
  });

  const retrieveCardholder = await stripe.issuing.cardholders.retrieve(
    'ich_1Kohd6FGbM9HwCxi6rUsqghn',
  );

  const updateCardholder = await stripe.issuing.cardholders.update(
    'ich_1Kohd6FGbM9HwCxi6rUsqghn',
    { metadata: { order_id: '6735' } },
  );

  const listCardholders = await stripe.issuing.cardholders.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
