import KeyboardButtonPollType from "./keyboard_button_poll_type";

//https://core.telegram.org/bots/api#keyboardbutton
class KeyboardButton {
    text: string;
    requestContact?: boolean;
    requestLocation?: boolean;
    requestPoll?: KeyboardButtonPollType;

    constructor(props: {
        text: string,
        requestContact?: boolean,
        requestLocation?: boolean,
        requestPoll?: KeyboardButtonPollType
    }) {
        this.text = props.text;
        this.requestContact = props.requestContact;
        this.requestLocation = props.requestLocation;
        this.requestPoll = props.requestPoll;
    }
}

export default KeyboardButton;