'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(username, password) {
    const { ctx, app } = this;
    const user = await app.model.User.findOne({ where: { username, password } });
    if (user) ctx.throw(400, '该用户已经注册');
    const newUser = await app.model.User.create({ username, password });
    return newUser;
  }
}

module.exports = UserService;
