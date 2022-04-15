/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationTerminalReader = async (req, res) => {
  const createReader = await stripe.terminal.readers.create({
    registration_code: 'puppies-plug-could',
    label: 'Blue Rabbit',
    location: 'tml_1234',
  });

  const retrieveReader = await stripe.terminal.readers.retrieve(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
  );

  const updateReader = await stripe.terminal.readers.update(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
    { label: 'Blue Rabbit' },
  );

  const deleteReader = await stripe.terminal.readers.del(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
  );

  const listReaders = await stripe.terminal.readers.list({
    limit: 3,
  });

  const handOffPaymentIntent = await stripe.terminal.readers.processPaymentIntent(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
    { payment_intent: 'pi_1EUnCGJnvmXwwenz1Ayma5Ya' },
  );

  const handOffSetupPaymentIntent = await stripe.terminal.readers.processSetupIntent(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
    {
      setup_intent: 'seti_1KOfddJnvmXwwenzQYMRylgc',
      customer_consent_collected: 'true',
    },
  );

  const setReaderDisplay = await stripe.terminal.readers.setReaderDisplay(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
    {
      type: 'cart',
      cart: {
        currency: 'usd',
        line_items: [
          {
            amount: 5100,
            description: 'Red t-shirt',
            quantity: 1,
          },
        ],
        tax: 100,
        total: 5200,
      },
    },
  );

  const cancelReader = await stripe.terminal.readers.cancelAction(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
  );

  const simulatePresentingPaymentMethod = await stripe.testHelpers.terminal.readers.presentPaymentMethod(
    'tmr_urM94wpfLZKRQ7XSLHEtehaE',
  );

  return res.send({ status: 200 });
};
