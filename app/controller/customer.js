/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationCustomer = async (req, res) => {
  const createCustomer = await stripe.customers.create({
    name: 'Ekky',
    phone: '085735564255',
    email: 'ekky@gmail.com',
    description: 'My First Test Customer (created for API docs)',
    address: 'Meteor Inovasi Digital M3/7',
    metadata: {
      role: 'store',
    },
  });

  const retrieveCustomer = await stripe.customers.retrieve(
    'cus_LVPQdbpY8eA0bZ',
  );

  const updateCustomer = await stripe.customers.update('cus_LVPQdbpY8eA0bZ', {
    metadata: { order_id: '6735' },
  });

  const deleteCustomer = await stripe.customers.del('cus_LVPQdbpY8eA0bZ');

  const listCustomer = await stripe.customers.list({
    limit: 3,
  });

  const searchCustomer = await stripe.customers.search({
    query: "name:'fakename' AND metadata['foo']:'bar'",
  });

  return res.send({ status: 200 });
};
