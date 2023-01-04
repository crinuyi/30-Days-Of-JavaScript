function getValueForRGBColor() { 
    return Math.floor(Math.random() * 256)
  }

console.log(`rgb(${getValueForRGBColor()}, ${getValueForRGBColor()}, ${getValueForRGBColor()})`)