'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 用户注册
   * @method {post}
   * @param {username} 用户名/手机号
   * @param {password} 密码/md5加密
   */
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username.length) ctx.throw(400, '用户名或者密码不能为空');
    const result = await ctx.service.user.register(username, password);
    ctx.body = result;
  }

  /**
   * 用户登录
   * @method {post}
   * @param {username} 用户名/手机号
   * @param {password} 密码/md5加密
   */
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    if (!username.length) ctx.throw(400, '用户名或者密码不能为空');
    const result = await ctx.service.user.login(username, password);
    ctx.body = result;
  }
}

module.exports = UserController;
