import { CheeseDecorator, Penne, SauceDecorator } from '.'

const sauce = new Penne()
const withCheeseAndSauce = new CheeseDecorator(sauce)
const withSauce = new SauceDecorator(sauce)

const price = withSauce.getPrice()
console.log(`Price with sauce: ${price}`)