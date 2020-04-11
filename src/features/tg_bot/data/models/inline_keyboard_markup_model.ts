import InlineKeyboardMarkup from "../../domain/entities/inline_keyboard_markup";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import InlineKeyboardButtonModel from "./inline_keyboard_button_model";
import Serializable from "../../../../core/serializable";

// https://core.telegram.org/bots/api#inlinekeyboardmarkup
class InlineKeyboardMarkupModel extends InlineKeyboardMarkup implements Serializable {
    static fromJson(json: any): InlineKeyboardMarkupModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let inlineKeyboard: InlineKeyboardButtonModel[][] = [];
        if (Array.isArray(json.inline_keyboard)) {
            for (let inlineKeyboardRow of json.inline_keyboard) {
                if (Array.isArray(inlineKeyboardRow)) {
                    inlineKeyboard.push([]);
                    for (let inlineKeyboardButton of inlineKeyboardRow) {
                        let inlineKeyboardButtonModel = InlineKeyboardButtonModel.fromJson(inlineKeyboardButton);
                        if (inlineKeyboardButtonModel instanceof InlineKeyboardButtonModel) {
                            inlineKeyboard[inlineKeyboard.length - 1].push(inlineKeyboardButtonModel);
                        }
                    }
                }
            }
        } else {
            inlineKeyboard = [];
        }

        return new InlineKeyboardMarkupModel({ inlineKeyboard: inlineKeyboard });
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('inline_keyboard')
        );
    }

    toJsonString(): string {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any; } {
        let keyboard = [];
        for (let row of this.inlineKeyboard) {
            keyboard.push([]);
            for (let button of row) {
                if (button instanceof InlineKeyboardButtonModel) {
                    keyboard[keyboard.length - 1].push(button.toJsonObject());
                }
            }
        }
        return { inline_keyboard: keyboard };
    }
}

export default InlineKeyboardMarkupModel;