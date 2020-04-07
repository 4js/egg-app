'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const City = app.model.define('city', {
    city_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    city_name: STRING(30), // 城市名字
    city_iata: STRING(30), // 机场三字码
    city_airport: STRING(30), // 机场全称
    level: INTEGER, // 机场级别 3D 4D 4E 4F
    created_at: DATE,
    updated_at: DATE,
  });

  return City;
};
