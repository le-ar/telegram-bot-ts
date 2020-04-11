// https://core.telegram.org/bots/api#chatphoto
class ChatPhoto {
    smallFileId: string;
    smallFileUniqueId: string;
    bigFileId: string;
    bigFileUniqueId: string;

    constructor(
        smallFileId: string,
        smallFileUniqueId: string,
        bigFileId: string,
        bigFileUniqueId: string
    ) {
        this.smallFileId = smallFileId;
        this.smallFileUniqueId = smallFileUniqueId;
        this.bigFileId = bigFileId;
        this.bigFileUniqueId = bigFileUniqueId;
    }
}

export default ChatPhoto;