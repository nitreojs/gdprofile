const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDailyLevel = require('./functions/getDailyLevel');
const getWeeklyDemon = require('./functions/getWeeklyDemon');

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

    const result = await (await fetch(`https://gdprofiles.com/${user}`)).text();
    const $ = cheerio.load(result);

    const statsHtml = $('.staricon tbody tr').eq(1).html();
    if (!statsHtml) return null;

    const [
      explosion,
      player,
      ship,
      ball,
      bird,
      dart,
      robot,
      spider,
    ] = $('#playericons img').get().map(elem => $(elem).attr('src'));

    const isInTop = !!$('.rank').toString();
    const isCreator = !!$('.creator').toString();
    const mod = !!$('.mod_badge img').toString();
    const linked = !!$('.badge').toString();

    const stats = $(statsHtml).get().map(elem => +$(elem).text());

    const obj = {
      top: isInTop ? stats[0] : 0,
      stars: isInTop ? stats[1] : stats[0],
      diamonds: isInTop ? stats[2] : stats[1],
      secretCoins: isInTop ? stats[3] : stats[2],
      userCoins: isInTop ? stats[4] : stats[3],
      demons: isInTop ? stats[5] : stats[4],
      cp: isCreator ? last(stats) : 0,
      mod,
      linked,
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

    return obj;
  },
}

async function search(params) {
  let type = (isNumber(params) ? 'level' : 'user');

  if (typeof params === 'object') {
    type = ((params.level || isNumber(params.id)) ? 'level' : 'user');
  }

  if (type === 'level') return await obj.level(params);
  else return await obj.user(params);
}

Object.assign(search, obj);

module.exports = {
  search,
  getDailyLevel,
  getWeeklyDemon,
};

