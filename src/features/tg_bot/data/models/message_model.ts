import Message from "../../domain/entities/message";
import { FailureWrongStructure, Failure } from "../../../../core/failures";
import UserModel from "./user_model";
import ChatModel from "./chat_model";
import MessageEntityModel from "./message_entity_model";
import AudioModel from "./audio_model";
import DocumentModel from "./document_model";
import AnimationModel from "./animation_model";
import GameModel from "./game_model";
import PhotoSizeModel from "./photo_size_model";
import StickerModel from "./sticker_model";
import VideoModel from "./video_model";
import VoiceModel from "./voice_model";
import VideoNoteModel from "./video_note_model";
import ContactModel from "./contact_model";
import LocationModel from "./location_model";
import VenueModel from "./venue_model";
import PollModel from "./poll_model";
import DiceModel from "./dice_model";
import InvoiceModel from "./invoice_model";
import SuccessfulPaymentModel from "./successful_payment_model";
import PassportDataModel from "./passport_data_model";
import InlineKeyboardMarkupModel from "./inline_keyboard_markup_model";

class MessageModel extends Message {
    static fromJson(json: any): MessageModel | Failure {
        if (!this.ckeckJson(json)) {
            return new FailureWrongStructure();
        }

        let from = json.from ? UserModel.fromJson(json.from) : null;
        if (!(from instanceof UserModel)) {
            from = null;
        }

        let forward_from = json.forward_from ? UserModel.fromJson(json.forward_from) : null;
        if (!(forward_from instanceof UserModel)) {
            forward_from = null;
        }

        let chat = json.chat ? ChatModel.fromJson(json.chat) : null;
        if (!(chat instanceof ChatModel)) {
            chat = null;
        }

        let forward_from_chat = json.forward_from_chat ? ChatModel.fromJson(json.forward_from_chat) : null;
        if (!(forward_from_chat instanceof ChatModel)) {
            forward_from_chat = null;
        }

        let reply_to_message = json.reply_to_message ? MessageModel.fromJson(json.reply_to_message) : null;
        if (!(reply_to_message instanceof MessageModel)) {
            reply_to_message = null;
        }

        let entities: MessageEntityModel[] = [];
        if (Array.isArray(json.entities)) {
            for (let entity of json.entities) {
                let entityModel = MessageEntityModel.fromJson(entity);
                if (entityModel instanceof MessageEntityModel) {
                    entities.push(entityModel);
                }
            }
        }
        if (entities.length) {
            entities = null;
        }

        let caption_entities: MessageEntityModel[] = [];
        if (Array.isArray(json.caption_entities)) {
            for (let entity of json.caption_entities) {
                let entityModel = MessageEntityModel.fromJson(entity);
                if (entityModel instanceof MessageEntityModel) {
                    caption_entities.push(entityModel);
                }
            }
        }
        if (caption_entities.length) {
            caption_entities = null;
        }

        let audio = json.audio ? AudioModel.fromJson(json.audio) : null;
        if (!(audio instanceof AudioModel)) {
            audio = null;
        }

        let document = json.document ? DocumentModel.fromJson(json.document) : null;
        if (!(document instanceof DocumentModel)) {
            document = null;
        }

        let animation = json.animation ? AnimationModel.fromJson(json.animation) : null;
        if (!(animation instanceof AnimationModel)) {
            animation = null;
        }

        let game = json.game ? GameModel.fromJson(json.game) : null;
        if (!(game instanceof GameModel)) {
            game = null;
        }

        let photo: PhotoSizeModel[] = [];
        if (Array.isArray(json.photo)) {
            for (let entity of json.photo) {
                let photoModel = PhotoSizeModel.fromJson(entity);
                if (photoModel instanceof PhotoSizeModel) {
                    photo.push(photoModel);
                }
            }
        } else {
            photo = null;
        }

        let sticker = json.sticker ? StickerModel.fromJson(json.sticker) : null;
        if (!(sticker instanceof StickerModel)) {
            sticker = null;
        }

        let video = json.video ? VideoModel.fromJson(json.video) : null;
        if (!(video instanceof VideoModel)) {
            video = null;
        }

        let voice = json.voice ? VoiceModel.fromJson(json.voice) : null;
        if (!(voice instanceof VoiceModel)) {
            voice = null;
        }

        let video_note = json.video_note ? VideoNoteModel.fromJson(json.video_note) : null;
        if (!(video_note instanceof VideoNoteModel)) {
            video_note = null;
        }

        let contact = json.contact ? ContactModel.fromJson(json.contact) : null;
        if (!(contact instanceof ContactModel)) {
            contact = null;
        }

        let location = json.location ? LocationModel.fromJson(json.location) : null;
        if (!(location instanceof LocationModel)) {
            location = null;
        }

        let venue = json.venue ? VenueModel.fromJson(json.venue) : null;
        if (!(venue instanceof VenueModel)) {
            venue = null;
        }

        let poll = json.poll ? PollModel.fromJson(json.poll) : null;
        if (!(poll instanceof PollModel)) {
            poll = null;
        }

        let dice = json.dice ? DiceModel.fromJson(json.dice) : null;
        if (!(dice instanceof DiceModel)) {
            dice = null;
        }

        let newChatMembers: UserModel[] = [];
        if (Array.isArray(json.new_chat_members)) {
            for (let entity of json.new_chat_members) {
                let userModel = UserModel.fromJson(entity);
                if (userModel instanceof UserModel) {
                    newChatMembers.push(userModel);
                }
            }
        } else {
            newChatMembers = null;
        }

        let leftChatMember = json.left_chat_member ? UserModel.fromJson(json.left_chat_member) : null;
        if (!(leftChatMember instanceof UserModel)) {
            leftChatMember = null;
        }

        let newChatPhoto: PhotoSizeModel[] = [];
        if (Array.isArray(json.new_chat_photo)) {
            for (let entity of json.new_chat_photo) {
                let photoSizeModel = PhotoSizeModel.fromJson(entity);
                if (photoSizeModel instanceof PhotoSizeModel) {
                    newChatPhoto.push(photoSizeModel);
                }
            }
        } else {
            newChatPhoto = null;
        }

        let pinnedMessage = json.pinned_message ? MessageModel.fromJson(json.pinned_message) : null;
        if (!(pinnedMessage instanceof MessageModel)) {
            pinnedMessage = null;
        }

        let invoice = json.invoice ? InvoiceModel.fromJson(json.invoice) : null;
        if (!(invoice instanceof InvoiceModel)) {
            invoice = null;
        }

        let successfulPayment = json.successful_payment ? SuccessfulPaymentModel.fromJson(json.successful_payment) : null;
        if (!(successfulPayment instanceof SuccessfulPaymentModel)) {
            successfulPayment = null;
        }

        let passportData = json.passport_data ? PassportDataModel.fromJson(json.passport_data) : null;
        if (!(passportData instanceof PassportDataModel)) {
            passportData = null;
        }

        let replyMarkup = json.reply_markup ? InlineKeyboardMarkupModel.fromJson(json.reply_markup) : null;
        if (!(replyMarkup instanceof InlineKeyboardMarkupModel)) {
            replyMarkup = null;
        }

        if (
            !(from instanceof Failure) &&
            !(forward_from instanceof Failure) &&
            !(chat instanceof Failure) &&
            !(forward_from_chat instanceof Failure) &&
            !(reply_to_message instanceof Failure) &&
            !(audio instanceof Failure) &&
            !(document instanceof Failure) &&
            !(animation instanceof Failure) &&
            !(game instanceof Failure) &&
            !(sticker instanceof Failure) &&
            !(video instanceof Failure) &&
            !(voice instanceof Failure) &&
            !(video_note instanceof Failure) &&
            !(contact instanceof Failure) &&
            !(location instanceof Failure) &&
            !(venue instanceof Failure) &&
            !(poll instanceof Failure) &&
            !(dice instanceof Failure) &&
            !(leftChatMember instanceof Failure) &&
            !(pinnedMessage instanceof Failure) &&
            !(invoice instanceof Failure) &&
            !(successfulPayment instanceof Failure) &&
            !(passportData instanceof Failure) &&
            !(replyMarkup instanceof Failure)
        ) {
            return new MessageModel(
                json.message_id,
                json.date,
                chat,
                from,
                forward_from,
                forward_from_chat,
                json.forward_from_message_id ?? null,
                json.forward_signature ?? null,
                json.forward_sender_name ?? null,
                json.forward_date ?? null,
                reply_to_message,
                json.edit_date ?? null,
                json.media_group_id ?? null,
                json.author_signature ?? null,
                json.text ?? null,
                entities,
                caption_entities,
                audio,
                document,
                animation,
                game,
                photo,
                sticker,
                video,
                voice,
                video_note,
                json.caption ?? null,
                contact,
                location,
                venue,
                poll,
                dice,
                newChatMembers,
                leftChatMember,
                json.new_chat_title ?? null,
                newChatPhoto,
                json.delete_chat_photo ?? null,
                json.group_chat_created ?? null,
                json.supergroup_chat_created ?? null,
                json.channel_chat_created ?? null,
                json.migrate_to_chat_id ?? null,
                json.migrate_from_chat_id ?? null,
                pinnedMessage,
                invoice,
                successfulPayment,
                json.connected_website ?? null,
                passportData,
                replyMarkup
            );
        }

        return new FailureWrongStructure();
    }

    private static ckeckJson(json: any) {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('message_id') &&
            json.hasOwnProperty('date') &&
            json.hasOwnProperty('chat')
        );
    }
}

export default MessageModel;