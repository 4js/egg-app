'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.register(username, password);
    ctx.body = {
      msg: '注册成功',
      data: result,
    };
  }
}

module.exports = UserController;
