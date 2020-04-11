import InlineKeyboardButton from "./inline_keyboard_button";

// https://core.telegram.org/bots/api#inlinekeyboardmarkup
class InlineKeyboardMarkup {
    inlineKeyboard: InlineKeyboardButton[][];

    constructor(props: { inlineKeyboard: InlineKeyboardButton[][] }) {
        this.inlineKeyboard = props.inlineKeyboard;
    }
}

export default InlineKeyboardMarkup;