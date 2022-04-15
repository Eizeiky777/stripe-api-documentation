/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const multer = require('multer');
const { defaultPrice } = require('../app/config/config-price');
const { tesPreRequestKey } = require('../app/controller/documentation');
const { testUploadFile } = require('../app/controller/files');
const { documentationSession } = require('../app/controller/session');

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 1024 * 1024 } });

const uploadInternal = multer({ dest: 'uploads/' });
const cpUploadInternal = uploadInternal.fields([{ name: 'image', maxCount: 2 }, { name: 'gallery', maxCount: 8 }]);

// router.post('/S3-upload', upload.array('image', 5), storageS3.uploadFile);

// router.get('/test-pre-request-key', tesPreRequestKey);
router.post('/test-upload-file', cpUploadInternal, testUploadFile);

router.post('/config-price', defaultPrice);

router.post('/create-checkout-session', documentationSession.createSession);
router.get('/checkout-session', documentationSession.retrieveSession);

module.exports = router;
