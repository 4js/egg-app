'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(username, password) {
    const { ctx, app } = this;
    const user = await app.model.User.findOne({ where: { username } });
    if (user) ctx.throw(400, '该用户已经注册');
    const newUser = await app.model.User.create({ username, password });
    return newUser;
  }

  async login(username, password) {
    const { ctx, app } = this;
    const user = await app.model.User.findOne({ where: { username } });
    console.log(user);
    if (!user) ctx.throw(400, '用户名输入错误');
    if (user.password !== password) {
      ctx.throw(400, '密码输入错误');
    }
    return { message: '登录成功', data: { user, token: '23dads3454sdf54dafsa33' } };
  }
}

module.exports = UserService;
