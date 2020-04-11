// https://core.telegram.org/bots/api#dice
class Dice {
    value: number; // Value of the dice, 1-6

    constructor(value: number) {
        this.value = value;
    }
}

export default Dice;