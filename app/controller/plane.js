'use strict';

const Controller = require('egg').Controller;

class PlaneController extends Controller {

  /**
   * 查询机队列表
   * @method {get}
   */
  async list() {
    const { ctx } = this;
    const result = await ctx.service.plane.list();
    ctx.body = result;
  }

  /**
   * 添加客机
   * @method {post}
   * @param {serial} 客机编号
   * @param {birth} 出厂日期
   * @param {model} 类别
   * @param {type} 客机型号
   * @param {seats} 座位数
   * @param {seats_business} 商务舱
   * @param {seats_economy} 经济舱
   * @param {level} 客机等级
   * @param {mileage} 航程
   */
  async add() {
    const { ctx } = this;
    const { serial, model, type, level } = ctx.request.body;
    console.log(ctx.request.body)
    if (!serial || !model || !type) ctx.throw(400, '数据不能为空');
    if (level<0 || level > 3) ctx.throw(400, '客机等级不正确');
    // const result = await ctx.service.plane.add({ city_name, city_iata, city_airport, level });
    // ctx.body = result;
  }

}

module.exports = PlaneController;
