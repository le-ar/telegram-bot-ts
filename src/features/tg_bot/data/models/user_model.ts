import User from "../../domain/entities/user";
import { FailureWrongStructure } from "../../../../core/failures";

class UserModel extends User {
    id: number;
    isBot: boolean;
    firstName: string;
    lastName: string;
    username: string;
    languageCode: string;
    canJoinGroups: boolean;
    canReadAllGroupMessages: boolean;
    supportsInlineQueries: boolean;

    static fromJson(json: any) {
        if (json === null || typeof json !== 'object' || !json.hasOwnProperty('id') || !json.hasOwnProperty('is_bot') || !json.hasOwnProperty('first_name')) {
            return new FailureWrongStructure();
        }
        return new UserModel(
            json.id,
            json.is_bot,
            json.first_name,
            json.last_name ?? null,
            json.username ?? null,
            json.language_code ?? null,
            json.can_join_groups ?? null,
            json.can_read_all_group_messages ?? null,
            json.supports_inline_queries ?? null
        );
    }
}

export default UserModel;