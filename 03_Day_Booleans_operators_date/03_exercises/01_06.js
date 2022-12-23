console.log(4 > 3 && 10 < 12)       // true i true -> true
console.log(4 > 3 && 10 > 12)       // true i false -> false
console.log(4 > 3 || 10 < 12)       // true lub true -> true
console.log(4 > 3 || 10 > 12)       // true lub false -> true
console.log(!(4 > 3))               // -> 4 <= 3 -> false
console.log(!(4 < 3))               // -> 4 >= 3 -> true
console.log(!(false))               // true
console.log(!(4 > 3 && 10 < 12))    // -> 4 <= 3 || 10 >= 12 -> false lub false -> false
console.log(!(4 > 3 && 10 > 12))    // -> 4 <= 3 || 10 <= 12 -> false lub true -> true
console.log(!(4 === '4'))           // -> 4 !=== '4' -> true
console.log(!'python'.includes('on') && !'dragon'.includes('on'))   //!true i !true -> false i false -> false
