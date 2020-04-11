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