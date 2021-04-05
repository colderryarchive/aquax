const Picks = require("../../json/8ball.json");

const eightball = async () => {

  answer = Picks[Math.floor(Math.random() * Picks.length)];

  return answer;
}

module.exports = eightball;
