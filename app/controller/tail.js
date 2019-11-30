'use strict';

const Controller = require('egg').Controller;

class TailController extends Controller {
  /**
   * 获取所有学习路线列表
   * @method {get}
   */

  async list() {
    const { ctx } = this;
    const result = await ctx.service.tail.list();
    ctx.body = result;
  }
}

module.exports = TailController;
