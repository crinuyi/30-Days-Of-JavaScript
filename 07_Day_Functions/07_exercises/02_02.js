function solveQuadratic(a, b, c) {
    let delta = b*b - 4*a*c
    if (a == undefined && b == undefined && c == undefined)
        return 0
    else if (delta < 0)
        return null
    else if (delta == 0)
        return -b / (2*a)
    else return [(-b - Math.sqrt(delta))/(2*a), (-b + Math.sqrt(delta))/(2*a)]
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}