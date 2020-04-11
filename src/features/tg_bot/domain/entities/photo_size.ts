// https://core.telegram.org/bots/api#photosize
class PhotoSize {
    fileId: string;
    fileUniqueId: string;
    width: number;
    height: number;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        width: number,
        height: number,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.width = width;
        this.height = height;
        this.fileSize = fileSize;
    }
}

export default PhotoSize;