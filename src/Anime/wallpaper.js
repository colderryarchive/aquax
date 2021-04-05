const superagent = require('superagent');

const wallpaper = async () => {


    const { body } = await superagent
        .get("https://nekos.life/api/v2/img/wallpaper");

    result = body.url;

    if (!result) throw "Failed to get url from the api";

    return result;
}

module.exports = wallpaper;
