'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async list() {
    const { app } = this;
    const orderList = await app.model.Product.findAll();
    return orderList;
  }
}

module.exports = ProductService;
