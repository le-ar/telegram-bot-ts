import PhotoSize from "./photo_size";
import MessageEntity from "./message_entity";
import Animation from "./animation";

// https://core.telegram.org/bots/api#game
class Game {
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    textEntities?: MessageEntity[];
    animation?: Animation;

    constructor(
        title: string,
        description: string,
        photo: PhotoSize[],
        text?: string,
        textEntities?: MessageEntity[],
        animation?: Animation
    ) {
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.text = text;
        this.textEntities = textEntities;
        this.animation = animation;
    }
}

export default Game;