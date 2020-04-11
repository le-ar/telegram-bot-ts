import Message from "./message";
import InlineQuery from "./inline_query";
import ChosenInlineResult from "./chosen_inline_result";
import CallbackQuery from "./callback_query";
import ShippingQuery from "./shipping_query";
import PreCheckoutQuery from "./pre_checkout_query";
import Poll from "./poll";
import PollAnswer from "./poll_answer";

// https://core.telegram.org/bots/api#update
class Update {
    updateId: number;
    message?: Message;
    editedMessage?: Message;
    channelPost?: Message;
    editedChannelPost?: Message;
    inlineQuery?: InlineQuery;
    chosenInlineResult?: ChosenInlineResult;
    callbackQuery?: CallbackQuery;
    shippingQuery?: ShippingQuery;
    preCheckoutQuery?: PreCheckoutQuery;
    poll?: Poll;
    pollAnswer?: PollAnswer;

    constructor(
        updateId: number,
        message?: Message,
        editedMessage?: Message,
        channelPost?: Message,
        editedChannelPost?: Message,
        inlineQuery?: InlineQuery,
        chosenInlineResult?: ChosenInlineResult,
        callbackQuery?: CallbackQuery,
        shippingQuery?: ShippingQuery,
        preCheckoutQuery?: PreCheckoutQuery,
        poll?: Poll,
        pollAnswer?: PollAnswer
    ) {
        this.updateId = updateId;
        this.message = message ?? null;
        this.editedMessage = editedMessage ?? null;
        this.channelPost = channelPost ?? null;
        this.editedChannelPost = editedChannelPost ?? null;
        this.inlineQuery = inlineQuery ?? null;
        this.chosenInlineResult = chosenInlineResult ?? null;
        this.callbackQuery = callbackQuery ?? null;
        this.shippingQuery = shippingQuery ?? null;
        this.preCheckoutQuery = preCheckoutQuery ?? null;
        this.poll = poll ?? null;
        this.pollAnswer = pollAnswer ?? null;
    }
}

export default Update;