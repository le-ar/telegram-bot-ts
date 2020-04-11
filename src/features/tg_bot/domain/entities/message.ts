import User from "./user";
import Chat from "./chat";
import MessageEntity from "./message_entity";
import Audio from "./audio";
import Document from "./document";
import Animation from "./animation";
import Game from "./game";
import PhotoSize from "./photo_size";
import Sticker from "./sticker";
import Video from "./video";
import Voice from "./voice";
import VideoNote from "./video_note";
import Contact from "./Contact";
import Location from "./Location";
import Venue from "./venue";
import Poll from "./poll";
import Dice from "./dice";
import Invoice from "./invoice";
import SuccessfulPayment from "./successful_payment";
import PassportData from "./passport_data";
import InlineKeyboardMarkup from "./inline_keyboard_markup";

// https://core.telegram.org/bots/api#message
class Message {
    messageId: number;
    from?: User;
    date: number;
    chat: Chat;
    forwardFrom?: User;
    forwardFromChat?: Chat;
    forwardFromMessageId?: number;
    forwardSignature?: string;
    forwardSenderName?: string;
    forwardDate?: number;
    replyToMessage?: Message;
    editDate?: number;
    mediaGroupId?: string;
    authorSignature?: string;
    text?: string;
    entities?: MessageEntity[];
    captionEntities?: MessageEntity[];
    audio?: Audio;
    document?: Document;
    animation?: Animation;
    game?: Game;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    voice?: Voice;
    videoNote?: VideoNote;
    caption?: string;
    contact?: Contact;
    location?: Location;
    venue?: Venue;
    poll?: Poll;
    dice?: Dice;
    newChatMembers?: User[];
    leftChatMember?: User;
    newChatTitle?: string;
    newChatPhoto?: PhotoSize[];
    deleteChatPhoto?: boolean;
    groupChatCreated?: boolean;
    supergroupChatCreated?: boolean;
    channelChatCreated?: boolean;
    migrateToChatId?: number;
    migrateFromChatId?: number;
    pinnedMessage?: Message;
    invoice?: Invoice;
    successfulPayment?: SuccessfulPayment;
    connectedWebsite?: string;
    passportData?: PassportData;
    replyMarkup?: InlineKeyboardMarkup;

    constructor(
        messageId: number,
        date: number,
        chat: Chat,
        from?: User,
        forwardFrom?: User,
        forwardFromChat?: Chat,
        forwardFromMessageId?: number,
        forwardSignature?: string,
        forwardSenderName?: string,
        forwardDate?: number,
        replyToMessage?: Message,
        editDate?: number,
        mediaGroupId?: string,
        authorSignature?: string,
        text?: string,
        entities?: MessageEntity[],
        captionEntities?: MessageEntity[],
        audio?: Audio,
        document?: Document,
        animation?: Animation,
        game?: Game,
        photo?: PhotoSize[],
        sticker?: Sticker,
        video?: Video,
        voice?: Voice,
        videoNote?: VideoNote,
        caption?: string,
        contact?: Contact,
        location?: Location,
        venue?: Venue,
        poll?: Poll,
        dice?: Dice,
        newChatMembers?: User[],
        leftChatMember?: User,
        newChatTitle?: string,
        newChatPhoto?: PhotoSize[],
        deleteChatPhoto?: boolean,
        groupChatCreated?: boolean,
        supergroupChatCreated?: boolean,
        channelChatCreated?: boolean,
        migrateToChatId?: number,
        migrateFromChatId?: number,
        pinnedMessage?: Message,
        invoice?: Invoice,
        successfulPayment?: SuccessfulPayment,
        connectedWebsite?: string,
        passportData?: PassportData,
        replyMarkup?: InlineKeyboardMarkup
    ) {
        this.messageId = messageId;
        this.date = date;
        this.chat = chat;
        this.from = from ?? null;
        this.forwardFrom = forwardFrom ?? null;
        this.forwardFromChat = forwardFromChat ?? null;
        this.forwardFromMessageId = forwardFromMessageId ?? null;
        this.forwardSignature = forwardSignature ?? null; this.forwardSenderName = forwardSenderName ?? null;
        this.forwardDate = forwardDate ?? null;
        this.replyToMessage = replyToMessage ?? null;
        this.editDate = editDate ?? null;
        this.mediaGroupId = mediaGroupId ?? null;
        this.authorSignature = authorSignature ?? null;
        this.text = text ?? null;
        this.entities = entities ?? null;
        this.captionEntities = captionEntities ?? null;
        this.audio = audio ?? null;
        this.document = document ?? null;
        this.animation = animation ?? null;
        this.game = game ?? null;
        this.photo = photo ?? null;
        this.sticker = sticker ?? null;
        this.video = video ?? null;
        this.voice = voice ?? null;
        this.videoNote = videoNote ?? null;
        this.caption = caption ?? null;
        this.contact = contact ?? null;
        this.location = location ?? null;
        this.venue = venue ?? null;
        this.poll = poll ?? null;
        this.dice = dice ?? null;
        this.newChatMembers = newChatMembers ?? null;
        this.leftChatMember = leftChatMember ?? null;
        this.newChatTitle = newChatTitle ?? null;
        this.newChatPhoto = newChatPhoto ?? null;
        this.deleteChatPhoto = deleteChatPhoto ?? null;
        this.groupChatCreated = groupChatCreated ?? null;
        this.supergroupChatCreated = supergroupChatCreated ?? null;
        this.channelChatCreated = channelChatCreated ?? null;
        this.migrateToChatId = migrateToChatId ?? null;
        this.migrateFromChatId = migrateFromChatId ?? null;
        this.pinnedMessage = pinnedMessage ?? null;
        this.invoice = invoice ?? null;
        this.successfulPayment = successfulPayment ?? null;
        this.connectedWebsite = connectedWebsite ?? null;
        this.passportData = passportData ?? null;
        this.replyMarkup = replyMarkup ?? null;
    }
}

export default Message;