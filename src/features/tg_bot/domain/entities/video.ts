import PhotoSize from "./photo_size";

// https://core.telegram.org/bots/api#video
class Video {
    fileId: string;
    fileUniqueId: string;
    width: number;
    height: number;
    duration: number;
    thumb?: PhotoSize;
    mimeType?: string;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        width: number,
        height: number,
        duration: number,
        thumb?: PhotoSize,
        mimeType?: string,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.thumb = thumb;
        this.mimeType = mimeType;
        this.fileSize = fileSize;
    }
}

export default Video;