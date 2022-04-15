/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationSession = {
  createSession: async (req, res) => {
    const { quantity, amount } = req.body;

    const createdSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: +amount,
          },
          quantity: +quantity, // this will auto calculate amount * quantity
        },
      ],
      success_url: 'http://localhost:3000/success.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
      // line_items: [{ price: 'price_H5ggYwtDq4fbrJ', quantity: 2 }],
      mode: 'payment',
    });

    // 4242 4242 4242 4242 -- 12/34 -- 567
    res.redirect(303, createdSession.url);
  },

  retrieveSession: async (req, res) => {
    const { sessionId } = req.query;
    const retrieveSession = await stripe.checkout.sessions.retrieve(sessionId);
    res.send(retrieveSession);
  },

  // const expireSession = await stripe.checkout.sessions.expire(
  //   'cs_test_a1Z18WbT5M06F7b3wJFyq7XxY2ozJ6nwMtHnfEqkXSjd1HrHwECwFu5WoJ',
  // );

  // const listSessions = await stripe.checkout.sessions.list({
  //   limit: 3,
  // });

  // await stripe.checkout.sessions.listLineItems(
  //   'cs_test_a1Z18WbT5M06F7b3wJFyq7XxY2ozJ6nwMtHnfEqkXSjd1HrHwECwFu5WoJ',
  //   { limit: 5 },
  //   (err, lineItems) => {
  //     console.log('🚀 ~ file: documentation.js ~ line 596 ~ exports.tesPreRequestKey= ~ lineItems', lineItems);
  //     // asynchronously called
  //   },
  // );

  // return res.send({ status: 200 });
};

const sampleCreatedSessions = {
  id: 'cs_test_a1k3L3YunZeSCz2cnTyLlx1hwRBn9WecadNBsVHn8SWwMpp3PCxocZsEle',
  object: 'checkout.session',
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 50,
  amount_total: 50,
  automatic_tax: { enabled: false, status: null },
  billing_address_collection: null,
  cancel_url: 'https://example.com/cancel',
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  currency: 'usd',
  customer: null,
  customer_creation: 'always',
  customer_details: null,
  customer_email: null,
  expires_at: 1650121971,
  livemode: false,
  locale: null,
  metadata: {},
  mode: 'payment',
  payment_intent: 'pi_3KoqpLFGbM9HwCxi0kWmz2NL',
  payment_link: null,
  payment_method_options: {},
  payment_method_types: ['card'],
  payment_status: 'unpaid',
  phone_number_collection: { enabled: false },
  recovered_from: null,
  setup_intent: null,
  shipping: null,
  shipping_address_collection: null,
  shipping_options: [],
  shipping_rate: null,
  status: 'open',
  submit_type: null,
  subscription: null,
  success_url: 'https://example.com/success',
  total_details: {
    amount_discount: 0,
    amount_shipping: 0,
    amount_tax: 0,
  },
  url: 'https://checkout.stripe.com/pay/cs_test_a1k3L3YunZeSCz2cnTyLlx1hwRBn9WecadNBsVHn8SWwMpp3PCxocZsEle#fidkdWxOYHwnPyd1blpxYHZxWjA0TmpIazJDQmdIPE1yRn1sQVxoPU1rUjdHSlNRYjNXZFJfR31vczd3bGk9djUyaGFqU2hTcl9BQz1Vbn9mRjFvVk5hYU1mQ3ZxR0lxX2ZXSV1sdFxPYGpUNTVvT0xqT380aycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',
};

const sampleRetrieveSessions = {
  id: 'cs_test_a15WnjRXfm9CxGg6xPP3jXMUkTQV8sD4383lY6VvFyBeYhoixZusSfYGg7',
  object: 'checkout.session',
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 200,
  amount_total: 200,
  automatic_tax: {
    enabled: false,
    status: null,
  },
  billing_address_collection: null,
  cancel_url: 'http://localhost:3000/cancel',
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  currency: 'usd',
  customer: 'cus_LVtzrqZoMfDkSD',
  customer_creation: 'always',
  customer_details: {
    address: {
      city: null,
      country: 'ID',
      line1: null,
      line2: null,
      postal_code: null,
      state: null,
    },
    email: 'ekky@gmail.com',
    name: 'ekky',
    phone: null,
    tax_exempt: 'none',
    tax_ids: [],
  },
  customer_email: null,
  expires_at: 1650127158,
  livemode: false,
  locale: null,
  metadata: {},
  mode: 'payment',
  payment_intent: 'pi_3KosB1FGbM9HwCxi0EAyzfFJ',
  payment_link: null,
  payment_method_options: {},
  payment_method_types: [
    'card',
  ],
  payment_status: 'paid',
  phone_number_collection: {
    enabled: false,
  },
  recovered_from: null,
  setup_intent: null,
  shipping: null,
  shipping_address_collection: null,
  shipping_options: [],
  shipping_rate: null,
  status: 'complete',
  submit_type: null,
  subscription: null,
  success_url: 'http://localhost:3000/success.html?session_id={CHECKOUT_SESSION_ID}',
  total_details: {
    amount_discount: 0,
    amount_shipping: 0,
    amount_tax: 0,
  },
  url: null,
};
