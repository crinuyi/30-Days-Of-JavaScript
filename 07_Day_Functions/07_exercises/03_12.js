function sumOfArrayItems(arr) {
    let arrSum = 0
    if (arr == null || arr.length == 0)
        return 0
    else {
        for(let i=0; i<arr.length; i++) {
            if(isNaN(arr[i]))
                return undefined
            arrSum += arr[i]
        }
    }
    return arrSum
}

console.log(sumOfArrayItems([1,2,3]))
console.log(sumOfArrayItems([1, 'test']))
console.log(sumOfArrayItems([]))