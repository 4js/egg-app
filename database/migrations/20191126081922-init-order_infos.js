'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DOUBLE } = Sequelize;
    await queryInterface.createTable('order_infos', {
      order_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      product_id: INTEGER,
      product_name: STRING(30),
      product_price: DOUBLE(10, 2), // 订单单价
      product_num: INTEGER, // 产品数量
      price: DOUBLE(10, 2), // 订单总价
      user_id: INTEGER, // 用户id
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('order_infos');
  },
};
