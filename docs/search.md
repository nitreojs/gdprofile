### search
----------

Hi! It seems like you're going to know *all mechanics* of search user's function. There it is!

#### Examples
-------------

```js
let { search } = require('gdprofiles');

// We're finding user 'Michigun'!

let michigun = await search('michigun'); // => Object

// Also, if we'll try to find user
// by typing his nickname with incorrect
// letter's case...
let gdprofilesModuleCreator = await search('NItroJs'); // => Object
// gdprofiles module will find me!

// Also, if you will type nickname
// with spaces in it
// gdprofiles module will
// automatically replace spaces
// to minuses because gdprofiles.com
// is accepting nicks with minuses
// in it instead of spaces
let myFriend = await search('fakeman cat'); // => Object
```

Not created user:

```js
// Let me try to find user
// who didn't create an account!

let misha = await search('mishaKovalenko17295'); // null
// gdprofiles module returns null
// when account is not found!
```

| Key         |  Type     | Description                       |
|-------------|-----------|-----------------------------------|
| top         | Number    | Player's top                      |
| stars       | Number    | Player's stars                    |
| diamonds    | Number    | Player's diamonds                 |
| secretCoins | Number    | Player's secret coins             |
| userCoins   | Number    | Player's user coins               |
| demons      | Number    | Player's demons                   |
| cp          | Number    | Player's creator points           |
| desc        | String    | Player's description              |
| created     | Number    | When was player's account created |
| location    | String    | Where is player located?          |
| video       | Object    | Last player's level video         |
| mod         | Boolean   | Is user moderator?                |
| linked      | Boolean   | Is user linked to a gdprofiles?   |
| img         | Object    | Object of player's icons          |
| links       | Object    | Object of player's linked links   |
| badges      | Array     | Array of user's badges            |
| lastLevels  | Array     | Array of user's last levels       |
