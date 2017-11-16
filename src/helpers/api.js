const fetch = require('node-fetch');
const Utils = require('./helpers.js');

const options = {
  hostname: 'http://localhost:3002',  // TODO: improve this
  port: 80,
  path: '/',
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + Buffer.from('3073a9e1-2fc4-4205-9b13-c62366856503:')
      .toString('base64'),
    'content-type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT'
  }
};

function doFetch(path, method, headers, body) {
  return fetch(options.hostname + path, { method: method, body: body, headers: headers })
    .catch(function (err) {
      console.log('fetch error: ', err);
    });
}
