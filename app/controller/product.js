'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  /**
   * 获取所有产品列表
   * @method {get}
   */

  async list() {
    const { ctx } = this;
    const result = await ctx.service.product.list();
    ctx.body = result;
  }
}

module.exports = ProductController;
