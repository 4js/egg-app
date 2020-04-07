'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Plane = app.model.define('plane', {
    plane_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    serial: STRING(30), // 客机编号
    birth: DATE, // 出厂日期
    model: INTEGER, // 类别 1波音 2空客 3商飞 4庞巴迪 5新舟
    type: STRING(30), // 客机型号 B787
    seats: INTEGER, // 座位数 
    seats_business: INTEGER, // 商务舱 
    seats_economy: INTEGER, // 经济舱 
    level: INTEGER, // 客机等级 1宽体机 2中型机 3小型机
    mileage: INTEGER, // 航程
    created_at: DATE,
    updated_at: DATE,
  });

  return Plane;
};
