const { getDailyLevel } = require('../lib/index.js');

(async () => {
  console.log(await getDailyLevel());
})();
