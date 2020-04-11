import EncryptedPassportElement from "../../domain/entities/encrypted_passport_element";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PassportFileModel from "./passport_file_model";

// https://core.telegram.org/bots/api#encryptedpassportelement
class EncryptedPassportElementModel extends EncryptedPassportElement {
    static fromJson(json: any): EncryptedPassportElementModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let files: PassportFileModel[] = [];
        if (Array.isArray(json.files)) {
            for (let file of json.files) {
                let fileModel = PassportFileModel.fromJson(file);
                if (fileModel instanceof PassportFileModel) {
                    files.push(fileModel);
                }
            }
        } else {
            files = [];
        }

        let translation: PassportFileModel[] = [];
        if (Array.isArray(json.translation)) {
            for (let file of json.translation) {
                let fileModel = PassportFileModel.fromJson(file);
                if (fileModel instanceof PassportFileModel) {
                    translation.push(fileModel);
                }
            }
        } else {
            translation = [];
        }

        let frontSide = json.front_side ? PassportFileModel.fromJson(json.front_side) : null;
        if (!(frontSide instanceof PassportFileModel)) {
            frontSide = null;
        }

        let reverseSide = json.reverse_side ? PassportFileModel.fromJson(json.reverse_side) : null;
        if (!(reverseSide instanceof PassportFileModel)) {
            reverseSide = null;
        }

        let selfie = json.selfie ? PassportFileModel.fromJson(json.selfie) : null;
        if (!(selfie instanceof PassportFileModel)) {
            selfie = null;
        }

        if (!(frontSide instanceof Failure) &&
            !(reverseSide instanceof Failure) &&
            !(selfie instanceof Failure)) {
            return new EncryptedPassportElementModel(
                json.type,
                json.hash,
                json.data ?? null,
                json.phone_number ?? null,
                json.email ?? null,
                files,
                frontSide,
                reverseSide,
                selfie,
                translation
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('type') &&
            json.hasOwnProperty('hash')
        );
    }
}

export default EncryptedPassportElementModel;