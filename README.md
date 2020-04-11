Typescript, Node.js module for Telegram Bot API (https://core.telegram.org/bots/api)

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

```
import { TelegramBot, Message, MessageResponse } from 'telegram-bot-ts';

let bot = new TelegramBot(<Your bot token here>);

bot.onText(function (message: Message) {
    bot.sendMessage(new MessageResponse(
        message.chat.id,
        message.text
    ));
});

bot.startLongPool();
```

## Receive callback from inline keyboard

```
import { TelegramBot, Message, MessageResponse } from 'telegram-bot-ts';

let bot = new TelegramBot(<Your bot token here>);

bot.onText(function (callback: CallbackQuery) {
    bot.sendMessage(new MessageResponse(
        message.chat.id,
        'callback received'
    ));
});

bot.startLongPool();
```

## Send keyboard

```
telegramBot.sendMessage(
        new MessageResponse({
            chatId: <chat id>,
            text: <message text>,
        }).setReplyMarkup(new ReplyKeyboardMarkupModel({
            keyboard: [
                [new KeyboardButtonModel({ text: '1' }), new KeyboardButtonModel({ text: '2' })],
                [new KeyboardButtonModel({ text: message.text })],
                [new KeyboardButtonModel({ text: 'location', requestLocation: true })],
                [new KeyboardButtonModel({ text: 'contact', requestContact: true })]
            ]
        }))
    );
```

## Send inline keyboard

You must use exactly one of the optional fields.

```
    telegramBot.sendMessage(
        new MessageResponse({
            chatId: message.chat.id,
            text: message.text,
        }).setReplyMarkup(new InlineKeyboardMarkupModel({
            inlineKeyboard: [
                [new InlineKeyboardButtonModel({ text: '1', url: 'https://google.com' })],
            ]
        }))
    );
    telegramBot.sendMessage(
        new MessageResponse({
            chatId: message.chat.id,
            text: message.text,
        }).setReplyMarkup(new InlineKeyboardMarkupModel({
            inlineKeyboard: [
                [new InlineKeyboardButtonModel({ text: '2', callbackData: 'hihih-hi' })],
            ]
        }))
    );
```