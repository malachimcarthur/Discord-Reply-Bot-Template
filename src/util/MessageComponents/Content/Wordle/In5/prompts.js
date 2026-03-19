const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle5Message(userId) {
  const prompts = [`<@${userId}> The streak is alive`];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle5Message,
};
