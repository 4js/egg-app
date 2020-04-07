'use strict';

const Service = require('egg').Service;

class PlaneService extends Service {

  /**
   * 查询客机列表
   */
  async list() {
    const { app } = this;
    const list = await app.model.Plane.findAll();
    return list;
	}
	
	/**
   * 添加客机
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
  async add(plane) {
    const { app, ctx } = this;
    const result = await app.model.Plane.create(plane);
    ctx.body = result;
  }
}

module.exports = PlaneService;
