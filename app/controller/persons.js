/* eslint-disable no-unused-vars */
const { stripe } = require('./documentation');

exports.documentationPersons = async (req, res) => {
  const createPerson = await stripe.accounts.createPerson(
    'acct_1KoMn7FGbM9HwCxi',
    { first_name: 'Jane', last_name: 'Diaz' },
  );

  const retrievePerson = await stripe.accounts.retrievePerson(
    'acct_1KoMn7FGbM9HwCxi',
    'person_4Kohd500G4HNLRVE',
  );

  const updatePerson = await stripe.accounts.updatePerson(
    'acct_1KoMn7FGbM9HwCxi',
    'person_4Kohd500G4HNLRVE',
    { metadata: { order_id: '6735' } },
  );

  const deletePerson = await stripe.accounts.deletePerson(
    'acct_1KoMn7FGbM9HwCxi',
    'person_4Kohd500G4HNLRVE',
  );

  const listPersons = await stripe.accounts.listPersons(
    'acct_1KoMn7FGbM9HwCxi',
    { limit: 3 },
  );

  return res.send({ status: 200 });
};
