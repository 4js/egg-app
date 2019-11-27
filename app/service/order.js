'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  async list() {
    const { app } = this;
    const orderList = await app.model.OrderInfo.findAll();
    return orderList;
  }
}

module.exports = OrderService;
