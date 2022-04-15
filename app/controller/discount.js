/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationDiscount = async (req, res) => {
  await stripe.customers.deleteDiscount(
    'cus_LVj5vj0mPO9U4N',
    (err, confirmation) => {
      console.log('🚀 ~ file: documentation.js ~ line 510 ~ exports.tesPreRequestKey= ~ confirmation', confirmation);
      // asynchronously called
    },
  );

  await stripe.subscriptions.deleteDiscount(
    'sub_1Kohd2JnvmXwwenzBOa1BsZS',
    (err, confirmation) => {
      console.log('🚀 ~ file: documentation.js ~ line 518 ~ exports.tesPreRequestKey= ~ confirmation', confirmation);
      // asynchronously called
    },
  );

  return res.send({ status: 200 });
};
