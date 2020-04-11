import ChosenInlineResult from "../../domain/entities/chosen_inline_result";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import LocationModel from "./location_model";
import UserModel from "./user_model";

// https://core.telegram.org/bots/api#choseninlineresult
class ChosenInlineResultModel extends ChosenInlineResult {
    static fromJson(json: any): ChosenInlineResultModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let location = json.location ? LocationModel.fromJson(json.location) : null;
        if (!(location instanceof LocationModel)) {
            location = null;
        }

        let from = json.from ? UserModel.fromJson(json.from) : null;
        if (!(from instanceof UserModel)) {
            from = null;
        }

        if (!(from instanceof Failure) &&
            !(location instanceof Failure)) {
            return new ChosenInlineResultModel(
                json.result_id,
                from,
                json.query,
                location,
                json.inline_message_id ?? null,
            );
        }
    }

    private static checkJson(json: any) {
        return (json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('result_id') &&
            json.hasOwnProperty('from') &&
            json.hasOwnProperty('query')
        );
    }
}

export default ChosenInlineResultModel;