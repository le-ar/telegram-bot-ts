// https://core.telegram.org/bots/api#maskposition
class MaskPosition {
    point: string;
    xShift: number;
    yShift: number;
    scale: number;

    constructor(
        point: string,
        xShift: number,
        yShift: number,
        scale: number
    ) {
        this.point = point;
        this.xShift = xShift;
        this.yShift = yShift;
        this.scale = scale;
    }
}

export default MaskPosition;