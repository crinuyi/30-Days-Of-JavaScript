 function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length-1; i>=0; i--) {
        newArr.push(arr[i])
    }
    return newArr
 }

 console.log(reverseArray([1, 2, 3, 4, 5]))
 //[5, 4, 3, 2, 1]
 console.log(reverseArray(['A', 'B', 'C']))
 //['C', 'B', 'A']