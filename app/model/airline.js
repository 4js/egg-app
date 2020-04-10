'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Airline = app.model.define('airline', {
    airline_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    takeoff_city_id: INTEGER, // 起飞城市
    arrive_city_id: INTEGER, // 到达城市
    go_takeoff_time: DATE, // 去程起飞时间
    go_arrive_time: DATE, // 去程到达时间
    back_takeoff_time: DATE, // 回程起飞时间
    back_arrive_time: DATE, // 回程到达时间
    plane_id: INTEGER, // 执行飞机
    period: STRING(30), // 班期 1234567 - 1357
    mileage: INTEGER, // 里程数 
    business_price: INTEGER, // 头等舱机票价格 
    economy_price: INTEGER, // 经济舱机票价格 
    created_at: DATE,
    updated_at: DATE
  });

  return Airline;
};
