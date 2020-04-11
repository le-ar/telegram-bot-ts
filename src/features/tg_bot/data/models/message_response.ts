import InlineKeyboardMarkupModel from "./inline_keyboard_markup_model";

class MessageResponse {
    chatId: number | string;
    text: string;
    parseMode: string; //MarkdownV2 or HTML
    disableWebPagePreview?: boolean;
    disableNotification?: boolean;
    replyToMessageId?: boolean;
    replyMarkup?: InlineKeyboardMarkupModel;

    constructor(
        chatId: number | string,
        text: string,
        parseMode?: string,
        disableWebPagePreview?: boolean,
        disableNotification?: boolean,
        replyToMessageId?: boolean,
        replyMarkup?: InlineKeyboardMarkupModel
    ) {
        this.chatId = chatId;
        this.text = text;
        this.parseMode = parseMode;
        this.disableWebPagePreview = disableWebPagePreview;
        this.disableNotification = disableNotification;
        this.replyToMessageId = replyToMessageId;
        this.replyMarkup = replyMarkup;
    }

    //TODO
    toJson(): string {
        return JSON.stringify({
            chat_id: this.chatId,
            text: this.text
        });
    }
}

export default MessageResponse;