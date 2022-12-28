let sumOdd = 0
let sumEven = 0
for(let k = 0; k <= 100; k++)
    if (k % 2 == 1)
        sumOdd += k
    else sumEven += k
console.log(`The sum of all evens from 0 to 100 is ${sumEven} and the sum of all odds from 0 to 100 is ${sumOdd}.`)
