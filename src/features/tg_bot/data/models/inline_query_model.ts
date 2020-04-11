import InlineQuery from "../../domain/entities/inline_query";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import LocationModel from "./location_model";
import UserModel from "./user_model";

// https://core.telegram.org/bots/api#inlinequery
class InlineQueryModel extends InlineQuery {
    static fromJson(json: any): InlineQueryModel | Failure {
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

        if (!(location instanceof Failure) && !(from instanceof Failure)) {
            return new InlineQueryModel(
                json.id,
                from,
                json.query,
                json.offset,
                location
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('id') &&
            json.hasOwnProperty('from') &&
            json.hasOwnProperty('query') &&
            json.hasOwnProperty('offset')
        );
    }
}

export default InlineQueryModel;