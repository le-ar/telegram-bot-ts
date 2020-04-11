import ForceReply from "../../domain/entities/force_reply";
import Serializable from "../../../../core/serializable";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

//https://core.telegram.org/bots/api#forcereply
class ForceReplyModel extends ForceReply implements Serializable {
    static fromJson(json: any): ForceReplyModel | Failure {
        if (this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new ForceReplyModel(
            json.selective ?? null
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('force_reply')
        );
    }

    toJsonString(): string {
        let json = { force_reply: this.forceReply };
        if (typeof this.selective === 'boolean') {
            json['selective'] = this.selective;
        }

        return JSON.stringify(json);
    }

    toJsonObject(): { [key: string]: any; } {
        let json = { force_reply: this.forceReply };
        if (typeof this.selective === 'boolean') {
            json['selective'] = this.selective;
        }

        return json;
    }
}

export default ForceReplyModel;