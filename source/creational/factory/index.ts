import { BMW } from './interfaces'
type FactoryTypes = 'X5' | 'X6'

class BmwFactory {
    static create(type: FactoryTypes) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300);
        }
        if (type === 'X6') {
            return new Bmw(type, 111000, 320);
        }
    }
}

class Bmw implements BMW {
    constructor(public model: string, public price: number, public maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

export default BmwFactory;