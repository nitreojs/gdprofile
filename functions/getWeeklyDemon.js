const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { parse } = require('date-fns');

const getDiff = require('./getDifficultyByImg');

async function getWeeklyDemon() {
  const result = await (await fetch('https://gdprofiles.com/')).text();
  const $ = cheerio.load(result);

  const weekly = $('div.col-sm-6.top10').eq(1);
  const [, weeklyNum] = weekly.find('h3')
    .text()
    .match(/Weekly demon\n#(.*)\n/);

  const level = weekly.find('h3 a');
  const levelName = level.eq(0).text();
  const creator = level.eq(1).text();

  const diffImg = weekly.find('.leveldifficon')
    .attr('src');
  const { diff, featured, epic } = getDiff(diffImg);

  const timestamp = +parse(weekly.find('ul.list-unstyled li').eq(0).text());

  const obj = {
    weekly: +weeklyNum,
    name: levelName,
    creator,
    diff,
    featured,
    epic,
    timestamp,
  };

  return obj;
}

module.exports = getWeeklyDemon;
