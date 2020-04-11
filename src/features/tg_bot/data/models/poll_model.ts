import Poll from "../../domain/entities/poll";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PollOptionModel from "./poll_option_model";

// https://core.telegram.org/bots/api#poll
class PollModel extends Poll {
    static fromJson(json: any): PollModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let options: PollOptionModel[] = [];
        for (let option of json.options) {
            let parsedOption = PollOptionModel.fromJson(option);
            if (parsedOption instanceof PollOptionModel) {
                options.push(parsedOption);
            }
        }

        return new PollModel(
            json.id,
            json.question,
            options,
            json.total_voter_count,
            !!json.is_closed,
            !!json.is_anonymous,
            json.type,
            !!json.allows_multiple_answers,
            json.correct_option_id ?? null,
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('id') &&
            json.hasOwnProperty('question') &&
            json.hasOwnProperty('options') &&
            json.hasOwnProperty('total_voter_count') &&
            json.hasOwnProperty('is_closed') &&
            json.hasOwnProperty('is_anonymous') &&
            json.hasOwnProperty('type') &&
            json.hasOwnProperty('allows_multiple_answers')
        );
    }
}

export default PollModel;    