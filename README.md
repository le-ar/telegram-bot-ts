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
    bot.sendMessage(new MessageResponse({
        chatId: message.chat.id,
        text: message.text
    }));
});

bot.startLongPool();
```

## Receive callback from inline keyboard

```
import { TelegramBot, CallbackQuery, MessageResponse } from 'telegram-bot-ts';

let bot = new TelegramBot(<Your bot token here>);

bot.onText(function (callback: CallbackQuery) {
    bot.sendMessage(new MessageResponse({
        chatId: message.chat.id,
        text: 'callback received'
    }));
});

bot.startLongPool();
```

## Send keyboard

```typescript
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

```typescript
    telegramBot.sendMessage(
        new MessageResponse({
            chatId: <chat id>,
            text: <message text>,
        }).setReplyMarkup(new InlineKeyboardMarkupModel({
            inlineKeyboard: [
                [new InlineKeyboardButtonModel({ text: 'urlButton', url: 'https://google.com' })],
            ]
        }))
    );
    telegramBot.sendMessage(
        new MessageResponse({
            chatId: <chat id>,
            text: <message text>,
        }).setReplyMarkup(new InlineKeyboardMarkupModel({
            inlineKeyboard: [
                [new InlineKeyboardButtonModel({ text: 'callbackButton', callbackData: 'hello' })],
            ]
        }))
    );
```

## Send Animation

You can set animation as InputFile or String (url or file_id) https://core.telegram.org/bots/api#sendanimation

```typescript
    bot.sendAnimation(
        new SendAnimationParam({
            chatId: <chat id>,
            animation: new InputFile('name.mp4', fs.readFileSync('name.mp4')),
        })
    );
```

```typescript
    bot.sendAnimation(
        new SendAnimationParam({
            chatId: <chat id>,
            animation: "some URL or File ID",
        })
    );
```

## Send Video

You can set animation as InputFile or String (url or file_id) https://core.telegram.org/bots/api#sendvideo

```typescript
    bot.sendVideo(
        new SendVideoParam({
            chatId: <chat id>,
            video: new InputFile('name.mp4', fs.readFileSync('name.mp4')),
        })
    );
```

```typescript
    bot.sendVideo(
        new SendVideoParam({
            chatId: <chat id>,
            video: "some URL or File ID",
        })
    );
```