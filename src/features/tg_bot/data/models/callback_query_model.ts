import CallbackQuery from "../../domain/entities/callback_query";
import { FailureWrongStructure, Failure } from "../../../../core/failures";
import UserModel from "./user_model";
import MessageModel from "./message_model";

// https://core.telegram.org/bots/api#callbackquery
class CallbackQueryModel extends CallbackQuery {
    static fromJson(json: any): CallbackQueryModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let from = json.from ? UserModel.fromJson(json.from) : null;
        if (!(from instanceof UserModel)) {
            from = null;
        }

        let message = json.message ? MessageModel.fromJson(json.message) : null;
        if (!(message instanceof MessageModel)) {
            message = null;
        }

        if (!(from instanceof Failure) &&
            !(message instanceof Failure)) {
            return new CallbackQueryModel(
                json.id,
                from,
                json.chat_instance,
                message,
                json.inline_message_id ?? null,
                json.data ?? null,
                json.game_short_name ?? null,
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('id') &&
            json.hasOwnProperty('from') &&
            json.hasOwnProperty('chat_instance')
        );
    }
}

export default CallbackQueryModel;