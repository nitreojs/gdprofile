const getDaily = require('../functions/getDailyLevel');

(async function getDailyLevel() {
  console.log(await getDaily());
  // { daily: 675, name: 'Oscillation', creator: 'GUYdurian', ... }
})();
