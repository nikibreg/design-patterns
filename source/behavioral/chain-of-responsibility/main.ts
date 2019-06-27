import { Discount, ShoppingCart } from '.' 

const myCart = new ShoppingCart()
const flashSale = new Discount()

myCart.addProduct(2999.99)
const myDiscount = flashSale.calc(myCart.products)

console.log(`Discount: ${myDiscount * 100}%`)
