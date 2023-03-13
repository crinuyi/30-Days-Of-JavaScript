function sumOfEven(amount) {
    let sum = 0
    for(let i = 1; i <= amount; i++)
        if(i % 2 == 0)
            sum += i
    return sum
}


console.log(sumOfEven(100))
console.log(sumOfEven(4))