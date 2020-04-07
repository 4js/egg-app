'use strict';

const Service = require('egg').Service;

class CityService extends Service {

  /**
   * 查询城市列表
   */
  async list() {
    const { app } = this;
    const list = await app.model.City.findAll();
    return list;
	}
	
	/**
   * 添加城市
   * @method {post}
   * @param {city_name} 城市名称
   * @param {city_iata} 三字码
   * @param {city_airport} 机场全称
   * @param {level} 机场等级
   */
  async add(city) {
    const { app, ctx } = this;
    const result = await app.model.City.create(city);
    ctx.body = result;
  }
}

module.exports = CityService;
