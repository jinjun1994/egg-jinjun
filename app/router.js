'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/time', controller.home.time);
  router.get('/fund', controller.home.getFund);
  router.get('/email', controller.home.sendEmail);
};
