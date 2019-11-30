'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/order/list', controller.order.list);
  router.get('/product', controller.product.list);
  router.get('/tail', controller.tail.list);
};
