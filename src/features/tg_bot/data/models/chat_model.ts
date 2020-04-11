import Chat from "../../domain/entities/chat";
import ChatPhotoModel from "./chat_photo_model";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import MessageModel from "./message_model";
import ChatPermissionsModel from "./chat_permissions_model";

class ChatModel extends Chat {
    static fromJson(json: any): ChatModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let photo = json.photo ? ChatPhotoModel.fromJson(json.photo) : null;
        if (!(photo instanceof ChatPhotoModel)) {
            photo = null;
        }

        let pinned_message = json.pinned_message ? MessageModel.fromJson(json.pinned_message) : null;
        if (!(pinned_message instanceof MessageModel)) {
            pinned_message = null;
        }

        let permissions = json.permissions ? ChatPermissionsModel.fromJson(json.permissions) : null;
        if (!(permissions instanceof ChatPermissionsModel)) {
            permissions = null;
        }

        if (!(photo instanceof Failure) && !(pinned_message instanceof Failure) && !(permissions instanceof Failure)) {
            return new ChatModel(
                json.id,
                json.type,
                json.title ?? null,
                json.username ?? null,
                json.first_name ?? null,
                json.last_name ?? null,
                photo,
                json.description ?? null,
                json.invite_link ?? null,
                pinned_message,
                permissions,
                json.slow_mode_delay ?? null,
                json.sticker_set_name ?? null,
                json.can_set_sticker_set ?? null
            );
        }

        return new FailureWrongStructure();
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('id') &&
            json.hasOwnProperty('type')
        );
    }
}

export default ChatModel;