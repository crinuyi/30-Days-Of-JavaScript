function evenAndOdds(amount) {
    let countEven = 0
    let countOdd = 0
    for(let i = 0; i <= amount; i++)
        if(i % 2 == 0)
            countEven++
        else countOdd++
    return `The number of odds are ${countOdd} and evens are ${countEven}.`
}

console.log(evenAndOdds(100))