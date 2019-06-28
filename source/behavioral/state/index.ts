import { IState } from "./interfaces";

class OrderStatus implements IState {
    constructor(public name: any, public nextStatus: any) {
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    state: OrderStatus = new WaitingForPayment();

    nextState() {
        this.state = this.state.next();
    };
}

export default Order;