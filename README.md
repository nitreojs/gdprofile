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
const { search } = require('./lib/index.js');
```

Example:
```js
console.log(await search('Michigun')); // => Object

// equals to

console.log(await search.user('Michigun')); // => Object
```

But what, if we will try to find *not created* account?

```js
console.log(await search('userThatDoesntExist')); // => null
```

It returns *null* if user is not found!

### getDailyLevel

If you want to get daily level in Geometry Dash, you should use this!
```js
const { getDailyLevel } = require('./lib/index.js');
```

Example:
```js
console.log(await getDailyLevel()); // => Object
```
So easy!

### functions

If you don't need my full functions, you always can use my custom functions!
```js
const getDifficultyByImg = require('./functions/getDifficultyByImg.js');

// ...

const { diff: difficulty, featured, epic } = getDifficultyByImg(img); // => Object
```
