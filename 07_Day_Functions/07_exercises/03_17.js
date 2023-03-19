function checkIfAllOfTheSameType(arr) {
    for(let i=1; i<arr.length; i++) 
        if(typeof arr[0] != typeof arr[i])
            return false
    return true
}

console.log(checkIfAllOfTheSameType(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))
console.log(checkIfAllOfTheSameType(['Google', 'Facebook', 'Apple', 'Amazon', 'Facebook', 'Microsoft', 'IBM']))
console.log(checkIfAllOfTheSameType([1, 2, 3, 'Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))