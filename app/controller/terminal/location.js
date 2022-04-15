/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationTerminalLocationAddress = async (req, res) => {
  const createLocation = await stripe.terminal.locations.create({
    display_name: 'My First Store',
    address: {
      line1: '1234 Main Street',
      city: 'San Francisco',
      country: 'US',
      postal_code: '94111',
    },
  });

  const retrieveLocation = await stripe.terminal.locations.retrieve(
    'tml_8S5GxxDN1GG6tzCuBkfSRdCO',
  );

  const updateLocation = await stripe.terminal.locations.update(
    'tml_8S5GxxDN1GG6tzCuBkfSRdCO',
    { display_name: 'My First Store' },
  );

  const deleteLocation = await stripe.terminal.locations.del(
    'tml_8S5GxxDN1GG6tzCuBkfSRdCO',
  );

  const listLocations = await stripe.terminal.locations.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};
