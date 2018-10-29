const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDiff = require('./getDifficultyByImg');

async function getDailyLevel() {
  const result = await (await fetch('https://gdprofiles.com/')).text();
  const $ = cheerio.load(result);

  const daily = $('div.col-sm-6.top10').eq(0);
  const [, dailyNum] = daily.find('h3')
    .text()
    .match(/Daily Level\n#(.*)\n/i);

  const level = daily.find('h3').eq(1)
    .find('a');
  const levelName = level.eq(0).text();
  const creator = level.eq(1).text();

  const diffImg = daily.find('.leveldifficon').attr('src');
  const {
    diff,
    featured,
    epic,
  } = getDiff(diffImg);

  const timestamp = +new Date(daily.find('ul.list-unstyled li').eq(0).text());
  
  const obj = {
    daily: +dailyNum,
    name: levelName,
    creator,
    diff,
    featured,
    epic,
    timestamp,
  };

  return obj;
}

module.exports = getDailyLevel;
