import User from "./user";

// https://core.telegram.org/bots/api#pollanswer
class PollAnswer {
    pollId: string;
    user: User;
    optionIds: number[]; // empty if the user retracted their vote
}

export default PollAnswer;