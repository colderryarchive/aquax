const superagent = require('superagent');

const fact = async () => {

  const { body } = await superagent
    .get("https://animu.ml/fact");

  result = body.fact;

  if (!result) throw "Failed to get fact from the api";

  return result;
}

module.exports = fact;
