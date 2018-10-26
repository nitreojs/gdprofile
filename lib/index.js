const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDiff = require('../functions/getDifficultyByImg');

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

    const explosion = $('.explosion').attr('src');
    const player = $('.player').attr('src');
    const ship = $('.ship').attr('src');
    const ball = $('.ball').attr('src');
    const bird = $('.bird').attr('src');
    const dart = $('.dart').attr('src');
    const robot = $('.robot').attr('src');
    const spider = $('.spider').attr('src');

    const isInTop = !!$('.rank').toString();
    const isCreator = !!$('.creator').toString();
    const mod = !!$('.mod_badge img').toString();
    const linked = !!$('.badge').toString();

    const statsMatched = statsHtml.match(/(?:<td align="center"(?:\sclass="rankicon")?>(.*?)<\/td>)/ig);
    const stats = statsMatched.map((stat) => {
      stat = stat.match(/[0-9]+/i);
      return +stat[0];
    });

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

async function getDailyLevel() {
  const result = await (await fetch('https://gdprofiles.com/')).text();
  const $ = cheerio.load(result);

  const daily = $('div.col-sm-6.top10').eq(0);
  const [, dailyNum] = daily.find('h3').text().match(/Daily Level\n#(.*)\n/i);

  const level = daily.find('h3').eq(1).find('a');
  const levelName = level.eq(0).text();
  const creator = level.eq(1).text();

  const diffImg = daily.find('.leveldifficon').attr('src');
  const { diff, featured, epic } = getDiff(diffImg);
  
  const obj = {
    daily: +dailyNum,
    name: levelName,
    creator,
    diff,
    featured,
    epic,
  };

  return obj;
}

Object.assign(search, obj);

module.exports = {
  search,
  getDailyLevel,
};

