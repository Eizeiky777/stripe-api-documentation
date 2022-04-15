/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationProducts = async (req, res) => {
  const createProduct = await stripe.products.create({
    name: 'Gold Special',
  });

  const retrieveProduct = await stripe.products.retrieve(
    'prod_LVj56KKQTOhFDL',
  );

  const updateProduct = await stripe.products.update(
    'prod_LVj56KKQTOhFDL',
    { metadata: { order_id: '6735' } },
  );

  const listProducts = await stripe.products.list({
    limit: 3,
  });

  const deleteProduct = await stripe.products.del(
    'prod_LVj56KKQTOhFDL',
  );

  const searchProduct = await stripe.products.search({
    query: 'active:\'true\' AND metadata[\'order_id\']:\'6735\'',
  });

  return res.send({ status: 200 });
};
