function sum(...args) {
    let allSum = 0
    for(let i=0; i<args.length; i++)
        allSum += args[i]
    return allSum
}

console.log(sum(1,2,3,3))