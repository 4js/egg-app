'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  /**
   * 用户注册
   * @param {String} 用户名/手机号
   * @param {String} 密码 md5加密
   */
  async register(username, password) {
    const { ctx, app } = this;
    const user = await app.model.User.findOne({ where: { username } });
    if (user) ctx.throw(400, '该用户已经注册');
    const newUser = await app.model.User.create({ username, password });
    return newUser;
  }

  /**
   * 用户登录
   * @param {String} 用户名/手机号
   * @param {String} 密码 md5加密
   */
  async login(username, password) {
    const { ctx, app } = this;
    const user = await app.model.User.findOne({ where: { username } });
    if (!user) ctx.throw(400, '用户名输入错误');
    if (user.password !== password) {
      ctx.throw(400, '密码输入错误');
    }
    const createToken = ctx.helper.getTimestamp(user.user_id);
    return { message: '登录成功', data: { user, token: createToken } };
  }
  
}

module.exports = UserService;
