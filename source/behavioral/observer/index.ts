import { Subscriber, Publisher } from "./interfaces";

class Product implements Publisher {
    price = 0;
    actions: Subscriber[] = [];

    setBasePrice(price: number) {
        this.price = price;
        this.notifyAll();
    }

    register(observer: Subscriber) {
        this.actions.push(observer);
    }

    unregister(observer: Subscriber) {
        this.actions = this.actions.filter(action => action != this.actions[this.actions.indexOf(observer)])
    }

    notifyAll() {
        return this.actions.forEach(el => el.update(this));
    }
}

class Fees {
    update(product: Product) {
        product.price = product.price * 1.2;
    }
}

class Profit {
    update(product: Product) {
        product.price = product.price * 2;
    }
}

export {
    Product,
    Fees,
    Profit
};