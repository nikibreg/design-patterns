import { IDriver, ICar } from "./interfaces";
class Car implements ICar {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(public driver: IDriver) {

    }
    drive() {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver {
    constructor(public age: number) {

    }
}

export {
    Car,
    CarProxy,
    Driver
};