// ----- 01
let firstName = 'John'
let lastName = 'Smith'
let city = 'Paris'
let country = 'France'
let age = 47
let isMarried = true
let marriageYear = 1985
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof city)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof marriageYear)

console.log(10 == '10')
console.log(10 === '10')

console.log(10 == parseInt('9.8'))

console.log(lastName.length == city.length)
console.log(age == 47)
console.log(marriageYear > 1900)
console.log(firstName == lastName)
console.log(marriageYear > 2000)
console.log(typeof age == String)

console.log(4 > 3)      // true
console.log(4 >= 3)     // true
console.log(4 < 3)      // false
console.log(4 <= 3)     // false
console.log(4 == 4)     // true
console.log(4 === 4)    // true
console.log(4 != 4)     // false
console.log(4 !== 4)    // false
console.log(4 != '4')   // FALSE
console.log(4 == '4')   // true
console.log(4 === '4')  // false
console.log('python'.length != 'jargon'.length) // 5 (od 0)

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

let currDate = new Date()
console.log(currDate.getFullYear())
console.log(currDate.getMonth() + 1)
console.log(currDate)
console.log(currDate.getDay() + 1)
console.log(currDate.getHours())
console.log(currDate.getMinutes())
console.log(currDate.getTime())


// ----- 02
// do testowania w przeglądarce
let base = parseInt(prompt('Enter base: '))
let height = parseInt(prompt('Enter height: '))
console.log('The area of the triangle is', 0.5 * base * height)

// do testowania w przeglądarce
let a = parseInt(prompt('Enter side a: '))
let b = parseInt(prompt('Enter side b: '))
let c = parseInt(prompt('Enter side c: '))
console.log('The perimeter of the triangle is', a + b + c)