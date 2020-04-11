import MaskPosition from "../../domain/entities/mask_position";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#maskposition
class MaskPositionModel extends MaskPosition {
    static fromJson(json: any): MaskPositionModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new MaskPositionModel(
            json.point,
            json.x_shift,
            json.y_shift,
            json.scale
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('point') &&
            json.hasOwnProperty('x_shift') &&
            json.hasOwnProperty('y_shift') &&
            json.hasOwnProperty('scale')
        );
    }
}

export default MaskPositionModel;