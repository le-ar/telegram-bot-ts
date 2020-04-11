import Sticker from "../../domain/entities/sticker";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PhotoSizeModel from "./photo_size_model";
import MaskPositionModel from "./mask_position_model";

// https://core.telegram.org/bots/api#sticker
class StickerModel extends Sticker {
    static fromJson(json: any): StickerModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let thumb = PhotoSizeModel.fromJson(json.thumb);
        if (!(thumb instanceof PhotoSizeModel)) {
            thumb = null;
        }

        let mask_position = MaskPositionModel.fromJson(json.mask_position);
        if (!(mask_position instanceof MaskPositionModel)) {
            mask_position = null;
        }

        if (!(thumb instanceof Failure) && !(mask_position instanceof Failure)) {
            return new StickerModel(
                json.file_id,
                json.file_unique_id,
                json.width,
                json.height,
                json.is_animated,
                thumb,
                json.emoji ?? null,
                json.set_name ?? null,
                mask_position,
                json.file_size ?? null
            );
        }
        return new FailureWrongStructure();
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('file_id') &&
            json.hasOwnProperty('file_unique_id') &&
            json.hasOwnProperty('width') &&
            json.hasOwnProperty('height') &&
            json.hasOwnProperty('is_animated')
        );
    }
}

export default StickerModel;