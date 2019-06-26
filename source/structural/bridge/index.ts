import { IPrinter, TInk, IInk } from "./interfaces";
class Printer implements IPrinter {
    constructor(public ink: Ink) {

    }
}

class EpsonPrinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    print(): string {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    print(): string {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink implements IInk {
    constructor(public type: TInk) {

    }
    get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk
};