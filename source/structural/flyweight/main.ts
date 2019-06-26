import { colorFactory } from './index'

const palette = new colorFactory()
const Red = palette.create("Red")
console.log(`Palette colors: ${Object.keys(palette.colors)}`)