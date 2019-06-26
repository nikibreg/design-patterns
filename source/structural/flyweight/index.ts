import { IColor, IColorFactory, TColors } from "./interfaces";

class Color implements IColor {
    constructor(public name: string) {
        this.name = name
    }
}

class colorFactory implements IColorFactory {
    colors = {} as TColors;

    constructor() {

    }

    create(name: string) {
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
    colorFactory
};