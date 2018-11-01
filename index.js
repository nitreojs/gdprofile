const getDailyLevel = require('./functions/getDailyLevel');
const getWeeklyDemon = require('./functions/getWeeklyDemon');
const getTop10 = require('./functions/getTop10');
const user = require('./functions/searchUser');

async function search(params) {
  return user(params);
}

Object.assign(search, { user });

module.exports = {
  search,
  getDailyLevel,
  getWeeklyDemon,
  getTop10,
};
