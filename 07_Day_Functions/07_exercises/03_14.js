function modifyArray(arr) {
    if(arr.length < 5)
        return 'item not found!'
    else arr[4] = arr[4].toUpperCase()
    return arr
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft','IBM']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))