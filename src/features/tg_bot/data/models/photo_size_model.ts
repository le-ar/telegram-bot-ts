import PhotoSize from "../../domain/entities/photo_size";
import { FailureWrongStructure, Failure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#photosize
class PhotoSizeModel extends PhotoSize {
    static fromJson(json: any): PhotoSizeModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new PhotoSizeModel(
            json.file_id,
            json.file_unique_id,
            json.width,
            json.height,
            json.file_size ?? null
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('file_id') &&
            json.hasOwnProperty('file_unique_id') &&
            json.hasOwnProperty('width') &&
            json.hasOwnProperty('height')
        );
    }
}

export default PhotoSizeModel;