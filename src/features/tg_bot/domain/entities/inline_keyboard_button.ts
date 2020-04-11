import LoginUrl from "./login_url";
import CallbackGame from "./callback_game";
import { FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#inlinekeyboardbutton
/*
* You must use exactly one of the optional fields.
*/
class InlineKeyboardButton {
    text: string;
    url?: string;
    loginUrl?: LoginUrl;
    callbackData?: string;
    switchInlineQuery?: string;
    switchInlineQueryCurrentChat?: string;
    callbackGame?: CallbackGame;
    pay?: boolean;

    constructor(props: {
        text: string;
        url?: string;
        loginUrl?: LoginUrl;
        callbackData?: string;
        switchInlineQuery?: string;
        switchInlineQueryCurrentChat?: string;
        callbackGame?: CallbackGame;
        pay?: boolean;
    }) {
        if (!this.checkPropsOneOptionalSelecter(props)) {
            throw new Error('You must use exactly one of the optional fields.');
        }

        this.text = props.text;
        this.url = props.url;
        this.loginUrl = props.loginUrl;
        this.loginUrl = props.loginUrl;
        this.callbackData = props.callbackData;
        this.switchInlineQuery = props.switchInlineQuery;
        this.switchInlineQueryCurrentChat = props.switchInlineQueryCurrentChat;
        this.callbackGame = props.callbackGame;
        this.pay = props.pay;
    }

    private checkPropsOneOptionalSelecter(props: {
        url?: string;
        loginUrl?: LoginUrl;
        callbackData?: string;
        switchInlineQuery?: string;
        switchInlineQueryCurrentChat?: string;
        callbackGame?: CallbackGame;
        pay?: boolean;
    }) {
        let selected: number = 0;
        if (typeof props.url === 'string') {
            selected++;
        }
        if (props.loginUrl instanceof LoginUrl) {
            selected++;
        }
        if (typeof props.callbackData === 'string') {
            selected++;
        }
        if (typeof props.switchInlineQuery === 'string') {
            selected++;
        }
        if (typeof props.switchInlineQueryCurrentChat === 'string') {
            selected++;
        }
        if (props.callbackGame instanceof CallbackGame) {
            selected++;
        }
        if (typeof props.pay === 'boolean') {
            selected++;
        }

        return selected === 1;
    }
}

export default InlineKeyboardButton;