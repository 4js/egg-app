'use strict';

const Controller = require('egg').Controller;

class TailController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.tail.list();
    ctx.body = result;
  }
}

module.exports = TailController;
