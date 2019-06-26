import { Sheep } from ".";

const Rex = new Sheep('Rex', 80)
const RexWithMoreFur = Rex.clone() 

console.log(RexWithMoreFur.name, RexWithMoreFur.weight)