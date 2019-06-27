import { Caretaker, originator } from ".";

const Niki = originator;
const VSCode = new Caretaker()
const file = Niki.store("memento/main.ts")
VSCode.addMemento(file)
console.log(VSCode.values)