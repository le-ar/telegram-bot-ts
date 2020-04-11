// https://core.telegram.org/bots/api#passportfile
class PassportFile {
    fileId: string;
    fileUniqueId: string;
    fileSize: number;
    fileDate: number;

    constructor(
        fileId: string,
        fileUniqueId: string,
        fileSize: number,
        fileDate: number
    ) {
        this.fileId = fileId;
        this.fileUniqueId = fileUniqueId;
        this.fileSize = fileSize;
        this.fileDate = fileDate;
    }
}

export default PassportFile;