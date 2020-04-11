import ReplyKeyboardRemove from "../../domain/entities/reply_keyboard_remove";
import Serializable from "../../../../core/serializable";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

//https://core.telegram.org/bots/api#replykeyboardremove
class ReplyKeyboardRemoveModel extends ReplyKeyboardRemove implements Serializable {
    static fromJson(json: any): ReplyKeyboardRemoveModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new ReplyKeyboardRemoveModel(
            json.selective ?? null
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('remove_keyboard')
        );
    }

    toJsonString(): string {
        let json = { remove_keyboard: this.removeKeyboard };
        if (typeof this.selective === 'boolean') {
            json['selective'] = this.selective;
        }

        return JSON.stringify(json);
    }

    toJsonObject(): { [key: string]: any; } {
        let json = { remove_keyboard: this.removeKeyboard };
        if (typeof this.selective === 'boolean') {
            json['selective'] = this.selective;
        }

        return json;
    }
}

export default ReplyKeyboardRemoveModel;