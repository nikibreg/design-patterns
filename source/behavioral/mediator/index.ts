import { Mediator, notifier } from "./interfaces";

class TrafficTower implements Mediator {
    public airplanes: Array<Airplane> = []

    public requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane  {

    constructor(public position: number, public trafficTower: TrafficTower) {
        this.trafficTower.airplanes.push(this);
    }

    public requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane
};