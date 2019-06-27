import { Cabinet, FloppyDisk, Memory, HardDrive } from ".";

const floppy = new FloppyDisk();
const ssd = new Memory()
const hdd = new HardDrive()
const myCabinet = new Cabinet()

myCabinet.add(ssd)
myCabinet.add(hdd)
console.log(`my cabinet has a total value of: ${myCabinet.getPrice()}`)
