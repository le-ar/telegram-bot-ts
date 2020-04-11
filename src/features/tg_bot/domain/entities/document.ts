import PhotoSize from "./photo_size";

// https://core.telegram.org/bots/api#document
class Document {
    fileId: string;
    fileUniqueId: string;
    thumb?: PhotoSize;
    fileName?: string;
    mimeType?: string;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        thumb?: PhotoSize,
        fileName?: string,
        mimeType?: string,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.thumb = thumb;
        this.fileName = fileName;
        this.mimeType = mimeType;
        this.fileSize = fileSize;
    }
}

export default Document;