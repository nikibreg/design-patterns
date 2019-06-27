import Iterator from '.';

const queue = ["Niki", "Andrii", "Roman"]
const ticketMan = new Iterator(queue);

console.log(`It's ${ticketMan.hasNext()} 
            that queue has next and it's 
            ${ticketMan.next()}'s turn`)