let fetch = require('node-fetch');
let cheerio = require('cheerio');
let getDiff = require('./getDifficultyByImg');

async function getDailyLevel() {
  let result = await (await fetch('https://gdprofiles.com/')).text();
  let $ = cheerio.load(result);
  let daily = $('div.col-sm-6.top10').eq(0);
  let level = daily.find('h3').eq(1).find('a');
  let diffImg = daily.find('.leveldifficon').attr('src');
  let { diff, featured, epic } = getDiff(diffImg);

  return {
    daily: +daily.find('h3').text().match(/Daily Level\n#(.*)\n/i)[1],
    name: level.eq(0).text(),
    creator: level.eq(1).text(),
    diff,
    featured,
    epic,
    timestamp: +new Date(daily.find('ul.list-unstyled li').eq(0).text()),
  };
}

module.exports = getDailyLevel;
