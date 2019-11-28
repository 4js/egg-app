'use strict';

module.exports = {
  getTimestamp(userId) {
    // 时间戳
    return userId + '_' + new Date().getTime();
  },
};
