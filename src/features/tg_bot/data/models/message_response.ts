import { InlineKeyboardMarkup, ReplyKeyboardMarkup, ReplyKeyboardRemove, ForceReply, InlineKeyboardMarkupSerializer, ReplyKeyboardMarkupSerializer, ReplyKeyboardRemoveSerializer, ForceReplySerializer } from "telegram-bot-ts-types";

class MessageResponse {
    chatId: number | string;
    text: string;
    parseMode?: string; //MarkdownV2 or HTML
    disableWebPagePreview?: boolean;
    disableNotification?: boolean;
    replyToMessageId?: number;
    replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

    constructor(props: {
        chatId: number | string;
        text: string;
        parseMode?: string;
        disableWebPagePreview?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: number;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }) {
        this.chatId = props.chatId;
        this.text = props.text;
        this.parseMode = props.parseMode;
        this.disableWebPagePreview = props.disableWebPagePreview;
        this.disableNotification = props.disableNotification;
        this.replyToMessageId = props.replyToMessageId;
        this.replyMarkup = props.replyMarkup;
    }

    setParseMode(parseMode: string) {
        this.parseMode = parseMode;
    }

    setDisabledWebPagePreview(): MessageResponse {
        this.disableWebPagePreview = true;
        return this;
    }

    setDisableNotification(): MessageResponse {
        this.disableNotification = true;
        return this;
    }

    setReplyMarkup(replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): MessageResponse {
        this.replyMarkup = replyMarkup;
        return this;
    }

    setReplyToMessageId(messageId: number): MessageResponse {
        this.replyToMessageId = messageId;
        return this;
    }

    toJsonString(): string {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any; } {
        let json = {
            chat_id: this.chatId,
            text: this.text,
        };
        if (typeof this.parseMode === 'string') {
            json['parse_mode'] = this.parseMode;
        }
        if (typeof this.disableWebPagePreview === 'boolean') {
            json['disable_web_page_preview'] = this.disableWebPagePreview;
        }
        if (typeof this.disableNotification === 'boolean') {
            json['disable_notification'] = this.disableNotification;
        }
        if (typeof this.replyToMessageId === 'number') {
            json['reply_to_message_id'] = this.replyToMessageId;
        }
        if (this.replyMarkup instanceof InlineKeyboardMarkup) {
            json['reply_markup'] = InlineKeyboardMarkupSerializer.toJsonString(this.replyMarkup);
        }
        if (this.replyMarkup instanceof ReplyKeyboardMarkup) {
            json['reply_markup'] = ReplyKeyboardMarkupSerializer.toJsonString(this.replyMarkup);
        }
        if (this.replyMarkup instanceof ReplyKeyboardRemove) {
            json['reply_markup'] = ReplyKeyboardRemoveSerializer.toJsonString(this.replyMarkup);
        }
        if (this.replyMarkup instanceof ForceReply) {
            json['reply_markup'] = ForceReplySerializer.toJsonString(this.replyMarkup);
        }

        return json;
    }
}

export default MessageResponse;