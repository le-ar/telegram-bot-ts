// https://core.telegram.org/bots/api#chatpermissions
class ChatPermissions {
    canSendMessages?: boolean;
    canSendMediaMessages?: boolean;
    canSendPolls?: boolean;
    canSendOtherMessages?: boolean;
    canAddWebPagePreviews?: boolean;
    canChangeInfo?: boolean;
    canInviteUsers?: boolean;
    canPinMessages?: boolean;

    constructor(
        canSendMessages?: boolean,
        canSendMediaMessages?: boolean,
        canSendPolls?: boolean,
        canSendOtherMessages?: boolean,
        canAddWebPagePreviews?: boolean,
        canChangeInfo?: boolean,
        canInviteUsers?: boolean,
        canPinMessages?: boolean
    ) {
        this.canSendMessages = canSendMessages;
        this.canSendMediaMessages = canSendMediaMessages;
        this.canSendPolls = canSendPolls;
        this.canSendOtherMessages = canSendOtherMessages;
        this.canAddWebPagePreviews = canAddWebPagePreviews;
        this.canChangeInfo = canChangeInfo;
        this.canInviteUsers = canInviteUsers;
        this.canPinMessages = canPinMessages;
    }
}

export default ChatPermissions;