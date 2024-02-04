const { gender } = require("./btns");

async function gender_choose(bot, msg, chatId, messageId) {
  await bot.editMessageCaption(
    `<b>${msg.message.chat.first_name}</b> для кого будем искать?`,
    {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(gender),
    }
  );
}

module.exports = {
  gender_choose,
};
