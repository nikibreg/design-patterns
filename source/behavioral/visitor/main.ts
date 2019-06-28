import { Developer, Manager, bonusVisitor } from '.'

const Niki = new Developer(1e6);
console.log(Niki.bonus)
bonusVisitor(Niki)
console.log(Niki.bonus)
