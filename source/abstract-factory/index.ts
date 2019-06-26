import { Factory, Droid, droids } from './interfaces'

function droidProducer(kind: droids): Factory {
    if (kind === 'battle') {
        return battleDroidFactory;
    }
    return pilotDroidFactory;
}

function battleDroidFactory(): Droid {
    return new B1();
}

function pilotDroidFactory(): Droid {
    return new Rx24();
}

class B1 implements Droid {
    info(): string {
        return "B1, Battle Droid";
    }
}

class Rx24 implements Droid {
    info(): string {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;