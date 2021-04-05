const superagent = require('superagent');

const slap = async () => {

    
    const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");

    result = body.url;

    if (!result) throw "Failed to get url from the api";

    return result;
}

module.exports = slap;