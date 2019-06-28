import { Strategy, Context } from "./interfaces";

class ShoppingCart implements Context {
    amount = 0;

    constructor(public discount: Strategy) {
    }

    checkout(): number {
        return this.discount(this.amount);
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }
}

const guestStrategy: Strategy = function (amount: number) {
    return amount;
}

const regularStrategy: Strategy = function (amount: number) {
    return amount * 0.9;
}

const premiumStrategy: Strategy = function (amount: number) {
    return amount * 0.8;
}

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
};