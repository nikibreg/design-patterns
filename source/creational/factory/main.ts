import BmwFactory from '.';

const myCar = BmwFactory.create('X5');
const myWifesCar = BmwFactory.create('X6');
// const myFutureCar = BmwFactory.create('X7')
console.log(`Price of X5: ${myCar.price}`)