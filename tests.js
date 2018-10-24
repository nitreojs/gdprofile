const { search } = require('./lib/index');

(async () => {
  console.log(await search('Michigun'));
  // { top: 4, stars: 61616, diamonds: 16661, ... }

  // they are equal!

  console.log(await search.user('Michigun'));
  // { top: 4, stars: 61616, diamonds: 16661, ... }

  // searching for undefined user

  console.log(await search('userThatDoesntExist'));
  // 404
})();
