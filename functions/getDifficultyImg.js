function getDifficultyImg(diffNum = 5, featured = false, epic = false) {
  return `https://gdicon.net/icons/difficulty_${diffNum}${(featured || epic) ? `_${featured || epic}` : ''}.png`;
}

module.exports = getDifficulty;
