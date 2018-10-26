const getDiff = require('../functions/getDifficultyByImg');

(function getDiffByImg() {
  const img = 'https://gdicon.net/icons/difficulty_09.png';
  const { diff, featured, epic } = getDiff(img);

  return {
    diff,
    featured,
    epic,
  };
})();