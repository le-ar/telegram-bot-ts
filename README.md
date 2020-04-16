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

```typescript
import { TelegramBot, Message, SendMessageParam } from 'telegram-bot-ts';

let bot = new TelegramBot(<Your bot token here>);

bot.onText(async function (message: Message) {
    bot.sendMessage(
        new SendMessageParam({
            chatId: message.chat.id,
            text: message.text,
            replyToMessageId: message.messageId,
        })
    );
});

bot.startLongPool();
```

## Receive callback from inline keyboard

```typescript
bot.onCallback(async function(callback: CallbackQuery) {
    bot.sendMessage(
        new SendMessageParam({
            chatId: callback.chat.id,
            text: callback.data,
        })
    );
});
```

## Send keyboard

```typescript
bot.sendMessage(
    new SendMessageParam({
        chatId: <chat id>,
        text: <message text>,,
        replyMarkup: new ReplyKeyboardMarkup({
            keyboard: [[new KeyboardButton({ text: 'a' })]]
        })
    })
);
```

## Remove keyboard

```typescript
bot.sendMessage(
    new SendMessageParam({
        chatId: <chat id>,
        text: <message text>,
        replyMarkup: new ReplyKeyboardRemove({})
    })
);
```

## Send inline keyboard

You must use exactly one of the optional fields in InlineKeyboardButton.

```typescript
bot.sendMessage(
    new MessageResponse({
        chatId: <chat id>,
        text: <message text>,,
        replyMarkup: new InlineKeyboardMarkup({
            inlineKeyboard: [
                [new InlineKeyboardButton({ text: 'google', url: 'https://google.com' })],
            ]
        })
    })
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

## Edit Message Text

```typescript
bot.editMessageText(new EditMessageTextParam({
    text: 'new Text',
    chatId: <chat Id>,
    messageId: <message id>
}));
```

## Edit Inline Keyboard

```typescript
bot.editMessageReplyMarkup(new EditMessageReplyMarkupParam({
    chatId: <chat Id>,
    messageId: <message id>,
    replyMarkup: new InlineKeyboardMarkup({
        inlineKeyboard: [
            [new InlineKeyboardButton({ text: 'text a', callbackData: 'callback_a' }), new InlineKeyboardButton({ text: 'text_b', callbackData: 'callback_b' })],
            [new InlineKeyboardButton({ text: 'text_c', callbackData: 'callback_c' })]
        ],
    }),
}));
```