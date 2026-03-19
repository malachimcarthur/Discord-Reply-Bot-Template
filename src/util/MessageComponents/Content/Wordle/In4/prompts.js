const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle4Message(userId) {
  const prompts = [`hear <@${userId}>ROAR :wolf:`];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle4Message,
};
