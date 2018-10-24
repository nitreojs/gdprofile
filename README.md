## gdprofiles
**gdprofiles** is an API for [GDProfiles](https://gdprofiles.com), which allow you to:
* search for one user and get his information
* get user's weekly info
* see daily level and it's info
* get weekly demon and it's info
* top-10 players
* top-10 creators
## API
#### search
If you want to find a user, you should use this:
```js
const { search } = require('gdprofiles');
```

Example:
```js
const result = await search('Michigun'); // => Object

// equals to

const result = await search.user('Michigun'); // => Object
```

But what, if we will try to find *not created* account?

```js
console.log(await search('userThatDoesntExist')); // => null
```

It returns *null* if user is not found!