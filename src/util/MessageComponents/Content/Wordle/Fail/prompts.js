const { getRandomIntInclusive } = require("../../../../randomValues");

function wordleFailMessage(userId) {
  const prompts = [`<@${userId}> lost`];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordleFailMessage,
};
