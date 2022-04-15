/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { env } = process;
const { readFileSync } = require('fs');
const path = require('path');
const uuid = require('uuid');

const stripe = require('stripe')(env.API_SECRET_KEY);

exports.stripe = stripe;

exports.tesPreRequestKey = async (req, res) => {
  const charge = await stripe.charges.retrieve('ch_3KoMuEFGbM9HwCxi0NUsTtio', {
    apiKey: env.API_SECRET_KEY,
  });

  const account = await stripe.charges.retrieve('ch_3KoMuEFGbM9HwCxi0NUsTtio', {
    stripeAccount: 'acct_1KoMn7FGbM9HwCxi',
  });

  const expand = await stripe.charges.retrieve('ch_3KoMuEFGbM9HwCxi0NUsTtio', {
    expand: ['customer', 'invoice.subscription'],
  });

  const idempotencyKey = await stripe.charges.create(
    {
      amount: 2000,
      currency: 'sgd',
      source: 'tok_visa', // obtained with Stripe.js
      description: 'My First Test Charge (created for API docs)',
    },
    {
      idempotencyKey: uuid.v4(),
    },
    (err, charges) => {
      console.log('🚀 ~ file: customer.js   ~ charges', charges);
      // asynchronously called
    },
  );

  const metadata = await stripe.charges.create({
    amount: 2000,
    currency: 'sgd',
    source: 'tok_visa', // obtained with Stripe.js
    metadata: { order_id: '6735' },
  });

  const listed = await stripe.charges.list({
    limit: 10,
    //   starting_after: 'sadasd',
    //   ending_before: 'asdasd'
  });

  /**
   *
   *    doc: https://stripe.com/docs/search#search-query-language
   *    object is the core of query
   *
   */
  const searchQuery = await stripe.charges.search({
    query: "metadata['key']:'value'",
  });

  const customer = await stripe.customers.create();
  const requestIdCustomer = customer.lastResponse.requestId;

  return res.send({ status: 200 });
};
