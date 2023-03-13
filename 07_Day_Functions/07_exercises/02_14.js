function sumOfNumbers(...args) {
    let sum = 0
    for(const item of args)
        sum += item
    return sum
}

console.log(sumOfNumbers(1,2,3,34,4,6,4))
console.log(sumOfNumbers(4,4))