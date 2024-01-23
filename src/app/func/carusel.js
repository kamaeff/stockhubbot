async function editCaptionShow(
  bot,
  chatId,
  userSession,
  messageid,
  currentIndex,
  photo,
  totalPhotos,
  showPrevButton
) {
  const showNext = currentIndex + 1 < totalPhotos;
  console.log(currentIndex);
  await bot.editMessageMedia(
    {
      type: "photo",
      media: photo.path,
      caption:
        `👟 <b>Кроссовки <i>${photo.name}</i>\n<b>🔎 Articul:</b> <code>${photo.articul}</code></b>\n\n` +
        `➖ <b>Пол:</b> <i>${photo.gender}</i>\n` +
        `➖ <b>Цвет:</b> <i>${photo.color}</i>\n` +
        `➖ <b>Материал:</b> <i>${photo.material}</i>\n` +
        `➖ <b>Размер:</b> <i>${photo.size} us</i>\n\n` +
        `💸 <b>Цена:</b> <code>${photo.price}₽</code>`,
      parse_mode: "HTML",
    },
    {
      chat_id: chatId,
      message_id: messageid,

      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: showPrevButton ? "<<" : "", callback_data: "prev_photo" },
            {
              text: `${currentIndex + 1}/${totalPhotos}`,
              callback_data: "dummy",
            },
            { text: showNext ? ">>" : "", callback_data: "next_photo" },
          ],
          [{ text: "🛒 Заказать", callback_data: "order" }],
          [{ text: "🏠 Выход в главное меню", callback_data: "end" }],
        ],
      }),
    }
  );
}

module.exports = {
  editCaptionShow,
};
