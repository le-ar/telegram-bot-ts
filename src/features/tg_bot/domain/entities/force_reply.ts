//https://core.telegram.org/bots/api#forcereply
class ForceReply {
    forceReply: boolean = true;
    selective?: boolean;

    constructor(selective?: boolean) {
        this.selective = selective;
    }
}

export default ForceReply;