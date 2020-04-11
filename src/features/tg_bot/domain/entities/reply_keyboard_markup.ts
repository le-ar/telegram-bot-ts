import KeyboardButton from "./keyboard_button";

//https://core.telegram.org/bots/api#replykeyboardmarkup
class ReplyKeyboardMarkup {
    keyboard: KeyboardButton[][];
    resizeKeyboard?: boolean;
    oneTimeKeyboard?: boolean;
    selective?: boolean;

    constructor(props: {
        keyboard: KeyboardButton[][];
        resizeKeyboard?: boolean;
        oneTimeKeyboard?: boolean;
        selective?: boolean;
    }) {
        this.keyboard = props.keyboard;
        this.resizeKeyboard = props.resizeKeyboard;
        this.oneTimeKeyboard = props.oneTimeKeyboard;
        this.selective = props.selective;
    }
}

export default ReplyKeyboardMarkup;