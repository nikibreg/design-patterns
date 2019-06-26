import { ShopFacadeSubclass, IShopFacade } from "./interfaces";

class ShopFacade implements IShopFacade {
    discount: Discount;
    shipping: Shipping;
    fees: Fees;

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount implements ShopFacadeSubclass {
    calc<value extends number>(value: value) {
        return value * 0.9;
    }
}

class Shipping implements ShopFacadeSubclass {
    calc(): number {
        return 5;
    }
}

class Fees implements ShopFacadeSubclass {
    calc<value extends number>(value: value) {
        return value * 1.05;
    }
}

export default ShopFacade;