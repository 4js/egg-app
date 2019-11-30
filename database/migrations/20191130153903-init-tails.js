'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('tails', {
      tail_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      tail_name: STRING(255),
      tail_img: STRING(255), // 路线图片
      tail_desc: STRING(255), // 路线描述
      tail_type: INTEGER, // 路线类型
      tail_steps: INTEGER, // 路线步骤
      tail_course: INTEGER, // 路线课程数量
      tail_collect: INTEGER, // 路线收藏数量
      tail_content: STRING(255), // 路线内容
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('tails');
  },
};
