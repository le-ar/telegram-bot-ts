import InlineKeyboardButton from "./inline_keyboard_button";

// https://core.telegram.org/bots/api#inlinekeyboardmarkup
class InlineKeyboardMarkup{
    inlineKeyboard: InlineKeyboardButton[][];

    constructor(inlineKeyboard: InlineKeyboardButton[][]) {
        this.inlineKeyboard = inlineKeyboard;
    }
}

export default InlineKeyboardMarkup;