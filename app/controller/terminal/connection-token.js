/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { stripe } = require('../documentation');

exports.documentationTerminalConnectionToken = async (req, res) => {
  const connectionToken = await stripe.terminal.connectionTokens.create();

  return res.send({ status: 200 });
};
