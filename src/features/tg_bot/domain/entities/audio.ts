import PhotoSize from "./photo_size";

// https://core.telegram.org/bots/api#audio
class Audio {
    fileId: string;
    fileUniqueId: string;
    duration: number;
    performer?: string;
    title?: string;
    mimeType?: string;
    fileSize?: number;
    thumb?: PhotoSize;

    constructor(
        fileId: string,
        fileUniqueId: string,
        duration: number,
        performer?: string,
        title?: string,
        mimeType?: string,
        fileSize?: number,
        thumb?: PhotoSize
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.duration = duration;
        this.performer = performer;
        this.title = title;
        this.mimeType = mimeType;
        this.fileSize = fileSize;
        this.thumb = thumb;
    }
}

export default Audio;