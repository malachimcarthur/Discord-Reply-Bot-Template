const { SlashCommandBuilder } = require("discord.js");
const { getRandomIntInclusive } = require("../../../util/randomValues");
const coin = ["heads", "tails"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin heads or tails."),
  async execute(interaction) {
    try {
      await interaction.deferReply();
      await interaction.followUp(coin[getRandomIntInclusive(coin.length - 1)]);
    } catch (error) {
      console.error(`Something went wrong in coinflip: ${error}`);
    }
  },
};
