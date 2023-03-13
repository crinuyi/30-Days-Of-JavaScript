function sumOfOdds(amount) {
    let sum = 0
    for(let i = 1; i <= amount; i++)
        if(i % 2 != 0)
            sum += i
    return sum
}


console.log(sumOfOdds(100))
console.log(sumOfOdds(4))