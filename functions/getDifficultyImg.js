function getDifficultyImg(diffNum = 5, featured = false, epic = false) {
  const img = `https://gdicon.net/icons/difficulty_${diffNum === 10 ? 10 : `0${diffNum}`}${featured ? '_featured' : epic ? '_epic' : ''}.png`;
  return img;
}

module.exports = getDifficultyImg;
