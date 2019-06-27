import { ColorFactory } from '.'

const palette = ColorFactory
const Red = palette.create("Red")
console.log(`Palette colors: ${Object.keys(palette.colors)}`)