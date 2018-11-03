const fetch = require('node-fetch');
const cheerio = require('cheerio');

function last(array) {
  return array[array.length - 1];
}

async function searchUser(value) {
  let user = value;
  if (typeof value === 'object') {
    user = value.nick || value.id;
  }
  let result = await (await fetch(`https://gdprofiles.com/${user.replace(/\s/g, '-')}`)).text();
  let $ = cheerio.load(result);
  let statsHtml = $('.staricon tbody tr').eq(1).html();
  if (!statsHtml) return null;
  let [
    explosion,
    player,
    ship,
    ball,
    bird,
    dart,
    robot,
    spider,
  ] = $('#playericons img').get().map(elem => $(elem).attr('src'));
  let isInTop = !!$('.rank').toString();
  let stats = $(statsHtml).get().map(elem => +$(elem).text());

  let links = {};
  let linksTest = /href="(https?:\/\/)?(www\.)?(youtube|twit(ter|ch)|facebook|(plus\.)google|.*\.newgrounds|steamcommunity)\.(com|tv).*"/i;
  let linksHtml = $('.list-unstyled a').get().map(elem => $(elem).toString()).filter(elem => linksTest.test(elem))
    .slice(0, -1);
  linksHtml.forEach((link) => {
    let url = $(link).attr('href');
    let text = $(link).text();
    let [, type] = text.match(/.*\s(.+?)\s.*/i);
    links[type.toLowerCase()] = url;
  });

  return {
    top: isInTop ? stats[0] : 0,
    stars: isInTop ? stats[1] : stats[0],
    diamonds: isInTop ? stats[2] : stats[1],
    secretCoins: isInTop ? stats[3] : stats[2],
    userCoins: isInTop ? stats[4] : stats[3],
    demons: isInTop ? stats[5] : stats[4],
    cp: !!$('.creator').toString() ? last(stats) : 0,
    mod: !!$('.mod_badge img').toString(),
    linked: !!$('.badge').toString(),
    img: {
      explosion,
      player,
      ship,
      ball,
      bird,
      dart,
      robot,
      spider,
    },
    links,
  };
}

module.exports = searchUser;
