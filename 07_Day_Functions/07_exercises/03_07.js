function randomHexaNumberGenerator() {
    const hex = '0123456789ABCDEF'
    let output = '#'
    for (let i = 0; i < 6; ++i) 
        output += hex.charAt(Math.floor(Math.random() * hex.length))
    return output
}

function arrayOfHexaColors(amount) {
    let arr = []
    for(let i=0; i<amount; i++) {
        arr.push(randomHexaNumberGenerator())
    }

    return arr
}

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

function generateColors(type, amount) {
    if(type == 'rgb')
        return arrayOfRgbColors(amount);
    else return arrayOfHexaColors(amount);
}


console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'