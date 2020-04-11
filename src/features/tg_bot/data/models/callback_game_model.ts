import CallbackGame from "../../domain/entities/callback_game";
import { Failure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#callbackgame
class CallbackGameModel extends CallbackGame {
    static fromJson(json: any): CallbackGameModel | Failure {
        return new CallbackGameModel();
    }
}

export default CallbackGameModel;