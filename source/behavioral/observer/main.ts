import { Fees, Product, Profit } from '.';

const iPhone = new Product()
const tax = new Fees()
const guala = new Profit()

iPhone.register(tax)
iPhone.register(guala)
console.log(iPhone.price)
iPhone.setBasePrice(12)
console.log(iPhone.price)
iPhone.unregister(guala)
iPhone.unregister(tax)
console.log(iPhone.price)
iPhone.setBasePrice(12)
console.log(iPhone.price)

