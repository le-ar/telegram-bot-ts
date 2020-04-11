import Game from "../../domain/entities/game";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import PhotoSizeModel from "./photo_size_model";
import MessageEntityModel from "./message_entity_model";
import MessageEntity from "../../domain/entities/message_entity";
import AnimationModel from "./animation_model";

// https://core.telegram.org/bots/api#game
class GameModel extends Game {
    static fromJson(json: any): GameModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let photo: PhotoSizeModel[] = [];
        if (Array.isArray(json.photo)) {
            for (let photoSize of json.photo) {
                let photoSizeModel = PhotoSizeModel.fromJson(photoSize);
                if (photoSizeModel instanceof PhotoSizeModel) {
                    photo.push(photoSizeModel);
                }
            }
        }

        let text_entities: MessageEntityModel[] = [];
        if (Array.isArray(json.text_entities)) {
            for (let entity of json.text_entities) {
                let messageEntity = MessageEntityModel.fromJson(entity);
                if (messageEntity instanceof MessageEntityModel) {
                    text_entities.push(messageEntity);
                }
            }
        } else {
            text_entities = null;
        }

        let animation = AnimationModel.fromJson(json.animation);
        if (!(animation instanceof AnimationModel)) {
            animation = null;
        }

        if (!(animation instanceof Failure)) {
            return new GameModel(
                json.title,
                json.description,
                photo,
                json.text ?? null,
                text_entities,
                animation
            );
        }
        
        return new FailureWrongStructure();
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('title') &&
            json.hasOwnProperty('description') &&
            json.hasOwnProperty('photo')
        );
    }
}

export default GameModel;