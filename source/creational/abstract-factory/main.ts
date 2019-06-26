import droidProducer from ".";

const battleDroidFactory = droidProducer('battle')
const ninja = battleDroidFactory()
const samurai = battleDroidFactory()
console.log(`Ninja info: ${ninja.info()}`)