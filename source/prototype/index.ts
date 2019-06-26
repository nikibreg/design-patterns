import { iSheep, Prototype } from './interfaces'
export class Sheep implements iSheep, Prototype {

    constructor(public name: string, public weight: number) {
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}