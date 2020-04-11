// https://core.telegram.org/bots/api#polloption
class PollOption {
    text: string;
    voterCount: number;

    constructor(
        text: string,
        voterCount: number
    ) {
        this.text = text;
        this.voterCount = voterCount;
    }
}

export default PollOption;