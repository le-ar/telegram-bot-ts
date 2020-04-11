import Update from "../../domain/entities/update";
import { FailureWrongStructure, Failure } from "../../../../core/failures";
import MessageModel from "./message_model";
import InlineQueryModel from "./inline_query_model";
import ChosenInlineResultModel from "./chosen_inline_result_model";
import CallbackQueryModel from "./callback_query_model";

class UpdateModel extends Update {
    static fromJson(json: any): UpdateModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let message = json.message ? MessageModel.fromJson(json.message) : null;
        if (!(message instanceof MessageModel)) {
            message = null;
        }

        let editedMessage = json.edited_message ? MessageModel.fromJson(json.edited_message) : null;
        if (!(editedMessage instanceof MessageModel)) {
            editedMessage = null;
        }

        let channelPost = json.channel_post ? MessageModel.fromJson(json.channel_post) : null;
        if (!(channelPost instanceof MessageModel)) {
            channelPost = null;
        }

        let editedChannelPost = json.edited_channel_post ? MessageModel.fromJson(json.edited_channel_post) : null;
        if (!(editedChannelPost instanceof MessageModel)) {
            editedChannelPost = null;
        }

        let inlineQuery = json.inline_query ? InlineQueryModel.fromJson(json.inline_query) : null;
        if (!(inlineQuery instanceof InlineQueryModel)) {
            inlineQuery = null;
        }

        let chosenInlineResult = json.chosen_inline_result ? ChosenInlineResultModel.fromJson(json.chosen_inline_result) : null;
        if (!(chosenInlineResult instanceof ChosenInlineResultModel)) {
            chosenInlineResult = null;
        }

        let callbackQuery = json.callback_query ? CallbackQueryModel.fromJson(json.callback_query) : null;
        if (!(callbackQuery instanceof CallbackQueryModel)) {
            callbackQuery = null;
        }

        if (!(message instanceof Failure) &&
            !(editedMessage instanceof Failure) &&
            !(channelPost instanceof Failure) &&
            !(editedChannelPost instanceof Failure) &&
            !(inlineQuery instanceof Failure) &&
            !(chosenInlineResult instanceof Failure) &&
            !(callbackQuery instanceof Failure))
            return new UpdateModel(
                json.update_id,
                message,
                editedMessage,
                channelPost,
                editedChannelPost,
                inlineQuery,
                chosenInlineResult,
                callbackQuery,
                null,
                null,
                null,
                null
            );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('update_id')
        );
    }
}

export default UpdateModel;