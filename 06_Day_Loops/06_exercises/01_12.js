let sum = [0, 0]
for(let k = 0; k <= 100; k++)
    if (k % 2 == 1)
        sum[1] += k
    else sum[0] += k
console.log(sum)