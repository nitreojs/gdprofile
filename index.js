const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDailyLevel = require('./functions/getDailyLevel');
const getWeeklyDemon = require('./functions/getWeeklyDemon');
const getTop10 = require('./functions/getTop10');

function isNumber(number) {
  return /\d+$/.test(number);
}

function last(array) {
  return array[array.length - 1];
}

const obj = {
  async user(value) {
    let user = value;
    if (typeof value === 'object') {
      user = value.nick || value.id;
    }
    let result = await (await fetch(`https://gdprofiles.com/${user}`)).text();
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
    };
  },
};

async function search(params) {
  let type = (isNumber(params) ? 'level' : 'user');

  if (typeof params === 'object') {
    type = ((params.level || isNumber(params.id)) ? 'level' : 'user');
  }

  if (type === 'level') return obj.level(params);
  return obj.user(params);
}

Object.assign(search, obj);

module.exports = {
  search,
  getDailyLevel,
  getWeeklyDemon,
  getTop10,
};
