const TelegramApi = require("node-telegram-bot-api");
const { config } = require("dotenv");
const { testDatabaseConnection } = require("./src/app/DB/db");

const startMenu = require("./src/app/startMenu");

config();
const bot = new TelegramApi(process.env.TOKEN, { polling: true });

const main = async () => {
  testDatabaseConnection();
  console.log("Bot create by Anton Kamaev");

  bot.setMyCommands([
    { command: "/start", description: "Перезапуск главного меню" },
    { command: "/commands", description: "Дополнительные команды бота" },
    { command: "/donate", description: "Поддержать разработчиков" },
    { command: "/guide", description: "Как правильно заказать кроссовки" },
  ]);

  startMenu(bot);
};

main();
