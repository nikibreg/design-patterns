import { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy } from ".";
import { Strategy } from "./interfaces";

const customerCart = new ShoppingCart(regularStrategy)
const prodPrice = 500
customerCart.setAmount(prodPrice)
console.log(`   New customer purchased: ${customerCart.amount}$,
                was discounted ${prodPrice - customerCart.discount(prodPrice)}, 
                and was charged with: ${customerCart.checkout()}`)
