import ChatPermissions from "../../domain/entities/chat_permissions";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#chatpermissions
class ChatPermissionsModel extends ChatPermissions {
    static fromJson(json: any): ChatPermissionsModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new ChatPermissionsModel(
            json.can_send_messages ?? null,
            json.can_send_media_messages ?? null,
            json.can_send_polls ?? null,
            json.can_send_other_messages ?? null,
            json.can_add_web_page_previews ?? null,
            json.can_change_info ?? null,
            json.can_invite_users ?? null,
            json.can_pin_messages ?? null,
        );
    }

    private static checkJson(json: any) {
        return (json !== null && typeof json === 'object');
    }
}

export default ChatPermissionsModel;