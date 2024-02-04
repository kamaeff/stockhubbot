const { get_userStyle } = require("../DB/db");

const keyboard = {
  inline_keyboard: [[{ text: "🏠 Главное меню", callback_data: "exit" }]],
};

const admin_btns = {
  inline_keyboard: [
    [{ text: "Таблицы", callback_data: "admin_tables" }],
    [{ text: "Снипеты для модерации", callback_data: "snippets" }],
    [
      {
        text: "Основной бот (Не трогай в беседе команды)",
        callback_data: "end",
      },
    ],
  ],
};

const chatOptions_profile = {
  inline_keyboard: [
    [
      { text: "🔎 Поиск пары", callback_data: "choose" },
      {
        text: "⚡️ Show Room",
        callback_data: "show",
      },
    ],
    [{ text: "✌🏼 Мой профиль", callback_data: "profile" }],
    [
      {
        text: "🏠 Главное меню",
        callback_data: "exit",
      },
    ],
  ],
};

const gender = {
  inline_keyboard: [
    [{ text: "👱🏼‍♂️ Мужчина", callback_data: "man" }],
    [{ text: "👱🏼‍♀️ Женщина", callback_data: "woman" }],
  ],
};

const profile_keyboard = {
  inline_keyboard: [
    [
      { text: "⏳ История заказов", callback_data: "data_orders" },
      { text: "🚚 Текущий заказ", callback_data: "current_order" },
    ],
    [
      { text: "🌐 Отправить геолакацию", callback_data: "locale" },
      { text: "✉️ Заполнить почту", callback_data: "email" },
    ],
    [{ text: "🏠 Главное меню", callback_data: "home" }],
  ],
};

async function check_style(chat_id) {
  const style_data = await get_userStyle(chat_id);

  if (style_data[0].style === "football") {
    const football_model = {
      inline_keyboard: [
        [
          { text: "Nike", callback_data: "Nike" },
          { text: "Adidas", callback_data: "Adidas" },
        ],
        [{ text: "🏠 Главное меню", callback_data: "exit" }],
      ],
    };
    return football_model;
  } else if (style_data[0].style === "lifestyle") {
    const lifestyle_model = {
      inline_keyboard: [
        [
          { text: "Nike", callback_data: "Nike" },
          { text: "Adidas", callback_data: "Adidas" },
        ],
        [
          { text: "Reebok", callback_data: "Reebok" },
          { text: "Puma", callback_data: "Puma" },
        ],
        [
          { text: "NewBalance", callback_data: "NewBalance" },
          { text: "Jordan", callback_data: "Jordan" },
        ],
        [{ text: "🏠 Главное меню", callback_data: "exit" }],
      ],
    };
    return lifestyle_model;
  } else if (style_data[0].style === "basket") {
    const basket_model = {
      inline_keyboard: [
        [
          { text: "Nike", callback_data: "Nike" },
          { text: "Adidas", callback_data: "Adidas" },
        ],
        [
          { text: "Puma", callback_data: "Puma" },
          { text: "Jordan", callback_data: "Jordan" },
        ],
        [{ text: "🏠 Главное меню", callback_data: "exit" }],
      ],
    };
    return basket_model;
  } else {
    console.log("Unexpected style:", style_data[0].style);
  }
}

module.exports = {
  keyboard,
  chatOptions_profile,
  gender,
  profile_keyboard,
  admin_btns,
  check_style,
};
