'use strict';

const Controller = require('egg').Controller;

class AirlineController extends Controller {

  /**
   * 查询航线列表
   * @method {get}
   */
  async list() {
    const { ctx } = this;
    const result = await ctx.service.airline.list();
    ctx.body = result;
  }

}

module.exports = AirlineController;
