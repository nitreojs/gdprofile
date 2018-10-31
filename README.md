## gdprofiles
**gdprofiles** is an API for [GDProfiles](https://gdprofiles.com), which allow you to:
* search for one user and get his information
* get user's weekly info
* see daily level and it's info
* get weekly demon and it's info
* top-10 players
* top-10 creators
## API
### search
If you want to find a user, you should use this:
```js
let { search } = require('./lib/index.js');
```

Example:
```js
let michigun = await search('Michigun'); // => Object

// equals to

let michigun = await search.user('Michigun'); // => Object
```

But what, if we will try to find *not created* account?

```js
let notFoundUser = await search('userThatDoesntExist'); // => null
```

It returns *null* if user is not found!

### getDailyLevel

If you want to get daily level in Geometry Dash, you should use this!
```js
let { getDailyLevel } = require('./lib/index.js');
```

Example:
```js
let dailyLevel = await getDailyLevel(); // => Object
```
So easy!

### functions

If you don't need my full functions, you always can use my custom functions!
```js
let getDifficultyByImg = require('./functions/getDifficultyByImg.js');
```

```js
let { diff: difficulty, featured, epic } = getDifficultyByImg(img); // => Object
```

### getTop10

You need to get top 10 from gdprofiles.com. What will you do?
```js
let getTop10 = require('./functions/getTop10.js');
```

```js
let top = await getTop10(); // => Array<Object>
```