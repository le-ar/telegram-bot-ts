import PassportFile from "./passport_file";

// https://core.telegram.org/bots/api#encryptedpassportelement
class EncryptedPassportElement {
    type: string;
    data?: string;
    phoneNumber?: string;
    email?: string;
    files?: PassportFile[];
    frontSide?: PassportFile;
    reverseSide?: PassportFile;
    selfie?: PassportFile;
    translation?: PassportFile[];
    hash: string;

    constructor(
        type: string,
        hash: string,
        data?: string,
        phoneNumber?: string,
        email?: string,
        files?: PassportFile[],
        frontSide?: PassportFile,
        reverseSide?: PassportFile,
        selfie?: PassportFile,
        translation?: PassportFile[]
    ) {
        this.type = type;
        this.hash = hash;
        this.data = data;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.files = files;
        this.frontSide = frontSide;
        this.reverseSide = reverseSide;
        this.selfie = selfie;
        this.translation = translation;
    }
}

export default EncryptedPassportElement;