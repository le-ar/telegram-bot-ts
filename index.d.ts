declare module 'src/features/tg_bot/domain/entities/user' {
	 class User {
	    id: number;
	    isBot: boolean;
	    firstName: string;
	    lastName?: string;
	    username?: string;
	    languageCode?: string;
	    canJoinGroups?: boolean;
	    canReadAllGroupMessages?: boolean;
	    supportsInlineQueries?: boolean;
	    constructor(id: number, isBot: boolean, firstName: string, lastName?: string, username?: string, languageCode?: string, canJoinGroups?: boolean, canReadAllGroupMessages?: boolean, supportsInlineQueries?: boolean);
	}
	export default User;

}
declare module 'src/features/tg_bot/domain/entities/chat_photo' {
	 class ChatPhoto {
	    smallFileId: string;
	    smallFileUniqueId: string;
	    bigFileId: string;
	    bigFileUniqueId: string;
	    constructor(smallFileId: string, smallFileUniqueId: string, bigFileId: string, bigFileUniqueId: string);
	}
	export default ChatPhoto;

}
declare module 'src/features/tg_bot/domain/entities/chat_permissions' {
	 class ChatPermissions {
	    canSendMessages?: boolean;
	    canSendMediaMessages?: boolean;
	    canSendPolls?: boolean;
	    canSendOtherMessages?: boolean;
	    canAddWebPagePreviews?: boolean;
	    canChangeInfo?: boolean;
	    canInviteUsers?: boolean;
	    canPinMessages?: boolean;
	    constructor(canSendMessages?: boolean, canSendMediaMessages?: boolean, canSendPolls?: boolean, canSendOtherMessages?: boolean, canAddWebPagePreviews?: boolean, canChangeInfo?: boolean, canInviteUsers?: boolean, canPinMessages?: boolean);
	}
	export default ChatPermissions;

}
declare module 'src/features/tg_bot/domain/entities/chat' {
	import ChatPhoto from 'src/features/tg_bot/domain/entities/chat_photo';
	import ChatPermissions from 'src/features/tg_bot/domain/entities/chat_permissions';
	import Message from 'src/features/tg_bot/domain/entities/message'; class Chat {
	    id: number;
	    type: string;
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
	    constructor(id: number, type: string, title: string, username?: string, firstName?: string, lastName?: string, photo?: ChatPhoto, description?: string, inviteLink?: string, pinnedMessage?: Message, permissions?: ChatPermissions, slowModeDelay?: number, stickerSetName?: string, canSetStickerSet?: boolean);
	}
	export default Chat;

}
declare module 'src/features/tg_bot/domain/entities/message_entity' {
	import User from 'src/features/tg_bot/domain/entities/user'; class MessageEntity {
	    type: string;
	    offset: number;
	    length: number;
	    url?: string;
	    user?: User;
	    language?: string;
	    constructor(type: string, offset: number, length: number, url?: string, user?: User, language?: string);
	}
	export default MessageEntity;

}
declare module 'src/features/tg_bot/domain/entities/photo_size' {
	 class PhotoSize {
	    fileId: string;
	    fileUniqueId: string;
	    width: number;
	    height: number;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, width: number, height: number, fileSize?: number);
	}
	export default PhotoSize;

}
declare module 'src/features/tg_bot/domain/entities/audio' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size'; class Audio {
	    fileId: string;
	    fileUniqueId: string;
	    duration: number;
	    performer?: string;
	    title?: string;
	    mimeType?: string;
	    fileSize?: number;
	    thumb?: PhotoSize;
	    constructor(fileId: string, fileUniqueId: string, duration: number, performer?: string, title?: string, mimeType?: string, fileSize?: number, thumb?: PhotoSize);
	}
	export default Audio;

}
declare module 'src/features/tg_bot/domain/entities/document' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size'; class Document {
	    fileId: string;
	    fileUniqueId: string;
	    thumb?: PhotoSize;
	    fileName?: string;
	    mimeType?: string;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, thumb?: PhotoSize, fileName?: string, mimeType?: string, fileSize?: number);
	}
	export default Document;

}
declare module 'src/features/tg_bot/domain/entities/animation' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size'; class Animation {
	    fileId: string;
	    fileUniqueId: string;
	    width: number;
	    height: number;
	    duration: number;
	    thumb?: PhotoSize;
	    fileName?: string;
	    mimeType?: string;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, width: number, height: number, duration: number, thumb?: PhotoSize, fileName?: string, mimeType?: string, fileSize?: number);
	}
	export default Animation;

}
declare module 'src/features/tg_bot/domain/entities/game' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size';
	import MessageEntity from 'src/features/tg_bot/domain/entities/message_entity';
	import Animation from 'src/features/tg_bot/domain/entities/animation'; class Game {
	    title: string;
	    description: string;
	    photo: PhotoSize[];
	    text?: string;
	    textEntities?: MessageEntity[];
	    animation?: Animation;
	    constructor(title: string, description: string, photo: PhotoSize[], text?: string, textEntities?: MessageEntity[], animation?: Animation);
	}
	export default Game;

}
declare module 'src/features/tg_bot/domain/entities/mask_position' {
	 class MaskPosition {
	    point: string;
	    xShift: number;
	    yShift: number;
	    scale: number;
	    constructor(point: string, xShift: number, yShift: number, scale: number);
	}
	export default MaskPosition;

}
declare module 'src/features/tg_bot/domain/entities/sticker' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size';
	import MaskPosition from 'src/features/tg_bot/domain/entities/mask_position'; class Sticker {
	    fileId: string;
	    fileUniqueId: string;
	    width: number;
	    height: number;
	    isAnimated: boolean;
	    thumb?: PhotoSize;
	    emoji?: string;
	    setName?: string;
	    maskPosition?: MaskPosition;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, width: number, height: number, isAnimated: boolean, thumb?: PhotoSize, emoji?: string, setName?: string, maskPosition?: MaskPosition, fileSize?: number);
	}
	export default Sticker;

}
declare module 'src/features/tg_bot/domain/entities/video' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size'; class Video {
	    fileId: string;
	    fileUniqueId: string;
	    width: number;
	    height: number;
	    duration: number;
	    thumb?: PhotoSize;
	    mimeType?: string;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, width: number, height: number, duration: number, thumb?: PhotoSize, mimeType?: string, fileSize?: number);
	}
	export default Video;

}
declare module 'src/features/tg_bot/domain/entities/voice' {
	 class Voice {
	    fileId: string;
	    fileUniqueId: string;
	    duration: number;
	    mimeType?: string;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, duration: number, mimeType?: string, fileSize?: number);
	}
	export default Voice;

}
declare module 'src/features/tg_bot/domain/entities/video_note' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size'; class VideoNote {
	    fileId: string;
	    fileUniqueId: string;
	    length: number;
	    duration: number;
	    thumb?: PhotoSize;
	    fileSize?: number;
	    constructor(fileId: string, fileUniqueId: string, length: number, duration: number, thumb?: PhotoSize, fileSize?: number);
	}
	export default VideoNote;

}
declare module 'src/features/tg_bot/domain/entities/Contact' {
	 class Contact {
	    phoneNumber: string;
	    firstName: string;
	    lastName?: string;
	    userId?: number;
	    vcard?: string;
	    constructor(phoneNumber: string, firstName: string, lastName?: string, userId?: number, vcard?: string);
	}
	export default Contact;

}
declare module 'src/features/tg_bot/domain/entities/Location' {
	 class Location {
	    longitude: number;
	    latitude: number;
	    constructor(longitude: number, latitude: number);
	}
	export default Location;

}
declare module 'src/features/tg_bot/domain/entities/venue' {
	import Location from 'src/features/tg_bot/domain/entities/Location'; class Venue {
	    location: Location;
	    title: string;
	    address: string;
	    foursquareId?: string;
	    foursquareType?: string;
	    constructor(location: Location, title: string, address: string, foursquareId?: string, foursquareType?: string);
	}
	export default Venue;

}
declare module 'src/features/tg_bot/domain/entities/poll_option' {
	 class PollOption {
	    text: string;
	    voterCount: number;
	    constructor(text: string, voterCount: number);
	}
	export default PollOption;

}
declare module 'src/features/tg_bot/domain/entities/poll' {
	import PollOption from 'src/features/tg_bot/domain/entities/poll_option'; class Poll {
	    id: string;
	    question: string;
	    options: PollOption[];
	    totalVoterCount: number;
	    isClosed: boolean;
	    isAnonymous: boolean;
	    type: string;
	    allowsMultipleAnswers: boolean;
	    correctOptionId?: number;
	    constructor(id: string, question: string, options: PollOption[], totalVoterCount: number, isClosed: boolean, isAnonymous: boolean, type: string, allowsMultipleAnswers: boolean, correctOptionId?: number);
	}
	export default Poll;

}
declare module 'src/features/tg_bot/domain/entities/dice' {
	 class Dice {
	    value: number;
	    constructor(value: number);
	}
	export default Dice;

}
declare module 'src/features/tg_bot/domain/entities/invoice' {
	 class Invoice {
	    title: string;
	    description: string;
	    startParameter: string;
	    currency: string;
	    totalAmount: number;
	    constructor(title: string, description: string, startParameter: string, currency: string, totalAmount: number);
	}
	export default Invoice;

}
declare module 'src/features/tg_bot/domain/entities/shipping_address' {
	 class ShippingAddress {
	    countryCode: string;
	    state: string;
	    city: string;
	    streetLine1: string;
	    streetLine2: string;
	    postCode: string;
	    constructor(countryCode: string, state: string, city: string, streetLine1: string, streetLine2: string, postCode: string);
	}
	export default ShippingAddress;

}
declare module 'src/features/tg_bot/domain/entities/order_info' {
	import ShippingAddress from 'src/features/tg_bot/domain/entities/shipping_address'; class OrderInfo {
	    name?: string;
	    phoneNumber?: string;
	    email?: string;
	    shippingAddress?: ShippingAddress;
	    constructor(name?: string, phoneNumber?: string, email?: string, shippingAddress?: ShippingAddress);
	}
	export default OrderInfo;

}
declare module 'src/features/tg_bot/domain/entities/successful_payment' {
	import OrderInfo from 'src/features/tg_bot/domain/entities/order_info'; class SuccessfulPayment {
	    currency: string;
	    totalAmount: number;
	    invoicePayload: string;
	    shippingOptionId?: string;
	    orderInfo?: OrderInfo;
	    telegramPaymentChargeId: string;
	    providerPaymentChargeId: string;
	    constructor(currency: string, totalAmount: number, invoicePayload: string, telegramPaymentChargeId: string, providerPaymentChargeId: string, shippingOptionId?: string, orderInfo?: OrderInfo);
	}
	export default SuccessfulPayment;

}
declare module 'src/features/tg_bot/domain/entities/passport_file' {
	 class PassportFile {
	    fileId: string;
	    fileUniqueId: string;
	    fileSize: number;
	    fileDate: number;
	    constructor(fileId: string, fileUniqueId: string, fileSize: number, fileDate: number);
	}
	export default PassportFile;

}
declare module 'src/features/tg_bot/domain/entities/encrypted_passport_element' {
	import PassportFile from 'src/features/tg_bot/domain/entities/passport_file'; class EncryptedPassportElement {
	    type: string;
	    data?: string;
	    phoneNumber?: string;
	    email?: string;
	    files?: PassportFile[];
	    frontSide?: PassportFile;
	    reverseSide?: PassportFile;
	    selfie?: PassportFile;
	    translation?: PassportFile[];
	    hash: string;
	    constructor(type: string, hash: string, data?: string, phoneNumber?: string, email?: string, files?: PassportFile[], frontSide?: PassportFile, reverseSide?: PassportFile, selfie?: PassportFile, translation?: PassportFile[]);
	}
	export default EncryptedPassportElement;

}
declare module 'src/features/tg_bot/domain/entities/encrypted_credentials' {
	 class EncryptedCredentials {
	    data: string;
	    hash: string;
	    secret: string;
	    constructor(data: string, hash: string, secret: string);
	}
	export default EncryptedCredentials;

}
declare module 'src/features/tg_bot/domain/entities/passport_data' {
	import EncryptedPassportElement from 'src/features/tg_bot/domain/entities/encrypted_passport_element';
	import EncryptedCredentials from 'src/features/tg_bot/domain/entities/encrypted_credentials'; class PassportData {
	    data: EncryptedPassportElement[];
	    credentials: EncryptedCredentials;
	    constructor(data: EncryptedPassportElement[], credentials: EncryptedCredentials);
	}
	export default PassportData;

}
declare module 'src/features/tg_bot/domain/entities/login_url' {
	 class LoginUrl {
	    url: string;
	    forwardText?: string;
	    botUsername?: string;
	    requestWriteAccess?: boolean;
	    constructor(url: string, forwardText?: string, botUsername?: string, requestWriteAccess?: boolean);
	}
	export default LoginUrl;

}
declare module 'src/features/tg_bot/domain/entities/callback_game' {
	 class CallbackGame {
	}
	export default CallbackGame;

}
declare module 'src/features/tg_bot/domain/entities/inline_keyboard_button' {
	import LoginUrl from 'src/features/tg_bot/domain/entities/login_url';
	import CallbackGame from 'src/features/tg_bot/domain/entities/callback_game'; class InlineKeyboardButton {
	    text: string;
	    url?: string;
	    loginUrl?: LoginUrl;
	    callbackData?: string;
	    switchInlineQuery?: string;
	    switchInlineQueryCurrentChat?: string;
	    callbackGame?: CallbackGame;
	    pay?: boolean;
	    constructor(props: {
	        text: string;
	        url?: string;
	        loginUrl?: LoginUrl;
	        callbackData?: string;
	        switchInlineQuery?: string;
	        switchInlineQueryCurrentChat?: string;
	        callbackGame?: CallbackGame;
	        pay?: boolean;
	    });
	}
	export default InlineKeyboardButton;

}
declare module 'src/features/tg_bot/domain/entities/inline_keyboard_markup' {
	import InlineKeyboardButton from 'src/features/tg_bot/domain/entities/inline_keyboard_button'; class InlineKeyboardMarkup {
	    inlineKeyboard: InlineKeyboardButton[][];
	    constructor(props: {
	        inlineKeyboard: InlineKeyboardButton[][];
	    });
	}
	export default InlineKeyboardMarkup;

}
declare module 'src/features/tg_bot/domain/entities/message' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import Chat from 'src/features/tg_bot/domain/entities/chat';
	import MessageEntity from 'src/features/tg_bot/domain/entities/message_entity';
	import Audio from 'src/features/tg_bot/domain/entities/audio';
	import Document from 'src/features/tg_bot/domain/entities/document';
	import Animation from 'src/features/tg_bot/domain/entities/animation';
	import Game from 'src/features/tg_bot/domain/entities/game';
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size';
	import Sticker from 'src/features/tg_bot/domain/entities/sticker';
	import Video from 'src/features/tg_bot/domain/entities/video';
	import Voice from 'src/features/tg_bot/domain/entities/voice';
	import VideoNote from 'src/features/tg_bot/domain/entities/video_note';
	import Contact from 'src/features/tg_bot/domain/entities/Contact';
	import Location from 'src/features/tg_bot/domain/entities/Location';
	import Venue from 'src/features/tg_bot/domain/entities/venue';
	import Poll from 'src/features/tg_bot/domain/entities/poll';
	import Dice from 'src/features/tg_bot/domain/entities/dice';
	import Invoice from 'src/features/tg_bot/domain/entities/invoice';
	import SuccessfulPayment from 'src/features/tg_bot/domain/entities/successful_payment';
	import PassportData from 'src/features/tg_bot/domain/entities/passport_data';
	import InlineKeyboardMarkup from 'src/features/tg_bot/domain/entities/inline_keyboard_markup'; class Message {
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
	    constructor(messageId: number, date: number, chat: Chat, from?: User, forwardFrom?: User, forwardFromChat?: Chat, forwardFromMessageId?: number, forwardSignature?: string, forwardSenderName?: string, forwardDate?: number, replyToMessage?: Message, editDate?: number, mediaGroupId?: string, authorSignature?: string, text?: string, entities?: MessageEntity[], captionEntities?: MessageEntity[], audio?: Audio, document?: Document, animation?: Animation, game?: Game, photo?: PhotoSize[], sticker?: Sticker, video?: Video, voice?: Voice, videoNote?: VideoNote, caption?: string, contact?: Contact, location?: Location, venue?: Venue, poll?: Poll, dice?: Dice, newChatMembers?: User[], leftChatMember?: User, newChatTitle?: string, newChatPhoto?: PhotoSize[], deleteChatPhoto?: boolean, groupChatCreated?: boolean, supergroupChatCreated?: boolean, channelChatCreated?: boolean, migrateToChatId?: number, migrateFromChatId?: number, pinnedMessage?: Message, invoice?: Invoice, successfulPayment?: SuccessfulPayment, connectedWebsite?: string, passportData?: PassportData, replyMarkup?: InlineKeyboardMarkup);
	}
	export default Message;

}
declare module 'src/features/tg_bot/domain/entities/inline_query' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import Location from 'src/features/tg_bot/domain/entities/Location'; class InlineQuery {
	    id: string;
	    from: User;
	    location: Location;
	    query: string;
	    offset: string;
	    constructor(id: string, from: User, query: string, offset: string, location?: Location);
	}
	export default InlineQuery;

}
declare module 'src/features/tg_bot/domain/entities/chosen_inline_result' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import Location from 'src/features/tg_bot/domain/entities/Location'; class ChosenInlineResult {
	    resultId: string;
	    from: User;
	    location?: Location;
	    inlineMessageId?: string;
	    query: string;
	    constructor(resultId: string, from: User, query: string, location?: Location, inlineMessageId?: string);
	}
	export default ChosenInlineResult;

}
declare module 'src/features/tg_bot/domain/entities/callback_query' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import Message from 'src/features/tg_bot/domain/entities/message'; class CallbackQuery {
	    id: string;
	    from: User;
	    message?: Message;
	    inlineMessageId?: string;
	    chatInstance: string;
	    data?: string;
	    gameShortName?: string;
	    constructor(id: string, from: User, chatInstance: string, message?: Message, inlineMessageId?: string, data?: string, gameShortName?: string);
	}
	export default CallbackQuery;

}
declare module 'src/features/tg_bot/domain/entities/shipping_query' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import ShippingAddress from 'src/features/tg_bot/domain/entities/shipping_address'; class ShippingQuery {
	    id: string;
	    from: User;
	    invoicePayload: string;
	    shippingAddress: ShippingAddress;
	}
	export default ShippingQuery;

}
declare module 'src/features/tg_bot/domain/entities/pre_checkout_query' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import OrderInfo from 'src/features/tg_bot/domain/entities/order_info'; class PreCheckoutQuery {
	    id: string;
	    from: User;
	    currency: string;
	    totalAmount: number;
	    invoicePayload: string;
	    shippingOptionId?: string;
	    orderInfo?: OrderInfo;
	}
	export default PreCheckoutQuery;

}
declare module 'src/features/tg_bot/domain/entities/poll_answer' {
	import User from 'src/features/tg_bot/domain/entities/user'; class PollAnswer {
	    pollId: string;
	    user: User;
	    optionIds: number[];
	}
	export default PollAnswer;

}
declare module 'src/features/tg_bot/domain/entities/update' {
	import Message from 'src/features/tg_bot/domain/entities/message';
	import InlineQuery from 'src/features/tg_bot/domain/entities/inline_query';
	import ChosenInlineResult from 'src/features/tg_bot/domain/entities/chosen_inline_result';
	import CallbackQuery from 'src/features/tg_bot/domain/entities/callback_query';
	import ShippingQuery from 'src/features/tg_bot/domain/entities/shipping_query';
	import PreCheckoutQuery from 'src/features/tg_bot/domain/entities/pre_checkout_query';
	import Poll from 'src/features/tg_bot/domain/entities/poll';
	import PollAnswer from 'src/features/tg_bot/domain/entities/poll_answer'; class Update {
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
	    constructor(updateId: number, message?: Message, editedMessage?: Message, channelPost?: Message, editedChannelPost?: Message, inlineQuery?: InlineQuery, chosenInlineResult?: ChosenInlineResult, callbackQuery?: CallbackQuery, shippingQuery?: ShippingQuery, preCheckoutQuery?: PreCheckoutQuery, poll?: Poll, pollAnswer?: PollAnswer);
	}
	export default Update;

}
declare module 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_subscriber' {
	import Update from 'src/features/tg_bot/domain/entities/update'; abstract class TelegramSubscriber {
	    abstract update(update: Update): void;
	}
	export default TelegramSubscriber;

}
declare module 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_text_subscriber' {
	import Update from 'src/features/tg_bot/domain/entities/update';
	import TelegramSubscriber from 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_subscriber';
	import Message from 'src/features/tg_bot/domain/entities/message'; class TelegramTextSubscriber implements TelegramSubscriber {
	    callback: (message: Message) => void;
	    constructor(callback: (message: Message) => void);
	    update(update: Update): void;
	}
	export default TelegramTextSubscriber;

}
declare module 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_callback_subscriber' {
	import Update from 'src/features/tg_bot/domain/entities/update';
	import TelegramSubscriber from 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_subscriber';
	import CallbackQuery from 'src/features/tg_bot/domain/entities/callback_query'; class TelegramCallbackSubscriber implements TelegramSubscriber {
	    callback: (callback: CallbackQuery) => void;
	    constructor(callback: (callback: CallbackQuery) => void);
	    update(update: Update): void;
	}
	export default TelegramCallbackSubscriber;

}
declare module 'src/features/tg_bot/presentation/pubsub/publishers/telegram_publisher' {
	import TelegramSubscriber from 'src/features/tg_bot/presentation/pubsub/subscribers/telegram_subscriber';
	import Update from 'src/features/tg_bot/domain/entities/update'; class TelegramPublisher {
	    private subscribers;
	    subscribe(telegramSubscriber: TelegramSubscriber): void;
	    unsubscribe(telegramSubscriber: TelegramSubscriber): void;
	    publish(update: Update): void;
	}
	export default TelegramPublisher;

}
declare module 'src/core/failures' {
	 class Failure {
	    private message;
	    constructor(message?: string);
	    getMessage(): string;
	} class FailureApi extends Failure {
	} class FailureUnauthorized extends Failure {
	} class FailureWrongStructure extends Failure {
	}
	export { Failure, FailureApi, FailureUnauthorized, FailureWrongStructure };

}
declare module 'src/features/tg_bot/data/datasources/telegram_client' {
	import { Failure } from 'src/core/failures';
	interface ApiClient {
	    token: string;
	    execute(command: string, params?: {
	        [key: string]: any;
	    }): Promise<string | Failure>;
	    executeJson(command: string, paramsJson?: string): Promise<string | Failure>;
	} class TelegramApiClient implements ApiClient {
	    token: string;
	    constructor(token: string);
	    executeJson(command: string, paramsJson?: string): Promise<string | Failure>;
	    execute(command: string, params?: {
	        [key: string]: string;
	    }): Promise<string | Failure>;
	    private encodeParams;
	}
	export { ApiClient, TelegramApiClient };

}
declare module 'src/features/tg_bot/data/models/user_model' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import { FailureWrongStructure } from 'src/core/failures'; class UserModel extends User {
	    id: number;
	    isBot: boolean;
	    firstName: string;
	    lastName: string;
	    username: string;
	    languageCode: string;
	    canJoinGroups: boolean;
	    canReadAllGroupMessages: boolean;
	    supportsInlineQueries: boolean;
	    static fromJson(json: any): FailureWrongStructure | UserModel;
	}
	export default UserModel;

}
declare module 'src/features/tg_bot/data/datasources/api_user_remote_datasource' {
	import User from 'src/features/tg_bot/domain/entities/user';
	import { Failure } from 'src/core/failures';
	import { ApiClient } from 'src/features/tg_bot/data/datasources/telegram_client';
	interface ApiUserRemoteDatasource {
	    getMe(): Promise<User | Failure>;
	} class ApiUserRemoteDatasourceImpl implements ApiUserRemoteDatasource {
	    private client;
	    constructor(client: ApiClient);
	    private checkResponse;
	    getMe(): Promise<User | Failure>;
	}
	export { ApiUserRemoteDatasource, ApiUserRemoteDatasourceImpl };

}
declare module 'src/features/tg_bot/data/models/chat_photo_model' {
	import { Failure } from 'src/core/failures';
	import ChatPhoto from 'src/features/tg_bot/domain/entities/chat_photo'; class ChatPhotoModel extends ChatPhoto {
	    static fromJson(json: any): ChatPhotoModel | Failure;
	    private static checkJson;
	}
	export default ChatPhotoModel;

}
declare module 'src/features/tg_bot/data/models/chat_permissions_model' {
	import ChatPermissions from 'src/features/tg_bot/domain/entities/chat_permissions';
	import { Failure } from 'src/core/failures'; class ChatPermissionsModel extends ChatPermissions {
	    static fromJson(json: any): ChatPermissionsModel | Failure;
	    private static checkJson;
	}
	export default ChatPermissionsModel;

}
declare module 'src/features/tg_bot/data/models/chat_model' {
	import Chat from 'src/features/tg_bot/domain/entities/chat';
	import { Failure } from 'src/core/failures'; class ChatModel extends Chat {
	    static fromJson(json: any): ChatModel | Failure;
	    private static checkJson;
	}
	export default ChatModel;

}
declare module 'src/features/tg_bot/data/models/message_entity_model' {
	import MessageEntity from 'src/features/tg_bot/domain/entities/message_entity';
	import { Failure } from 'src/core/failures'; class MessageEntityModel extends MessageEntity {
	    static fromJson(json: any): MessageEntityModel | Failure;
	    private static checkJson;
	}
	export default MessageEntityModel;

}
declare module 'src/features/tg_bot/data/models/photo_size_model' {
	import PhotoSize from 'src/features/tg_bot/domain/entities/photo_size';
	import { Failure } from 'src/core/failures'; class PhotoSizeModel extends PhotoSize {
	    static fromJson(json: any): PhotoSizeModel | Failure;
	    private static checkJson;
	}
	export default PhotoSizeModel;

}
declare module 'src/features/tg_bot/data/models/audio_model' {
	import Audio from 'src/features/tg_bot/domain/entities/audio';
	import { Failure } from 'src/core/failures'; class AudioModel extends Audio {
	    static fromJson(json: any): AudioModel | Failure;
	    private static checkJson;
	}
	export default AudioModel;

}
declare module 'src/features/tg_bot/data/models/document_model' {
	import Document from 'src/features/tg_bot/domain/entities/document';
	import { Failure } from 'src/core/failures'; class DocumentModel extends Document {
	    static fromJson(json: any): DocumentModel | Failure;
	    private static checkJson;
	}
	export default DocumentModel;

}
declare module 'src/features/tg_bot/data/models/animation_model' {
	import { Failure } from 'src/core/failures';
	import Animation from 'src/features/tg_bot/domain/entities/animation'; class AnimationModel extends Animation {
	    static fromJson(json: any): AnimationModel | Failure;
	    private static checkJson;
	}
	export default AnimationModel;

}
declare module 'src/features/tg_bot/data/models/game_model' {
	import Game from 'src/features/tg_bot/domain/entities/game';
	import { Failure } from 'src/core/failures'; class GameModel extends Game {
	    static fromJson(json: any): GameModel | Failure;
	    private static checkJson;
	}
	export default GameModel;

}
declare module 'src/features/tg_bot/data/models/mask_position_model' {
	import MaskPosition from 'src/features/tg_bot/domain/entities/mask_position';
	import { Failure } from 'src/core/failures'; class MaskPositionModel extends MaskPosition {
	    static fromJson(json: any): MaskPositionModel | Failure;
	    private static checkJson;
	}
	export default MaskPositionModel;

}
declare module 'src/features/tg_bot/data/models/sticker_model' {
	import Sticker from 'src/features/tg_bot/domain/entities/sticker';
	import { Failure } from 'src/core/failures'; class StickerModel extends Sticker {
	    static fromJson(json: any): StickerModel | Failure;
	    private static checkJson;
	}
	export default StickerModel;

}
declare module 'src/features/tg_bot/data/models/video_model' {
	import Video from 'src/features/tg_bot/domain/entities/video';
	import { Failure } from 'src/core/failures'; class VideoModel extends Video {
	    static fromJson(json: any): VideoModel | Failure;
	    private static checkJson;
	}
	export default VideoModel;

}
declare module 'src/features/tg_bot/data/models/voice_model' {
	import Voice from 'src/features/tg_bot/domain/entities/voice';
	import { Failure } from 'src/core/failures'; class VoiceModel extends Voice {
	    static fromJson(json: any): VoiceModel | Failure;
	    private static checkJson;
	}
	export default VoiceModel;

}
declare module 'src/features/tg_bot/data/models/video_note_model' {
	import VideoNote from 'src/features/tg_bot/domain/entities/video_note';
	import { Failure } from 'src/core/failures'; class VideoNoteModel extends VideoNote {
	    static fromJson(json: any): VideoNoteModel | Failure;
	    private static checkJson;
	}
	export default VideoNoteModel;

}
declare module 'src/features/tg_bot/data/models/contact_model' {
	import Contact from 'src/features/tg_bot/domain/entities/Contact';
	import { Failure } from 'src/core/failures'; class ContactModel extends Contact {
	    static fromJson(json: any): ContactModel | Failure;
	    private static checkJson;
	}
	export default ContactModel;

}
declare module 'src/features/tg_bot/data/models/location_model' {
	import Location from 'src/features/tg_bot/domain/entities/Location';
	import { Failure } from 'src/core/failures'; class LocationModel extends Location {
	    static fromJson(json: any): LocationModel | Failure;
	    private static checkJson;
	}
	export default LocationModel;

}
declare module 'src/features/tg_bot/data/models/venue_model' {
	import Venue from 'src/features/tg_bot/domain/entities/venue';
	import { Failure } from 'src/core/failures'; class VenueModel extends Venue {
	    static fromJson(json: any): VenueModel | Failure;
	    private static checkJson;
	}
	export default VenueModel;

}
declare module 'src/features/tg_bot/data/models/poll_option_model' {
	import PollOption from 'src/features/tg_bot/domain/entities/poll_option';
	import { Failure } from 'src/core/failures'; class PollOptionModel extends PollOption {
	    static fromJson(json: any): PollOptionModel | Failure;
	    private static checkJson;
	}
	export default PollOptionModel;

}
declare module 'src/features/tg_bot/data/models/poll_model' {
	import Poll from 'src/features/tg_bot/domain/entities/poll';
	import { Failure } from 'src/core/failures'; class PollModel extends Poll {
	    static fromJson(json: any): PollModel | Failure;
	    private static checkJson;
	}
	export default PollModel;

}
declare module 'src/features/tg_bot/data/models/dice_model' {
	import Dice from 'src/features/tg_bot/domain/entities/dice';
	import { Failure } from 'src/core/failures'; class DiceModel extends Dice {
	    static fromJson(json: any): DiceModel | Failure;
	    private static checkJson;
	}
	export default DiceModel;

}
declare module 'src/features/tg_bot/data/models/invoice_model' {
	import Invoice from 'src/features/tg_bot/domain/entities/invoice';
	import { Failure } from 'src/core/failures'; class InvoiceModel extends Invoice {
	    static fromJson(json: any): InvoiceModel | Failure;
	    private static checkJson;
	}
	export default InvoiceModel;

}
declare module 'src/features/tg_bot/data/models/shipping_address_model' {
	import ShippingAddress from 'src/features/tg_bot/domain/entities/shipping_address';
	import { Failure } from 'src/core/failures'; class ShippingAddressModel extends ShippingAddress {
	    static fromJson(json: any): ShippingAddressModel | Failure;
	    private static checkJson;
	}
	export default ShippingAddressModel;

}
declare module 'src/features/tg_bot/data/models/order_info_model' {
	import OrderInfo from 'src/features/tg_bot/domain/entities/order_info';
	import { Failure } from 'src/core/failures'; class OrderInfoModel extends OrderInfo {
	    static fromJson(json: any): OrderInfoModel | Failure;
	    private static checkJson;
	}
	export default OrderInfoModel;

}
declare module 'src/features/tg_bot/data/models/successful_payment_model' {
	import SuccessfulPayment from 'src/features/tg_bot/domain/entities/successful_payment';
	import { Failure } from 'src/core/failures'; class SuccessfulPaymentModel extends SuccessfulPayment {
	    static fromJson(json: any): SuccessfulPaymentModel | Failure;
	    private static checkJson;
	}
	export default SuccessfulPaymentModel;

}
declare module 'src/features/tg_bot/data/models/passport_file_model' {
	import PassportFile from 'src/features/tg_bot/domain/entities/passport_file';
	import { Failure } from 'src/core/failures'; class PassportFileModel extends PassportFile {
	    static fromJson(json: any): PassportFileModel | Failure;
	    private static checkJson;
	}
	export default PassportFileModel;

}
declare module 'src/features/tg_bot/data/models/encrypted_passport_element_model' {
	import EncryptedPassportElement from 'src/features/tg_bot/domain/entities/encrypted_passport_element';
	import { Failure } from 'src/core/failures'; class EncryptedPassportElementModel extends EncryptedPassportElement {
	    static fromJson(json: any): EncryptedPassportElementModel | Failure;
	    private static checkJson;
	}
	export default EncryptedPassportElementModel;

}
declare module 'src/features/tg_bot/data/models/encrypted_credentials_model' {
	import EncryptedCredentials from 'src/features/tg_bot/domain/entities/encrypted_credentials';
	import { Failure } from 'src/core/failures'; class EncryptedCredentialsModel extends EncryptedCredentials {
	    static fromJson(json: any): EncryptedCredentialsModel | Failure;
	    private static checkJson;
	}
	export default EncryptedCredentialsModel;

}
declare module 'src/features/tg_bot/data/models/passport_data_model' {
	import PassportData from 'src/features/tg_bot/domain/entities/passport_data';
	import { Failure } from 'src/core/failures'; class PassportDataModel extends PassportData {
	    static fromJson(json: any): PassportDataModel | Failure;
	    private static checkJson;
	}
	export default PassportDataModel;

}
declare module 'src/core/serializable' {
	 abstract class Serializable {
	    static fromJson(): any;
	    abstract toJsonString(): string;
	    abstract toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default Serializable;

}
declare module 'src/features/tg_bot/data/models/login_url_model' {
	import LoginUrl from 'src/features/tg_bot/domain/entities/login_url';
	import { Failure } from 'src/core/failures';
	import Serializable from 'src/core/serializable'; class LoginUrlModel extends LoginUrl implements Serializable {
	    static fromJson(json: any): LoginUrlModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default LoginUrlModel;

}
declare module 'src/features/tg_bot/data/models/callback_game_model' {
	import CallbackGame from 'src/features/tg_bot/domain/entities/callback_game';
	import { Failure } from 'src/core/failures';
	import Serializable from 'src/core/serializable'; class CallbackGameModel extends CallbackGame implements Serializable {
	    static fromJson(json: any): CallbackGameModel | Failure;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default CallbackGameModel;

}
declare module 'src/features/tg_bot/data/models/inline_keyboard_button_model' {
	import InlineKeyboardButton from 'src/features/tg_bot/domain/entities/inline_keyboard_button';
	import { Failure } from 'src/core/failures';
	import Serializable from 'src/core/serializable'; class InlineKeyboardButtonModel extends InlineKeyboardButton implements Serializable {
	    static fromJson(json: any): InlineKeyboardButtonModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default InlineKeyboardButtonModel;

}
declare module 'src/features/tg_bot/data/models/inline_keyboard_markup_model' {
	import InlineKeyboardMarkup from 'src/features/tg_bot/domain/entities/inline_keyboard_markup';
	import { Failure } from 'src/core/failures';
	import Serializable from 'src/core/serializable'; class InlineKeyboardMarkupModel extends InlineKeyboardMarkup implements Serializable {
	    static fromJson(json: any): InlineKeyboardMarkupModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default InlineKeyboardMarkupModel;

}
declare module 'src/features/tg_bot/data/models/message_model' {
	import Message from 'src/features/tg_bot/domain/entities/message';
	import { Failure } from 'src/core/failures'; class MessageModel extends Message {
	    static fromJson(json: any): MessageModel | Failure;
	    private static ckeckJson;
	}
	export default MessageModel;

}
declare module 'src/features/tg_bot/data/models/inline_query_model' {
	import InlineQuery from 'src/features/tg_bot/domain/entities/inline_query';
	import { Failure } from 'src/core/failures'; class InlineQueryModel extends InlineQuery {
	    static fromJson(json: any): InlineQueryModel | Failure;
	    private static checkJson;
	}
	export default InlineQueryModel;

}
declare module 'src/features/tg_bot/data/models/chosen_inline_result_model' {
	import ChosenInlineResult from 'src/features/tg_bot/domain/entities/chosen_inline_result';
	import { Failure } from 'src/core/failures'; class ChosenInlineResultModel extends ChosenInlineResult {
	    static fromJson(json: any): ChosenInlineResultModel | Failure;
	    private static checkJson;
	}
	export default ChosenInlineResultModel;

}
declare module 'src/features/tg_bot/data/models/callback_query_model' {
	import CallbackQuery from 'src/features/tg_bot/domain/entities/callback_query';
	import { Failure } from 'src/core/failures'; class CallbackQueryModel extends CallbackQuery {
	    static fromJson(json: any): CallbackQueryModel | Failure;
	    private static checkJson;
	}
	export default CallbackQueryModel;

}
declare module 'src/features/tg_bot/data/models/update_model' {
	import Update from 'src/features/tg_bot/domain/entities/update';
	import { Failure } from 'src/core/failures'; class UpdateModel extends Update {
	    static fromJson(json: any): UpdateModel | Failure;
	    private static checkJson;
	}
	export default UpdateModel;

}
declare module 'src/features/tg_bot/domain/entities/keyboard_button_poll_type' {
	 class KeyboardButtonPollType {
	    type?: string;
	    constructor(type?: string);
	}
	export default KeyboardButtonPollType;

}
declare module 'src/features/tg_bot/domain/entities/keyboard_button' {
	import KeyboardButtonPollType from 'src/features/tg_bot/domain/entities/keyboard_button_poll_type'; class KeyboardButton {
	    text: string;
	    requestContact?: boolean;
	    requestLocation?: boolean;
	    requestPoll?: KeyboardButtonPollType;
	    constructor(props: {
	        text: string;
	        requestContact?: boolean;
	        requestLocation?: boolean;
	        requestPoll?: KeyboardButtonPollType;
	    });
	}
	export default KeyboardButton;

}
declare module 'src/features/tg_bot/domain/entities/reply_keyboard_markup' {
	import KeyboardButton from 'src/features/tg_bot/domain/entities/keyboard_button'; class ReplyKeyboardMarkup {
	    keyboard: KeyboardButton[][];
	    resizeKeyboard?: boolean;
	    oneTimeKeyboard?: boolean;
	    selective?: boolean;
	    constructor(props: {
	        keyboard: KeyboardButton[][];
	        resizeKeyboard?: boolean;
	        oneTimeKeyboard?: boolean;
	        selective?: boolean;
	    });
	}
	export default ReplyKeyboardMarkup;

}
declare module 'src/features/tg_bot/domain/entities/reply_keyboard_remove' {
	 class ReplyKeyboardRemove {
	    removeKeyboard: boolean;
	    selective?: boolean;
	    constructor(selective?: boolean);
	}
	export default ReplyKeyboardRemove;

}
declare module 'src/features/tg_bot/data/models/reply_keyboard_remove_model' {
	import ReplyKeyboardRemove from 'src/features/tg_bot/domain/entities/reply_keyboard_remove';
	import Serializable from 'src/core/serializable';
	import { Failure } from 'src/core/failures'; class ReplyKeyboardRemoveModel extends ReplyKeyboardRemove implements Serializable {
	    static fromJson(json: any): ReplyKeyboardRemoveModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default ReplyKeyboardRemoveModel;

}
declare module 'src/features/tg_bot/domain/entities/force_reply' {
	 class ForceReply {
	    forceReply: boolean;
	    selective?: boolean;
	    constructor(selective?: boolean);
	}
	export default ForceReply;

}
declare module 'src/features/tg_bot/data/models/force_reply_model' {
	import ForceReply from 'src/features/tg_bot/domain/entities/force_reply';
	import Serializable from 'src/core/serializable';
	import { Failure } from 'src/core/failures'; class ForceReplyModel extends ForceReply implements Serializable {
	    static fromJson(json: any): ForceReplyModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default ForceReplyModel;

}
declare module 'src/features/tg_bot/data/models/keyboard_button_poll_type_model' {
	import Serializable from 'src/core/serializable';
	import KeyboardButtonPollType from 'src/features/tg_bot/domain/entities/keyboard_button_poll_type';
	import { Failure } from 'src/core/failures'; class KeyboardButtonPollTypeModel extends KeyboardButtonPollType implements Serializable {
	    static fromJson(json: any): KeyboardButtonPollTypeModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {};
	}
	export default KeyboardButtonPollTypeModel;

}
declare module 'src/features/tg_bot/data/models/keyboard_button_model' {
	import KeyboardButton from 'src/features/tg_bot/domain/entities/keyboard_button';
	import Serializable from 'src/core/serializable';
	import { Failure } from 'src/core/failures'; class KeyboardButtonModel extends KeyboardButton implements Serializable {
	    static fromJson(json: any): KeyboardButtonModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default KeyboardButtonModel;

}
declare module 'src/features/tg_bot/data/models/reply_keyboard_markup_model' {
	import ReplyKeyboardMarkup from 'src/features/tg_bot/domain/entities/reply_keyboard_markup';
	import Serializable from 'src/core/serializable';
	import { Failure } from 'src/core/failures'; class ReplyKeyboardMarkupModel extends ReplyKeyboardMarkup implements Serializable {
	    static fromJson(json: any): ReplyKeyboardMarkupModel | Failure;
	    private static checkJson;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default ReplyKeyboardMarkupModel;

}
declare module 'src/features/tg_bot/data/models/message_response' {
	import InlineKeyboardMarkupModel from 'src/features/tg_bot/data/models/inline_keyboard_markup_model';
	import ReplyKeyboardMarkup from 'src/features/tg_bot/domain/entities/reply_keyboard_markup';
	import ReplyKeyboardRemoveModel from 'src/features/tg_bot/data/models/reply_keyboard_remove_model';
	import ForceReplyModel from 'src/features/tg_bot/data/models/force_reply_model';
	import Serializable from 'src/core/serializable'; class MessageResponse implements Serializable {
	    chatId: number | string;
	    text: string;
	    parseMode?: string;
	    disableWebPagePreview?: boolean;
	    disableNotification?: boolean;
	    replyToMessageId?: number;
	    replyMarkup?: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel;
	    constructor(props: {
	        chatId: number | string;
	        text: string;
	        parseMode?: string;
	        disableWebPagePreview?: boolean;
	        disableNotification?: boolean;
	        replyToMessageId?: number;
	        replyMarkup?: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel;
	    });
	    setParseMode(parseMode: string): void;
	    setDisabledWebPagePreview(): MessageResponse;
	    setDisableNotification(): MessageResponse;
	    setReplyMarkup(replyMarkup: InlineKeyboardMarkupModel | ReplyKeyboardMarkup | ReplyKeyboardRemoveModel | ForceReplyModel): MessageResponse;
	    setReplyToMessageId(messageId: number): MessageResponse;
	    toJsonString(): string;
	    toJsonObject(): {
	        [key: string]: any;
	    };
	}
	export default MessageResponse;

}
declare module 'src/features/tg_bot/data/datasources/api_message_remote_datasource' {
	import { Failure } from 'src/core/failures';
	import { ApiClient } from 'src/features/tg_bot/data/datasources/telegram_client';
	import UpdateModel from 'src/features/tg_bot/data/models/update_model';
	import MessageResponse from 'src/features/tg_bot/data/models/message_response';
	interface ApiMessageRemoteDatasource {
	    getUpdates(offset: number): Promise<UpdateModel[] | Failure>;
	    sendMessage(message: MessageResponse): Promise<any | Failure>;
	} class ApiMessageRemoteDatasourceImpl implements ApiMessageRemoteDatasource {
	    private client;
	    constructor(client: ApiClient);
	    getUpdates(offset: number): Promise<UpdateModel[] | Failure>;
	    sendMessage(message: MessageResponse): Promise<any | Failure>;
	    private checkResponse;
	}
	export { ApiMessageRemoteDatasource, ApiMessageRemoteDatasourceImpl };

}
declare module 'src/core/usecases/usecase' {
	import { Failure } from 'src/core/failures'; abstract class UseCase<Type, Params> {
	    abstract execute(params: Params): Promise<Type | Failure>;
	} class NoParams {
	}
	export { UseCase, NoParams };

}
declare module 'src/features/tg_bot/domain/repositories/telegram_repostiry' {
	import { Failure } from 'src/core/failures';
	import Update from 'src/features/tg_bot/domain/entities/update';
	import User from 'src/features/tg_bot/domain/entities/user';
	import MessageResponse from 'src/features/tg_bot/data/models/message_response';
	interface TelegramRepository {
	    getUpdates(offset: number): Promise<Update[] | Failure>;
	    getMe(): Promise<User | Failure>;
	    sendMessage(message: MessageResponse): Promise<any | Failure>;
	}
	export default TelegramRepository;

}
declare module 'src/features/tg_bot/domain/usecases/long_poll_get_updates' {
	import { UseCase, NoParams } from 'src/core/usecases/usecase';
	import Update from 'src/features/tg_bot/domain/entities/update';
	import TelegramRepository from 'src/features/tg_bot/domain/repositories/telegram_repostiry';
	import { Failure } from 'src/core/failures'; class LongPollGetUpdates extends UseCase<Update[], Params> {
	    telegramRepository: TelegramRepository;
	    private lastOffset;
	    constructor(telegramRepository: TelegramRepository, initOffset: number);
	    execute(params: Params | NoParams): Promise<Update[] | Failure>;
	    private executeWithUpdate;
	    private executeWithoutParams;
	    private updateLastOffset;
	} class Params {
	    offset: number;
	    constructor(offset: number);
	}
	export { LongPollGetUpdates, Params };

}
declare module 'src/features/tg_bot/data/repositories/telegram_repostiry_impl' {
	import { ApiMessageRemoteDatasource } from 'src/features/tg_bot/data/datasources/api_message_remote_datasource';
	import { Failure } from 'src/core/failures';
	import TelegramRepository from 'src/features/tg_bot/domain/repositories/telegram_repostiry';
	import Update from 'src/features/tg_bot/domain/entities/update';
	import User from 'src/features/tg_bot/domain/entities/user';
	import { ApiUserRemoteDatasource } from 'src/features/tg_bot/data/datasources/api_user_remote_datasource';
	import MessageResponse from 'src/features/tg_bot/data/models/message_response'; class TelegramRepositoryImpl implements TelegramRepository {
	    apiMessageRemoteDatasource: ApiMessageRemoteDatasource;
	    apiUserRemoteDatasource: ApiUserRemoteDatasource;
	    constructor(apiMessageRemoteDatasource: ApiMessageRemoteDatasource, apiUserRemoteDatasource: ApiUserRemoteDatasource);
	    getUpdates(offset: number): Promise<Update[] | Failure>;
	    getMe(): Promise<User | Failure>;
	    sendMessage(message: MessageResponse): Promise<any | Failure>;
	}
	export default TelegramRepositoryImpl;

}
declare module 'src/features/tg_bot/domain/usecases/get_me' {
	import { UseCase, NoParams } from 'src/core/usecases/usecase';
	import TelegramRepository from 'src/features/tg_bot/domain/repositories/telegram_repostiry';
	import { Failure } from 'src/core/failures';
	import User from 'src/features/tg_bot/domain/entities/user'; class GetMe extends UseCase<any, NoParams> {
	    telegramRepository: TelegramRepository;
	    constructor(telegramRepository: TelegramRepository);
	    execute(): Promise<User | Failure>;
	}
	export { GetMe };

}
declare module 'src/features/tg_bot/domain/usecases/send_message' {
	import { UseCase } from 'src/core/usecases/usecase';
	import TelegramRepository from 'src/features/tg_bot/domain/repositories/telegram_repostiry';
	import { Failure } from 'src/core/failures';
	import MessageResponse from 'src/features/tg_bot/data/models/message_response'; class SendMessage extends UseCase<any, MessageResponse> {
	    telegramRepository: TelegramRepository;
	    constructor(telegramRepository: TelegramRepository);
	    execute(message: MessageResponse): Promise<any | Failure>;
	}
	export { SendMessage };

}
declare module 'src/features/tg_bot/telegram_bot' {
	import Message from 'src/features/tg_bot/domain/entities/message';
	import CallbackQuery from 'src/features/tg_bot/domain/entities/callback_query';
	import TelegramPublisher from 'src/features/tg_bot/presentation/pubsub/publishers/telegram_publisher';
	import MessageResponse from 'src/features/tg_bot/data/models/message_response'; class TelegramBot {
	    private telegramPublisher;
	    private sendMessageUseCase;
	    private longPollGetUpdates;
	    private getMe;
	    private botToken;
	    constructor(botToken: string);
	    init(): void;
	    get botTelegramPublisher(): TelegramPublisher;
	    startLongPool(): Promise<void>;
	    onText(callback: (message: Message) => void): void;
	    onCallback(callback: (callback: CallbackQuery) => void): void;
	    sendMessage(message: MessageResponse): Promise<any>;
	}
	export default TelegramBot;

}
declare module 'telegram-bot-ts' {
	export { default as TelegramBot } from 'src/features/tg_bot/telegram_bot';
	export { default as MessageResponse } from 'src/features/tg_bot/data/models/message_response';
	export { default as Message } from 'src/features/tg_bot/domain/entities/message';
	export { default as CallbackQuery } from 'src/features/tg_bot/domain/entities/callback_query';
	export { default as ReplyKeyboardMarkupModel } from 'src/features/tg_bot/data/models/reply_keyboard_markup_model';
	export { default as KeyboardButtonModel } from 'src/features/tg_bot/data/models/keyboard_button_model';
	export { default as InlineKeyboardMarkupModel } from 'src/features/tg_bot/data/models/inline_keyboard_markup_model';
	export { default as InlineKeyboardButtonModel } from 'src/features/tg_bot/data/models/inline_keyboard_button_model';
	export { default as ReplyKeyboardRemoveModel } from 'src/features/tg_bot/data/models/reply_keyboard_remove_model';
	export { default as ForceReplyModel } from 'src/features/tg_bot/data/models/force_reply_model';

}
