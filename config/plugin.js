'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  tracer: {
    enable: true,
    package: 'egg-tracer',
  },
};
