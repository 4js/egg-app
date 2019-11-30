'use strict';

const Service = require('egg').Service;

class TailService extends Service {
  async list() {
    const { app } = this;
    const list = await app.model.Tail.findAll();
    return list;
  }
}

module.exports = TailService;
