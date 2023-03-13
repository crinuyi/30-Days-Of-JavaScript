function addItem(arr, item) {
    arr.pop(item)
    return arr
}

console.log(addItem([1,2,3], 3))