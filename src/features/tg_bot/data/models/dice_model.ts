import Dice from "../../domain/entities/dice";
import { FailureWrongStructure, Failure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#dice
class DiceModel extends Dice {
    static fromJson(json: any): DiceModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        return new DiceModel(json.value);
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('value')
        );
    }
}

export default DiceModel;