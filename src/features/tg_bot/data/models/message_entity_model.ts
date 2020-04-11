import MessageEntity from "../../domain/entities/message_entity";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import UserModel from "./user_model";

// https://core.telegram.org/bots/api#messageentity
class MessageEntityModel extends MessageEntity {
    static fromJson(json: any): MessageEntityModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let user = json.user ? UserModel.fromJson(json.user) : null;
        if (!(user instanceof UserModel)) {
            user = null;
        }

        if (!(user instanceof Failure)) {
            return new MessageEntityModel(
                json.type,
                json.offset,
                json.length,
                json.url ?? null,
                user,
                json.language ?? null
            );
        }

        return new FailureWrongStructure();
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('type') &&
            json.hasOwnProperty('offset') &&
            json.hasOwnProperty('length')
        );
    }
}

export default MessageEntityModel;