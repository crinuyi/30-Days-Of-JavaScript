function convertRgbToHexa(arg1, arg2, arg3) {
    return `#${arg1.toString(16)}${arg2.toString(16)}${arg3.toString(16)}`
}

console.log(convertRgbToHexa(255,255,255))