const getDiff = require('./getDifficultyByImg');

const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getWeeklyDemon() {
  const result = await (await fetch('https://gdprofiles.com/')).text();
  const $ = cheerio.load(result);
}

module.exports = getWeeklyDemon;
