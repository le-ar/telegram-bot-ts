import PhotoSize from "./photo_size";
import MaskPosition from "./mask_position";

// https://core.telegram.org/bots/api#sticker
class Sticker {
    fileId: string;
    fileUniqueId: string;
    width: number;
    height: number;
    isAnimated: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    setName?: string;
    maskPosition?: MaskPosition;
    fileSize?: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        width: number,
        height: number,
        isAnimated: boolean,
        thumb?: PhotoSize,
        emoji?: string,
        setName?: string,
        maskPosition?: MaskPosition,
        fileSize?: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.width = width;
        this.height = height;
        this.isAnimated = isAnimated;
        this.thumb = thumb;
        this.emoji = emoji;
        this.setName = setName;
        this.maskPosition = maskPosition;
        this.fileSize = fileSize;
    }
}

export default Sticker;