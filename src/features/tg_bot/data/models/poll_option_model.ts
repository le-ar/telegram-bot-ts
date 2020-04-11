import PollOption from "../../domain/entities/poll_option";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#polloption
class PollOptionModel extends PollOption {
    static fromJson(json: any): PollOptionModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new PollOptionModel(
            json.text,
            json.voter_count
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('text') &&
            json.hasOwnProperty('voter_count')
        );
    }
}

export default PollOptionModel;