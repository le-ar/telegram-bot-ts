import ChatPhoto from "./chat_photo";
import ChatPermissions from "./chat_permissions";
import Message from "./message";

// https://core.telegram.org/bots/api#chat
class Chat {
    id: number;
    type: string; //Type of chat, can be either “private”, “group”, “supergroup” or “channel”
    title: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    photo?: ChatPhoto;
    description?: string;
    inviteLink?: string;
    pinnedMessage?: Message;
    permissions?: ChatPermissions;
    slowModeDelay?: number;
    stickerSetName?: string;
    canSetStickerSet?: boolean;

    constructor(
        id: number,
        type: string,
        title: string,
        username?: string,
        firstName?: string,
        lastName?: string,
        photo?: ChatPhoto,
        description?: string,
        inviteLink?: string,
        pinnedMessage?: Message,
        permissions?: ChatPermissions,
        slowModeDelay?: number,
        stickerSetName?: string,
        canSetStickerSet?: boolean
    ) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.description = description;
        this.inviteLink = inviteLink;
        this.pinnedMessage = pinnedMessage;
        this.permissions = permissions;
        this.slowModeDelay = slowModeDelay;
        this.stickerSetName = stickerSetName;
        this.canSetStickerSet = canSetStickerSet;
    }
}

export default Chat;