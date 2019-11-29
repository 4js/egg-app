'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.product.list();
    ctx.body = result;
  }
}

module.exports = ProductController;
