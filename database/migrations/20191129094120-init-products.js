'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DOUBLE } = Sequelize;
    await queryInterface.createTable('products', {
      product_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      product_name: STRING(255),
      product_img: STRING(255), // 商品图片
      product_price: DOUBLE(10, 2), // 订单单价
      amount: INTEGER, // 产品数量
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('products');
  },
};
