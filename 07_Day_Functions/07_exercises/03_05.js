function convertRgbToHexa(hexColor) {
    let rgbArr = []
    for (let i=1; i<6; i+=2)
        rgbArr.push(parseInt(hexColor.slice(i, i+2), 16))
    return `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
}

console.log(convertRgbToHexa('#ffffff'))