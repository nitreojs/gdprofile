const { search } = require('../lib/index.js');

(async () => {
  console.log(await search('Michigun'));
  // { top: 4, stars: 61616, diamonds: 16661, ... }

  // they are equal!

  console.log(await search.user('shaggy23'));
  // { top: 3, stars: 89315, diamonds: 29625, ... }



  // searching for user that doesn't exist

  console.log(await search('userThatDoesntExist'));
  // null
})();
