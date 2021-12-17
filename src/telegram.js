const path = require("path");
require("dotenv-safe").config({ path: path.join(__dirname, "..", ".env") });
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

bot.launch();

const sendMessage = (message) => {
  bot.telegram.sendMessage(process.env.CHAT_ID, message);
};

module.exports = { sendMessage };
