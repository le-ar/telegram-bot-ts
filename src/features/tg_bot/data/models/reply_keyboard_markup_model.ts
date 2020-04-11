import ReplyKeyboardMarkup from "../../domain/entities/reply_keyboard_markup";
import Serializable from "../../../../core/serializable";
import { FailureWrongStructure, Failure } from "../../../../core/failures";
import KeyboardButtonModel from "./keyboard_button_model";

//https://core.telegram.org/bots/api#replykeyboardmarkup
class ReplyKeyboardMarkupModel extends ReplyKeyboardMarkup implements Serializable {

    static fromJson(json: any): ReplyKeyboardMarkupModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure
        }

        let keyboard: KeyboardButtonModel[][] = [];
        if (Array.isArray(json.keyboard)) {
            for (let row of keyboard) {
                keyboard.push([]);
                if (Array.isArray(row)) {
                    for (let button of row) {
                        let buttonModel = KeyboardButtonModel.fromJson(button);
                        if (buttonModel instanceof KeyboardButtonModel) {
                            keyboard[keyboard.length - 1].push(buttonModel);
                        }
                    }
                }
            }
        }

        return new ReplyKeyboardMarkupModel({
            keyboard: keyboard,
            resizeKeyboard: json.resize_keyboard ?? null,
            oneTimeKeyboard: json.one_time_keyboard ?? null,
            selective: json.selective ?? null
        }
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('keyboard')
        );
    }

    toJsonString() {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any } {
        let keyboard = [];
        for (let row of this.keyboard) {
            keyboard.push([]);
            for (let button of row) {
                if (button instanceof KeyboardButtonModel) {
                    keyboard[keyboard.length - 1].push(button.toJsonObject());
                }
            }
        }

        let json = { keyboard: keyboard };
        if (typeof this.resizeKeyboard === 'boolean') {
            json['resize_keyboard'] = this.resizeKeyboard;
        }
        if (typeof this.oneTimeKeyboard === 'boolean') {
            json['one_time_keyboard'] = this.oneTimeKeyboard;
        }
        if (typeof this.selective === 'boolean') {
            json['selective'] = this.selective;
        }

        return json;
    }
}

export default ReplyKeyboardMarkupModel;