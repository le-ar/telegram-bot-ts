//https://core.telegram.org/bots/api#replykeyboardremove
class ReplyKeyboardRemove {
    removeKeyboard: boolean = true;
    selective?: boolean;

    constructor(
        selective?: boolean
    ) {
        this.selective = selective;
    }
}

export default ReplyKeyboardRemove;