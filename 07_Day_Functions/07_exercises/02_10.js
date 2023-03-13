function sumOfNumbers(amount) {
    let sum = 0
    for(let i = 1; i <= amount; i++)
        sum += i
    return sum
}

console.log(sumOfNumbers(1))
console.log(sumOfNumbers(4))