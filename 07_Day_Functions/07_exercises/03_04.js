function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function arrayOfRgbColors(amount) {
    let arr = []
    for(let i=0; i<amount; i++) {
        arr.push(rgbColorGenerator())
    }

    return arr
}

console.log(arrayOfRgbColors(5))