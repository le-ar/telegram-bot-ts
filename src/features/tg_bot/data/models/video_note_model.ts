import VideoNote from "../../domain/entities/video_note";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PhotoSizeModel from "./photo_size_model";

// https://core.telegram.org/bots/api#videonote
class VideoNoteModel extends VideoNote {
    static fromJson(json: any): VideoNoteModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let thumb = PhotoSizeModel.fromJson(json.thumb);
        if (!(thumb instanceof PhotoSizeModel)) {
            thumb = null;
        }

        if (!(thumb instanceof Failure)) {
            return new VideoNoteModel(
                json.file_id,
                json.file_unique_id,
                json.length,
                json.duration,
                thumb,
                json.file_size ?? null,
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
            json.hasOwnProperty('length') &&
            json.hasOwnProperty('duration')
        );
    }
}

export default VideoNoteModel;