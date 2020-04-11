import PhotoSize from "./photo_size";

// https://core.telegram.org/bots/api#animation
class Animation {
    fileId: string;
    fileUniqueId: string;
    width: number;
    height: number;
    duration: number;
    thumb?: PhotoSize;
    fileName?: string;
    mimeType?: string;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        width: number,
        height: number,
        duration: number,
        thumb?: PhotoSize,
        fileName?: string,
        mimeType?: string,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.thumb = thumb;
        this.fileName = fileName;
        this.mimeType = mimeType;
        this.fileSize = fileSize;
    }
}

export default Animation;