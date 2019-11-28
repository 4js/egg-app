'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.order.list();
    ctx.body = result;
  }
}

module.exports = OrderController;
