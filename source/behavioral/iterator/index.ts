import { IIterator } from "./interfaces";

class Iterator implements IIterator {
    index = 0;

    constructor(public elements: Array<any>) {
    }

    public next(): object {
        return this.elements[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.elements.length;
    }
}

export default Iterator;