import KeyboardButton from "../../domain/entities/keyboard_button";
import Serializable from "../../../../core/serializable";
import KeyboardButtonPollTypeModel from "./keyboard_button_poll_type_model";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

//https://core.telegram.org/bots/api#keyboardbutton
class KeyboardButtonModel extends KeyboardButton implements Serializable {

    static fromJson(json: any): KeyboardButtonModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let requestPoll = json.request_poll ? KeyboardButtonPollTypeModel.fromJson(json.request_poll) : null;
        if (requestPoll instanceof Failure) {
            requestPoll = null;
        }

        if (!(requestPoll instanceof Failure)) {
            return new KeyboardButtonModel({
                text: json.text,
                requestContact: json.request_contact ?? null,
                requestLocation: json.request_location ?? null,
                requestPoll: requestPoll
            });
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('text')
        );
    }

    toJsonString(): string {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any; } {
        let json = { text: this.text };
        if (typeof this.requestContact === 'boolean') {
            json['request_contact'] = this.requestContact;
        }
        if (typeof this.requestLocation === 'boolean') {
            json['request_location'] = this.requestLocation;
        }
        if (this.requestPoll instanceof KeyboardButtonPollTypeModel) {
            json['request_poll'] = this.requestPoll.toJsonObject();
        }

        return json;
    }
}

export default KeyboardButtonModel;