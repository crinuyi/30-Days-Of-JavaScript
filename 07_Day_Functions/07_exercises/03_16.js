function areItemsUnique(arr) {
    for(let i=0; i<arr.length; i++) {
        let amount = 0
        for(let j=0; j<arr.length; j++) {
            if(arr[i] == arr[j])
                amount++
        }
        if(amount > 1)
            return false
    }
    return true
} 

console.log(areItemsUnique(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))
console.log(areItemsUnique(['Google', 'Facebook', 'Apple', 'Amazon', 'Facebook', 'Microsoft', 'IBM']))
console.log(areItemsUnique([1, 2, 3, 'Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))