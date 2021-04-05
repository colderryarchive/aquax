const superagent = require('superagent');

const pat = async () => {

    
    const { body } = await superagent
      .get("https://nekos.life/api/v2/img/pat");

    result = body.url;

    if (!result) throw "Failed to get url from the api";

    return result;
}

module.exports = pat;