// https://core.telegram.org/bots/api#voice
class Voice {
    fileId: string;
    fileUniqueId: string;
    duration: number;
    mimeType?: string;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        duration: number,
        mimeType?: string,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.duration = duration;
        this.mimeType = mimeType;
        this.fileSize = fileSize;
    }
}

export default Voice;