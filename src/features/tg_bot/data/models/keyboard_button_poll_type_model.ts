import Serializable from "../../../../core/serializable";
import KeyboardButtonPollType from "../../domain/entities/keyboard_button_poll_type";
import { FailureWrongStructure, Failure } from "../../../../core/failures";

//https://core.telegram.org/bots/api#keyboardbuttonpolltype
class KeyboardButtonPollTypeModel extends KeyboardButtonPollType implements Serializable {

    public static fromJson(json: any): KeyboardButtonPollTypeModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure
        }

        let type = json.type ?? null;
        if (!(typeof type !== 'string')) {
            type = null;
        }

        return new KeyboardButtonPollTypeModel(type);
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object'
        );
    }

    toJsonString() {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() {
        let json = {};
        if (typeof this.type === 'boolean') {
            json['type'] = this.type;
        }

        return json;
    }
}

export default KeyboardButtonPollTypeModel;