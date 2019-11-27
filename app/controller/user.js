'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username.length) ctx.throw(400, '用户名或者密码不能为空');
    const result = await ctx.service.user.register(username, password);
    ctx.body = result;
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username.length) ctx.throw(400, '用户名或者密码不能为空');
    const result = await ctx.service.user.login(username, password);
    console.log(result);
    ctx.body = result;
  }
}

module.exports = UserController;
