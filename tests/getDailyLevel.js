const { getDailyLevel } = require('../lib/index.js');

(async () => {
  console.log(await getDailyLevel());
  // { daily: 675, name: 'Oscillation', creator: 'GUYdurian', ... }
})();
