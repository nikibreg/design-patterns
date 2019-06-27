import { Handler } from './interfaces';

class ShoppingCart {
    products: Array<number> = [];

    addProduct(p: number) {
        this.products.push(p);
    };
}

class Discount {

    calc(products: Array<number>) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        // pdiscount.setNext
        // pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount implements Handler {
    next: Handler | null = null;

    setNext(fn: Handler) {
        this.next = fn;
    };

    exec(products: Array<number>) {
        let result = 0;

        if (products.length > 3) {
            result = 0.05;
        }
        if (this.next) {
            result += this.next.exec(products);
        }
        return result
    };
}

class PriceDiscount implements Handler {
    next: Handler | null = null;

    public setNext(fn: Handler) {
        this.next = fn;
    };

    public exec(products: Array<number>) {
        let result = 0;
        let total = products.reduce((a, b) => a + b);

        if (total >= 500) {
            result = 0.1;
        }

        if (this.next) {
            result += this.next.exec(products);
        }
        return result
    };
}

class NoneDiscount implements Handler {
    public exec() {
        return 0;
    };
}

export {
    ShoppingCart,
    Discount
};