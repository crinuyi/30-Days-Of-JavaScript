function findMax(x, y, z) {
    if(x > y) {
        if (x > z)
            return x
        if (z > y)
            return z
        return y
    } else if (y > z)
        return y
    return z
}

console.log(findMax(3,2,4))