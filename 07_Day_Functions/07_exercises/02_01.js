function solveLinEquation(a, b, c) {
    if ((-c/b) >= 0)
        return `y = ${-a/b}x + ${-c/b}`
    else return `y = ${-a/b}x ${-c/b}`
}

console.log(solveLinEquation(1, 2, 3))