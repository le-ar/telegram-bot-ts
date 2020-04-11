import PhotoSizeModel from "./photo_size_model";
import Audio from "../../domain/entities/audio";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#audio
class AudioModel extends Audio {
    static fromJson(json: any): AudioModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let thumb = json.thumb ? PhotoSizeModel.fromJson(json.thumb) : null;
        if (!(thumb instanceof PhotoSizeModel)) {
            thumb = null;
        }

        if (!(thumb instanceof Failure)) {
            return new AudioModel(
                json.file_id,
                json.file_unique_id,
                json.duration,
                json.performer ?? null,
                json.title ?? null,
                json.mime_type ?? null,
                json.file_size ?? null,
                thumb ?? null
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
            json.hasOwnProperty('duration')
        );
    }
}

export default AudioModel;