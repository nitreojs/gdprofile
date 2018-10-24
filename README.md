## gdprofiles
**gdprofiles** is an API for [GDProfiles](https://gdprofiles.com), which allow you to get:
* search for one or more users
* get player's account information
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
And here you can choose one of these methods:
```js
const result = await search('Michigun'); // => Object
```
or
```js
const result = await search.user('Michigun'); // => Object
```

Both of these methods will return object, but what method will you choose?
Decide it for itself.