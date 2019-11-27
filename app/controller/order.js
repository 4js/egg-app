'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async list() {
    const { ctx } = this;
    // const { username, password } = ctx.request.body;
    // if (!username.length) ctx.throw(400, '用户名或者密码不能为空');
    const result = await ctx.service.order.list();
    ctx.body = result;
  }
}

module.exports = OrderController;
