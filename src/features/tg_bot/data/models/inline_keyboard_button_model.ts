import InlineKeyboardButton from "../../domain/entities/inline_keyboard_button";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import LoginUrlModel from "./login_url_model";
import CallbackGameModel from "./callback_game_model";

// https://core.telegram.org/bots/api#inlinekeyboardbutton
class InlineKeyboardButtonModel extends InlineKeyboardButton {
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
            return new InlineKeyboardButtonModel(
                json.text,
                json.url ?? null,
                loginUrl,
                json.callback_data ?? null,
                json.switch_inline_query ?? null,
                json.switch_inline_query_current_chat ?? null,
                callbackGame,
                json.pay ?? null
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('text')
        );
    }
}

export default InlineKeyboardButtonModel;