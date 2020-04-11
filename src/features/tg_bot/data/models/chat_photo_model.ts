import { FailureWrongStructure, Failure } from "../../../../core/failures";
import ChatPhoto from "../../domain/entities/chat_photo";

class ChatPhotoModel extends ChatPhoto {
    static fromJson(json: any): ChatPhotoModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }
        return new ChatPhotoModel(
            json.small_file_id,
            json.small_file_unique_id,
            json.big_file_id,
            json.big_file_unique_id
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('small_file_id') &&
            json.hasOwnProperty('small_file_unique_id') &&
            json.hasOwnProperty('big_file_id') &&
            json.hasOwnProperty('big_file_unique_id')
        );
    }
}

export default ChatPhotoModel;