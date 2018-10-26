const { getDailyLevel } = require('../lib/index.js');

(async function getDailyLevel() {
  console.log(await getDailyLevel());
  // { daily: 675, name: 'Oscillation', creator: 'GUYdurian', ... }
})();
