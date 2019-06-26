import { CheeseDecorator, Penne, SauceDecorator } from './index'

const sauce = new Penne()
const withCheeseAndSauce = new CheeseDecorator(sauce)
const withSauce = new SauceDecorator(sauce)

withSauce.getPrice()
