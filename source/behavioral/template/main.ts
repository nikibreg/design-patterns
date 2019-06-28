import { Tax1, Tax2 } from '.';

let gross = 1e6
const revenueTax = new Tax1().overThousand(gross) - gross
const importTax = new Tax2().overThousand(gross) - gross
gross -= revenueTax + importTax

console.log(gross)

