const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle2Message(userId) {
  const prompts = [`<@${userId}> Thats How we do`];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle2Message,
};
