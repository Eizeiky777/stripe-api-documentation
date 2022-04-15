/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPaymentLink = async (req, res) => {
  const createPaymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: 'price_1Kohd4JnvmXwwenzSrWI61fs',
        quantity: 1,
      },
    ],
  });

  const retrievePaymentLink = await stripe.paymentLinks.retrieve(
    'plink_1Kohd4FGbM9HwCxi0H5P04KQ',
  );

  const updatePaymentLink = await stripe.paymentLinks.update(
    'plink_1Kohd4FGbM9HwCxi0H5P04KQ',
    { active: false },
  );

  const listPaymentLinks = await stripe.paymentLinks.list({
    limit: 3,
  });

  await stripe.paymentLinks.listLineItems(
    'plink_1Kohd4FGbM9HwCxi0H5P04KQ',
    { limit: 3 },
    (err, lineItems) => {
      console.log('🚀 ~ file: documentation.js ~ line 627 ~ exports.tesPreRequestKey= ~ lineItems', lineItems);
      // asynchronously called
    },
  );

  return res.send({ status: 200 });
};
