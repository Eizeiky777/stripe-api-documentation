/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationEvent = async (req, res) => {
  const retrieveEvent = await stripe.events.retrieve(
    'evt_1KoObRFGbM9HwCxiPheQQaeJ',
  );

  const listEvent = await stripe.events.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
