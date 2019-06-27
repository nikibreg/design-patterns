import { Snapshot, IOriginator } from "./interfaces";

class Memento implements Snapshot { // this is more of a snapshot than a memento
    constructor(public value: string) {
    }
}

const originator: IOriginator = {
    store: function (val: string) {
        return new Memento(val);
    },
    restore: function (memento: Memento) {
        return memento.value;
    }
};

class Caretaker {
    values: Memento[] = []

    public addMemento(memento: Memento) {
        this.values.push(memento);
    }

    public getMemento(index: number) {
        return this.values[index];
    }
}

export {
    originator,
    Caretaker
};