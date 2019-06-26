import { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk } from "./index";

const acrylic = new AcrylicInk();
const alco = new AlcoholInk;

const oldPrinter = new HPprinter(alco);
const newPrinter = new HPprinter(acrylic);

console.log(`Old printer has ${oldPrinter.ink.get()} ink`)