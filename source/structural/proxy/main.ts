import { CarProxy, Driver } from '.';

const Niki = new Driver(19);
const Bus = new CarProxy(Niki)
console.log(Bus.drive())