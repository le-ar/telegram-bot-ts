<h1 align="center">Telegram Bot Typescript</h1>

<div align="center">

Typescript, Node.js module for Telegram Bot API (https://core.telegram.org/bots/api)

![David](https://img.shields.io/david/le-ar/telegram-bot-ts)
![NPM](https://img.shields.io/npm/l/telegram-bot-ts)
[![npm](https://img.shields.io/npm/dw/telegram-bot-ts)](https://www.npmjs.com/package/telegram-bot-ts)
![GitHub top language](https://img.shields.io/github/languages/top/le-ar/telegram-bot-ts)
[![CodeFactor](https://www.codefactor.io/repository/github/le-ar/telegram-bot-ts/badge)](https://www.codefactor.io/repository/github/le-ar/telegram-bot-ts)
[![Bot API](https://img.shields.io/badge/Bot%20API-latest-00aced.svg?&logo=telegram)](https://core.telegram.org/bots/api)

[![patreon](https://img.shields.io/endpoint?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fle_ar%2Fendel)](https://www.patreon.com/le_ar)
[![Liberapay giving](https://img.shields.io/liberapay/receives/le-ar)](https://liberapay.com/le-ar/donate)

</div>

## Install

```
    npm install telegram-bot-ts
```

or

```
    yarn add telegram-bot-ts
```

# Examples

## Answer on text

```typescript
import { TelegramBot, Message, SendMessageParam } from 'telegram-bot-ts';

let bot = new TelegramBot(<Your bot token here>);

bot.onText(async function (message: Message) {
    bot.sendMessage({
        chatId: message.chat.id,
        text: message.text,
        replyToMessageId: message.messageId,
    });
});

bot.startLongPool();
```

## Receive callback from inline keyboard

```typescript
bot.onCallback(async function(callback: CallbackQuery) {
    bot.sendMessage({
        chatId: callback.chat.id,
        text: callback.data,
    });
});
```

## Send keyboard

```typescript
bot.sendMessage({
    chatId: <chat id>,
    text: <message text>,,
    replyMarkup: new ReplyKeyboardMarkup({
        keyboard: [[new KeyboardButton({ text: 'a' })]]
    })
});
```

## Remove keyboard

```typescript
bot.sendMessage({
    chatId: <chat id>,
    text: <message text>,
    replyMarkup: new ReplyKeyboardRemove({})
});
```

## Send inline keyboard

You must use exactly one of the optional fields in InlineKeyboardButton.

```typescript
bot.sendMessage({
    chatId: <chat id>,
    text: <message text>,,
    replyMarkup: new InlineKeyboardMarkup({
        inlineKeyboard: [
            [new InlineKeyboardButton({ text: 'google', url: 'https://google.com' })],
        ]
    })
});
```

## Send Animation

You can set animation as InputFile or String (url or file_id) https://core.telegram.org/bots/api#sendanimation

```typescript
bot.sendAnimation({
    chatId: <chat id>,
    animation: new InputFile('name.mp4', fs.readFileSync('name.mp4')),
});
```

```typescript
bot.sendAnimation({
    chatId: <chat id>,
    animation: "some URL or File ID",
});
```

## Send Video

You can set animation as InputFile or String (url or file_id) https://core.telegram.org/bots/api#sendvideo

```typescript
bot.sendVideo({
    chatId: <chat id>,
    video: new InputFile('name.mp4', fs.readFileSync('name.mp4')),
});
```

```typescript
bot.sendVideo({
    chatId: <chat id>,
    video: "some URL or File ID",
});
```

## Edit Message Text

```typescript
bot.editMessageText({
    text: 'new Text',
    chatId: <chat Id>,
    messageId: <message id>
});
```

## Edit Inline Keyboard

```typescript
bot.editMessageReplyMarkup({
    chatId: <chat Id>,
    messageId: <message id>,
    replyMarkup: new InlineKeyboardMarkup({
        inlineKeyboard: [
            [new InlineKeyboardButton({ text: 'text a', callbackData: 'callback_a' }), new InlineKeyboardButton({ text: 'text_b', callbackData: 'callback_b' })],
            [new InlineKeyboardButton({ text: 'text_c', callbackData: 'callback_c' })]
        ],
    }),
});
```