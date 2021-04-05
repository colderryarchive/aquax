const superagent = require('superagent');

const waifu = async () => {

    
    const { body } = await superagent
      .get("https://nekos.life/api/v2/img/waifu");

    result = body.url;

    if (!result) throw "Failed to get url from the api";

    return result;
}

module.exports = waifu;