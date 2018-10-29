let fetch = require('node-fetch');
let cheerio = require('cheerio');
let getDiff = require('./getDifficultyByImg');

async function getWeeklyDemon() {
  let result = await (await fetch('https://gdprofiles.com/')).text();
  let $ = cheerio.load(result);
  let weekly = $('div.col-sm-6.top10').eq(1);
  let [, weeklyNum] = weekly.find('h3').text().match(/Weekly demon\n#(.*)\n/);
  let level = weekly.find('h3 a');
  let { diff, featured, epic } = getDiff(weekly.find('.leveldifficon').attr('src'));
  let timestamp = +new Date(weekly.find('ul.list-unstyled li').eq(0).text());

  return {
    weekly: +weeklyNum,
    name: level.eq(0).text(),
    creator: level.eq(1).text(),
    diff,
    featured,
    epic,
    timestamp,
  };
}

module.exports = getWeeklyDemon;
