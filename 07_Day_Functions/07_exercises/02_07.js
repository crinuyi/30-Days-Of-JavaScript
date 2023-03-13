function capitalizeArray(arr) {
    let newArr = []
    for(const item of arr)
        newArr.push(item.toUpperCase())
    return newArr
}

console.log(capitalizeArray(['a', 'b', 'c']))