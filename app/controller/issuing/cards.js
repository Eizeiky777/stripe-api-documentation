/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationIssuingCards = async (req, res) => {
  const createCard = await stripe.issuing.cards.create({
    cardholder: 'ich_1Kohd6FGbM9HwCxi6rUsqghn',
    currency: 'usd',
    type: 'virtual',
  });

  const retrieveCard = await stripe.issuing.cards.retrieve(
    'ic_1Kohd6FGbM9HwCxiqufUZ9Ce',
  );

  const updateCard = await stripe.issuing.cards.update(
    'ic_1Kohd6FGbM9HwCxiqufUZ9Ce',
    { metadata: { order_id: '6735' } },
  );

  const listCards = await stripe.issuing.cards.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
