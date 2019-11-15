'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  email: {
    enable: true,
    package: 'egg-email',
  },
};
