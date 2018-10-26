const { search } = require('./lib/index.js');

(async () => {
  console.log(await search('Michigun'));
  // { top: 4, stars: 61616, diamonds: 16661, ... }

  // they are equal!

  console.log(await search.user('ZecretGD'));
  // { top: 0 /* not in top */, stars: 8405, diamonds: 11982, ... }



  // searching for user that doesn't exist

  console.log(await search('userThatDoesntExist'));
  // null
})();
