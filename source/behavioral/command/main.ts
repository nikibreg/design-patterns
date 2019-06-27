import { Cockpit, OffCommand, OnCommand, Turbine} from './index';

const myTurbine = new Turbine()

const turnOn = new OnCommand(myTurbine);
const turnOff = new OffCommand(myTurbine);

const myPit = new Cockpit(turnOn)