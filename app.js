/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const compression = require('compression');
const router = require('./routes/api');

const app = express();
app.enable('trust proxy');

// cors
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'));
app.set('view engine', 'ejs');
app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'static', 'public')));

app.use(router);

// listen on port
module.exports = app;
