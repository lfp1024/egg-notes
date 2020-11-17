/* eslint valid-jsdoc: "off" */

'use strict';

const loggerConfig = require('./config.logger.js');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603864556756_6694';

  // add your middleware config here
  config.middleware = ['request'];

  config.tracer = {
    Class: require('../app/tracer'),
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.customLogger = {
    ...loggerConfig,
  }

  return {
    ...config,
    ...userConfig,
  };
};
