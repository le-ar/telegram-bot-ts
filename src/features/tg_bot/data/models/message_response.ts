import InlineKeyboardMarkupModel from "./inline_keyboard_markup_model";
import InlineKeyboardButtonModel from "./inline_keyboard_button_model";
import ReplyKeyboardMarkup from "../../domain/entities/reply_keyboard_markup";
import ReplyKeyboardRemoveModel from "./reply_keyboard_remove_model";
import ForceReplyModel from "./force_reply_model";
import Serializable from "../../../../core/serializable";
import ReplyKeyboardMarkupModel from "./reply_keyboard_markup_model";

class MessageResponse implements Serializable {
    chatId: number | string;
    text: string;
    parseMode?: string; //MarkdownV2 or HTML
    disableWebPagePreview?: boolean;
    disableNotification?: boolean;
    replyToMessageId?: number;
    replyMarkup?: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel;

    constructor(props: {
        chatId: number | string;
        text: string;
        parseMode?: string;
        disableWebPagePreview?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: number;
        replyMarkup?: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel;
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

    setReplyMarkup(replyMarkup: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel): MessageResponse {
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
        if (this.replyMarkup instanceof InlineKeyboardMarkupModel ||
            this.replyMarkup instanceof ReplyKeyboardMarkupModel ||
            this.replyMarkup instanceof ReplyKeyboardRemoveModel ||
            this.replyMarkup instanceof ForceReplyModel) {
            json['reply_markup'] = this.replyMarkup.toJsonObject();
        }

        return json;
    }
}

export default MessageResponse;