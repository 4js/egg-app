'use strict';

const Controller = require('egg').Controller;

class CityController extends Controller {

  /**
   * 查询城市列表
   * @method {get}
   */
  async list() {
    const { ctx } = this;
    const result = await ctx.service.city.list();
    ctx.body = result;
  }

  /**
   * 添加城市
   * @method {post}
   * @param {city_name} 城市名称
   * @param {city_iata} 三字码
   * @param {city_airport} 机场全称
   * @param {level} 机场等级
   */
  async add() {
    const { ctx } = this;
    const { city_name, city_iata, city_airport, level } = ctx.request.body;
    if (!city_name || !city_iata || !city_airport) ctx.throw(400, '数据不能为空');
    if (level<0 || level > 4) ctx.throw(400, '机场等级不正确');
    const result = await ctx.service.city.add({ city_name, city_iata, city_airport, level });
    ctx.body = result;
  }

}

module.exports = CityController;
