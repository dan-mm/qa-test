/* eslint-disable spaced-comment,no-unused-vars */
const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');
delete wdioConf.config.user;
delete wdioConf.config.key;
delete wdioConf.config.services;
delete wdioConf.config.capabilities;


exports.config = merge(wdioConf.config, {
  baseUrl: 'https://www.reddit.com',
  services: ['selenium-standalone'],
  capabilities: [{
    maxInstances: 3,
    browserName: 'chrome'
  }],
  suites: {
    current: [
    ]
  }

});
