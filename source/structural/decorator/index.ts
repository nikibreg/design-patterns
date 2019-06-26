import { IPasta } from "./interfaces";

class Pasta {
    price = 0
    getPrice(): number {
        return this.price;
    }
}

class Penne extends Pasta implements IPasta {
    price = 8
    constructor() {
        super();
    }
}

class PastaDecorator extends Pasta {
    constructor(public pasta: Pasta) {
        super();
    }

    getPrice(): number {
        return this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {
    constructor(public pasta: Pasta) {
        super(pasta);
    }

    getPrice(): number {
        return super.getPrice() + 5;
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta: Pasta) {
        super(pasta);
    }

    getPrice(): number {
        return super.getPrice() + 3;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator
};