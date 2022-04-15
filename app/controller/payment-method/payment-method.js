/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationPaymentMethod = async (req, res) => {
  const createPaymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 4,
      exp_year: 2023,
      cvc: '314',
    },
  });

  const retrievePaymentMethod = await stripe.paymentMethods.retrieve(
    'pm_1EUn5VJnvmXwwenzTDs9xSu5',
  );

  const updatePaymentMethod = await stripe.paymentMethods.update(
    'pm_1EUn5VJnvmXwwenzTDs9xSu5',
    { metadata: { order_id: '6735' } },
  );

  const listPaymentMethods = await stripe.paymentMethods.list({
    customer: 'cus_6EittqR18ovqrQ',
    type: 'card',
  });

  const listCustomerPaymentMethods = await stripe.customers.listPaymentMethods(
    'cus_LVj5vj0mPO9U4N',
    { type: 'card' },
  );

  const attachPaymentMethodToCustomer = await stripe.paymentMethods.attach(
    'pm_1Kohd4FGbM9HwCxiJkqiBc1Z',
    { customer: 'cus_6EittqR18ovqrQ' },
  );

  const detachPaymentMethodToCustomer = await stripe.paymentMethods.detach(
    'pm_1Kohd4FGbM9HwCxiJkqiBc1Z',
  );

  return res.send({ status: 200 });
};
