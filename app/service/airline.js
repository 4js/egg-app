'use strict';

const Service = require('egg').Service;

class AirlineService extends Service {

  /**
   * 查询航线列表
   */
  async list() {
    const { app } = this;
    const list = await app.model.Airline.findAll();
    return list;
  }
	
}

module.exports = AirlineService;
