import PhotoSize from "./photo_size";

// https://core.telegram.org/bots/api#videonote
class VideoNote {
    fileId: string;
    fileUniqueId: string;
    length: number;
    duration: number;
    thumb?: PhotoSize;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        length: number,
        duration: number,
        thumb?: PhotoSize,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.length = length;
        this.duration = duration;
        this.thumb = thumb;
        this.fileSize = fileSize;
    }
}

export default VideoNote;