import { Soldier, Jedi, JediAdapter } from ".";

const trooper = new Soldier(1);
const yoda = new Jedi(9);
const adaptedYoda = new JediAdapter(yoda);

console.log(`Trooper does ${trooper.attack()} damage`);
console.log(`Yoda does ${adaptedYoda.attack()} damage`);