const { search } = require('./lib/index');

(async () => {
  console.log(await search('Michigun'));
  // { top: 4, stars: 61616, diamonds: 16661, ... }
})();
