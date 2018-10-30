let fetch = require('node-fetch');
let cheerio = require('cheerio');

async function getTop10() {
  let result = await (await fetch('https://gdprofiles.com/')).text();
  let $ = cheerio.load(result);
  // gdprofiles SSL certificate
  // has expired so I am going
  // to stop working at this
  // module while SSL certificate
  // wont be !expired lol
}

module.exports = getTop10;
