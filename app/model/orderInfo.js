'use strict';

module.exports = app => {
  const { STRING, INTEGER, DOUBLE, DATE } = app.Sequelize;

  const OrderInfo = app.model.define('order_info', {
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

  return OrderInfo;
};
