/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPaymentIntent = async (req, res) => {
  const createPaymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'sgd',
    payment_method_types: ['card'], // pm_card_visa
    metadata: {
      order_id: '6735',
    },
  });

  await stripe.confirmCardPayment(createPaymentIntent.client_secret).then((response) => {
    if (response.error) {
      console.log('🚀 ~ file: documentation.js ~ line 205 ~ stripe.confirmCardPayment ~ response', response);
      // Handle error here
    } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
      console.log('🚀 ~ file: documentation.js ~ line 207 ~ stripe.confirmCardPayment ~ response', response);
      // Handle successful payment here
    }
    console.log('🚀 ~ file: documentation.js ~ line 209 ~ stripe.confirmCardPayment ~ response', response);
  });

  const retreivePaymentIntent = await stripe.paymentIntents.retrieve(
    'pi_1EUnCGJnvmXwwenz1Ayma5Ya',
  );

  const updatePaymentIntent = await stripe.paymentIntents.update(
    'pi_1EUnCGJnvmXwwenz1Ayma5Ya',
    { metadata: { order_id: '6735' } },
  );

  const confirmPaymentIntent = await stripe.paymentIntents.confirm(
    'pi_1EUnCGJnvmXwwenz1Ayma5Ya',
    { payment_method: 'pm_card_visa' },
  );

  const capturePaymentIntent = await stripe.paymentIntents.capture(
    'pi_1EUn5UJnvmXwwenzlGjDvd2j',
  );

  const cancelPaymentIntent = await stripe.paymentIntents.cancel(
    'pi_1EUnCGJnvmXwwenz1Ayma5Ya',
  );

  const listPaymentIntents = await stripe.paymentIntents.list({
    limit: 3,
  });

  const searchPaymentIntent = await stripe.paymentIntents.search({
    query: 'status:\'succeeded\' AND metadata[\'order_id\']:\'6735\'',
  });

  const incrementPaymentIntent = await stripe.paymentIntents.incrementAuthorization(
    'pi_1EUnCGJnvmXwwenz1Ayma5Ya',
    { amount: 2099 },
  );

  return res.send({ status: 200 });
};
