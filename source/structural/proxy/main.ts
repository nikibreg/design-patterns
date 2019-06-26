import { CarProxy, Driver } from './index';

const Niki = new Driver(19);
const Bus = new CarProxy(Niki)
console.log(Bus.drive())