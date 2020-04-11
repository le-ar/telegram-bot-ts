import Document from "../../domain/entities/document";
import PhotoSizeModel from "./photo_size_model";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#document
class DocumentModel extends Document {
    static fromJson(json: any): DocumentModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let thumb = json.thumb ? PhotoSizeModel.fromJson(json.thumb) : null;
        if (!(thumb instanceof PhotoSizeModel)) {
            thumb = null;
        }

        if (!(thumb instanceof Failure)) {
            return new DocumentModel(
                json.file_id,
                json.file_unique_id,
                thumb,
                json.file_name ?? null,
                json.mime_type ?? null,
                json.file_size ?? null
            );
        }

        return new FailureWrongStructure();
    }

    private static checkJson(json: any) {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('file_id') &&
            json.hasOwnProperty('file_unique_id')
        );
    }
}

export default DocumentModel;