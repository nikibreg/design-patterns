import ShopFacade from './index';

const myFacade = new ShopFacade()
const calculated = myFacade.calc(10)

console.log(`total price is ${calculated}`)