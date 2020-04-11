import PassportFile from "../../domain/entities/passport_file";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#passportfile
class PassportFileModel extends PassportFile {
    static fromJson(json: any): PassportFileModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new PassportFileModel(
            json.file_id,
            json.file_unique_id,
            json.file_size,
            json.file_date
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('file_id') &&
            json.hasOwnProperty('file_unique_id') &&
            json.hasOwnProperty('file_size') &&
            json.hasOwnProperty('file_date')
        );
    }
}

export default PassportFileModel;