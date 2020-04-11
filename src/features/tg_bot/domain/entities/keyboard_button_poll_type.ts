import Serializable from "../../../../core/serializable";

//https://core.telegram.org/bots/api#keyboardbuttonpolltype
class KeyboardButtonPollType {
    type?: string;

    constructor(type?: string) {
        this.type = type;
    }
}

export default KeyboardButtonPollType;