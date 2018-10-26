function getDifficultyByImg(img) {
  const [, diffNum, diffMark] = img.match(/https:\/\/gdicon.net\/icons\/difficulty_([0-9]+)(?:_(.*))?\.png/);
  const diff = ['NA', 'Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Hard Demon', 'Easy Demon', 'Medium Demon', 'Insane Demon', 'Extreme Demon'][+diffNum];
  const featured = diffMark && diffMark === 'featured';
  const epic = diffMark && diffMark === 'epic';

  return {
    diffNum,
    diff,
    featured,
    epic,
  };
}

module.exports = getDifficultyByImg;
