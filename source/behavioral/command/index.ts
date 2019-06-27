import { Command } from "./interfaces";

class Cockpit {

    constructor(public command: Command) {
    }

    execute() {
        this.command.execute();
    }
}

class Turbine {
    state = false;

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnCommand implements Command{

    constructor(public turbine: Turbine) {

    }

    execute() {
        this.turbine.on();
    }
}

class OffCommand implements Command {
    
    constructor(public turbine: Turbine) {
    }

    execute() {
        this.turbine.off();
    }
}

export {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand
};