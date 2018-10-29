let fetch = require('node-fetch');
let cheerio = require('cheerio');
let getDiff = require('./getDifficultyByImg');

async function getDailyLevel() {
  let result = await (await fetch('https://gdprofiles.com/')).text();
  let $ = cheerio.load(result);
  let daily = $('div.col-sm-6.top10').eq(0);
  let [, dailyNum] = daily.find('h3').text().match(/Daily Level\n#(.*)\n/i);
  let level = daily.find('h3').eq(1).find('a');
  let levelName = level.eq(0).text();
  let creator = level.eq(1).text();
  let diffImg = daily.find('.leveldifficon').attr('src');
  let { diff, featured, epic } = getDiff(diffImg);
  let timestamp = +new Date(daily.find('ul.list-unstyled li').eq(0).text());

  return {
    daily: +dailyNum,
    name: levelName,
    creator,
    diff,
    featured,
    epic,
    timestamp,
  };
}

module.exports = getDailyLevel;
