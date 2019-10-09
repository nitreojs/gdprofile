### getDiffImg
--------------------

getDiffImg is *my custom function* that allows you to get img by level's difficulty (Number), featured (Boolean), epic (Boolean)!

#### Examples
-------------

```js
let { getDiffImg } = require('gdprofiles');

// For example, you've got
// level's data:
// * diffNum
// * featured
// * epic

let diffNum = 5; // Hard
let featured = true;
let epic = true;

let img = getDiffImg(diffNum, featured, epic); // => String
```

This function returns a url String - level's img.
