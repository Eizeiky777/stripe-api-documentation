/* eslint-disable no-unused-vars */
const { readFileSync } = require('fs');
const path = require('path');
const uuid = require('uuid');

const { stripe } = require('./documentation');

exports.documentationFiles = async (req, res) => {
  const retrieveFile = await stripe.files.retrieve(
    'file_1KoObdFGbM9HwCxiaxNwt4WW',
  );

  const listFile = await stripe.files.list({ limit: 3 });

  const createFileLink = await stripe.fileLinks.create({
    file: 'file_1KoObdFGbM9HwCxiaxNwt4WW',
  });

  const retrieveFileLink = await stripe.fileLinks.retrieve(
    'link_1KoObdJnvmXwwenzuF7gTgzs',
  );

  const updateFileLink = await stripe.fileLinks.update(
    'link_1KoObdJnvmXwwenzuF7gTgzs',
    { metadata: { order_id: '6735' } },
  );

  const listFileLinks = await stripe.fileLinks.list({
    limit: 3,
  });

  return res.send({ status: 200 });
};

exports.testUploadFile = async (req, res) => {
  const currDir = __dirname; // --> D:\\Research\\webhooks\\stripe-01\\app\\controller
  const rootPath = `${path.resolve('./')}`; // --> "D:\\Research\\webhooks\\stripe-01

  const { files } = req;

  const sampleFiles = {
    image: [
      {
        fieldname: 'image',
        originalname: 'gija99bzeq461 - Copy.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: 'uploads/',
        filename: '9e239d80f3adf062e0c895bcc29cf2db',
        path: 'uploads\\9e239d80f3adf062e0c895bcc29cf2db',
        size: 11900,
      },
    ],
  };

  const fp = readFileSync(`${rootPath}\\${files.image[0].path}`); // -> create buffer

  // const file = await stripe.files.create({
  //   purpose: 'dispute_evidence',
  //   file: {
  //     data: fp,
  //     name: files.image[0].originalname,
  //     type: 'application/octet-stream',
  //   },
  // });

  return res.send({
    status: 200,
    // file,
    currDir,
    rootPath,
  });
};
