import Video from "../../domain/entities/video";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PhotoSizeModel from "./photo_size_model";

// https://core.telegram.org/bots/api#video
class VideoModel extends Video {
    static fromJson(json: any): VideoModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        let thumb = PhotoSizeModel.fromJson(json.thumb);
        if (!(thumb instanceof PhotoSizeModel)) {
            thumb = null;
        }

        if (!(thumb instanceof Failure)) {
            return new VideoModel(
                json.file_id,
                json.file_unique_id,
                json.width,
                json.height,
                json.duration,
                thumb,
                json.mime_type ?? null,
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
            json.hasOwnProperty('duration')
        );
    }
}

export default VideoModel;