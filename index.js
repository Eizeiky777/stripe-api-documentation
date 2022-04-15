/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const http = require('http');
const app = require('./app');

const { env } = process;
const svc = env.SVC_NAME || 'Meteor';
const host = env.HOST || 'localhost';
const port = Number(env.PORT) || 4444;

const server = http.createServer(app);

server.listen(port, () => console.log('Server Running Well', port));
