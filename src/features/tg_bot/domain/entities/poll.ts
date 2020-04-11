import PollOption from "./poll_option";

// https://core.telegram.org/bots/api#poll
class Poll {
    id: string;
    question: string;
    options: PollOption[];
    totalVoterCount: number;
    isClosed: boolean;
    isAnonymous: boolean;
    type: string; // Poll type, currently can be “regular” or “quiz”
    allowsMultipleAnswers: boolean;
    correctOptionId?: number;

    constructor(
        id: string,
        question: string,
        options: PollOption[],
        totalVoterCount: number,
        isClosed: boolean,
        isAnonymous: boolean,
        type: string,
        allowsMultipleAnswers: boolean,
        correctOptionId?: number
    ) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.totalVoterCount = totalVoterCount;
        this.isClosed = isClosed;
        this.isAnonymous = isAnonymous;
        this.type = type;
        this.allowsMultipleAnswers = allowsMultipleAnswers;
        this.correctOptionId = correctOptionId;
    }
}

export default Poll;    