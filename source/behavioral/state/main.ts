import Order from '.'

const pizzaAndCoke = new Order()
console.log(pizzaAndCoke.state)

pizzaAndCoke.nextState()
console.log(pizzaAndCoke.state)

pizzaAndCoke.nextState()
console.log(pizzaAndCoke.state)