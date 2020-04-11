// https://core.telegram.org/bots/api#loginurl
class LoginUrl {
    url: string;
    forwardText?: string;
    botUsername?: string;
    requestWriteAccess?: boolean;

    constructor(
        url: string,
        forwardText?: string,
        botUsername?: string,
        requestWriteAccess?: boolean
    ) {
        this.url = url;
        this.forwardText = forwardText;
        this.botUsername = botUsername;
        this.requestWriteAccess = requestWriteAccess;
    }
}

export default LoginUrl;