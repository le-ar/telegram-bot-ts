import Voice from "../../domain/entities/voice";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#voice
class VoiceModel extends Voice {
    static fromJson(json: any): VoiceModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new VoiceModel(
            json.file_id,
            json.file_unique_id,
            json.duration,
            json.mime_type ?? null,
            json.file_size ?? null
        );
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

export default VoiceModel;