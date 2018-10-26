const getDiff = require('../functions/getDifficultyImg');

(function getDiffImg() {
  const diffNum = 10;
  const featured = true;
  const epic = false;
  const img = getDiff(diffNum, featured, epic);

  return img;
})();
