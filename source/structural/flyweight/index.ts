import { IColor, TColors } from "./interfaces";

class Color implements IColor {
    constructor(public name: string) {
        this.name = name
    }
}

abstract class ColorFactory {
    static colors = {} as TColors;

    constructor() {

    }

    static create(name: string) {
        if (name in this.colors) {
            return this.colors[name]
        } else {
            let color = new Color(name);
            this.colors[name] = color;
            return color
        }
    }
}

export {
    ColorFactory
};