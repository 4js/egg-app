'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, DOUBLE } = app.Sequelize;

  const Product = app.model.define('product', {
    product_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    product_name: STRING(255),
    product_img: STRING(255), // 商品图片
    product_price: DOUBLE(10, 2), // 订单单价
    amount: INTEGER, // 产品数量
    created_at: DATE,
    updated_at: DATE,
  });

  return Product;
};
