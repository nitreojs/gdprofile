const fetch = require('node-fetch');

function isNumber(number) {
  return /\d+$/.test(number);
}

const obj = {
  async user(value) {
    let user = value;

    if (typeof value === 'object') {
      user = value.nick || value.id;
    }

    const result = await (await fetch(`https://gdprofiles.com/${user}`)).text();

    let icon = result.match(/(?:<img\nid="playericon" src="(.*)"\nalt=".*"\/>)/i);
    if (!icon) return null;

    icon = icon[1];

    const [, top, stars, diamonds, sc, uc, demons, cp] = (result.match(/(?:(?:<td\nalign="center" class="rankicon">(.*)<\/td>)?<td\nalign="center">(.*)<\/td><td\nalign="center">(.*)<\/td><td\nalign="center">(.*)<\/td><td\nalign="center">(.*)<\/td><td\nalign="center">(.*)<\/td><td\nalign="center">(.*)<\/td>)/i));
    const mod = /<a\nhref="https:\/\/gdprofiles.com\/_mods" title=".* is Mod"/i.test(result);

    const obj = {
      top: +top || 0,
      stars: +stars,
      diamonds: +diamonds,
      secretCoins: +sc,
      userCoins: +uc,
      demons: +demons,
      creatorPoints: +cp,
      icon,
      mod,
    };

    return obj;
  },

  level(value) {
    console.log('There would be a level');
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
};

