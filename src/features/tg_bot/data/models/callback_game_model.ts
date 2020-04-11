import CallbackGame from "../../domain/entities/callback_game";
import { Failure } from "../../../../core/failures";
import Serializable from "../../../../core/serializable";

// https://core.telegram.org/bots/api#callbackgame
class CallbackGameModel extends CallbackGame implements Serializable {
    static fromJson(json: any): CallbackGameModel | Failure {
        return new CallbackGameModel();
    }

    toJsonString(): string {
        return '{}';
    }
    
    toJsonObject(): { [key: string]: any; } {
        return {};
    }
}

export default CallbackGameModel;