import { IJediAdapter, ISoldier } from "./interfaces";

export class Soldier implements ISoldier {
    constructor(public level: number) {

    }

    attack() {
        return this.level * 1;
    }
}

export class Jedi extends Soldier {
    constructor(public level: number) {
        super(level)
    }

    attackWithSaber(): number {
        return this.level * 100;
    }
}

export class JediAdapter implements IJediAdapter {
    constructor(public jedi: Jedi) {

    }

    attack(): number {
        return this.jedi.attackWithSaber();
    }
}

