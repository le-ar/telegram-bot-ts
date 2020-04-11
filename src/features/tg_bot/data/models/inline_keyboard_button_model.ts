import InlineKeyboardButton from "../../domain/entities/inline_keyboard_button";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import LoginUrlModel from "./login_url_model";
import CallbackGameModel from "./callback_game_model";
import Serializable from "../../../../core/serializable";

// https://core.telegram.org/bots/api#inlinekeyboardbutton
class InlineKeyboardButtonModel extends InlineKeyboardButton implements Serializable {
    static fromJson(json: any): InlineKeyboardButtonModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let loginUrl = json.login_url ? LoginUrlModel.fromJson(json.login_url) : null;
        if (!(loginUrl instanceof LoginUrlModel)) {
            loginUrl = null;
        }

        let callbackGame = json.callback_game ? CallbackGameModel.fromJson(json.callback_game) : null;
        if (!(callbackGame instanceof CallbackGameModel)) {
            callbackGame = null;
        }

        if (!(loginUrl instanceof Failure) && !(callbackGame instanceof Failure)) {
            return new InlineKeyboardButtonModel({
                text: json.text,
                url: json.url ?? null,
                loginUrl: loginUrl,
                callbackData: json.callback_data ?? null,
                switchInlineQuery: json.switch_inline_query ?? null,
                switchInlineQueryCurrentChat: json.switch_inline_query_current_chat ?? null,
                callbackGame: callbackGame,
                pay: json.pay ?? null
            });
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('text')
        );
    }

    toJsonString(): string {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any; } {
        let json = { text: this.text };
        if (typeof this.url === 'string') {
            json['url'] = this.url;
        }
        if (this.loginUrl instanceof LoginUrlModel) {
            json['login_url'] = this.loginUrl.toJsonObject();
        }
        if (typeof this.callbackData === 'string') {
            json['callback_data'] = this.callbackData;
        }
        if (typeof this.switchInlineQuery === 'string') {
            json['switch_inline_query'] = this.switchInlineQuery;
        }
        if (typeof this.switchInlineQueryCurrentChat === 'string') {
            json['switch_inline_query_current_chat'] = this.switchInlineQueryCurrentChat;
        }
        if (this.callbackGame instanceof CallbackGameModel) {
            json['callback_game'] = this.callbackGame.toJsonObject();
        }
        if (typeof this.pay === 'boolean') {
            json['pay'] = this.pay;
        }

        return json;
    }
}

export default InlineKeyboardButtonModel;