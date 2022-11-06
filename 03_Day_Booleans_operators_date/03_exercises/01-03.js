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

// do testowania w przeglądarce
let length2 = parseFloat(prompt("Enter length:"))
let width2 = parseFloat(prompt("Enter width:"))
let resultAreaRectangle = length2 * width2
let resultPerimeterRectangle = 2 * (length2 + width2)
console.log("Area of rectangle is", resultAreaRectangle)
console.log("Perimeter of rectangle is", resultPerimeterRectangle)

// do testowania w przeglądarce
let radius = parseFloat(prompt("Enter radius:"))
let resultAreaCircle = Math.PI * radius * radius
let resultCircumferenceCircle = 2 * Math.PI * radius
console.log("Area of circle is", resultAreaCircle)
console.log("Circumference of circle is", resultCircumferenceCircle)

let y = 2 * 0 - 2
let x = (0 + 2) / 2
let x1y1 = [0, y]
let x2y2 = [x, 0]
let slope = (x2y2[1] - x1y1[1]) / (x2y2[0] - x1y1[0])
console.log("Slope of y = 2x - 2 is", slope,
            ", x-intercept is", x2y2,
            "and y-intercept is", x1y1)

let point1 = [2, 2]
let point2 = [6, 10]
let slope2 = (point2[1] - point1[1]) / (point2[0] - point1[0])
console.log("Slope of", point1, "and", point2, "is", slope2)


let delta = [0, -3]
let deltaResult = delta[1]*delta[1] + 6*delta[1] + 9
console.log("for y=" + deltaResult + " x value is " + delta[1])

// do testowania w przeglądarce
let hours = parseInt(prompt("Enter hours: "))
let ratePerHour = parseInt(prompt("Enter rate per hour: "))
console.log("Your weekly earning is ", hours*ratePerHour)

// do testowania w przeglądarce
let nameLength = prompt("Enter name:")
if(nameLength.length > 7)
    console.log("Your name is long")
else console.log("Your name is short")

// do testowania w przeglądarce
let nameLength2 = prompt("Enter name:")
let surnameLength2 = prompt("Enter surname:")
if(nameLength2.length > surnameLength2)
    console.log("Your name, ", nameLength2, "is longer than your surname, ", surnameLength2)
else console.log("Your name, ", nameLength2, "is shorter than your surname, ", surnameLength2)

let myAge = 250
let yourAge = 25
if(myAge < 0 && yourAge < 0)
    console.log("Wrong input!")
else if (myAge == yourAge)
    console.log("We're of the same age")
else if (myAge > yourAge)
    console.log("I am", myAge-yourAge, "years older than you")
else
    console.log("You are", yourAge-myAge, "years older than me")

// do testowania w przeglądarce
let birthYear = parseInt(prompt("Enter your birth year:"))
let checkAge = currDate.getFullYear()-birthYear
if (checkAge >= 18)
    console.log("You are old enough to drive")
else console.log("You are not old enough to drive, you need to wait for", 18-(18-checkAge), "year(s)")

// do testowania w przeglądarce
let yearsYouLive = parseInt(prompt("Enter your age:"))
console.log("You lived for", yearsYouLive*60*60*24*365, "seconds.")

console.log(currDate.getFullYear(), "-",
            currDate.getMonth(), "-",
            currDate.getDate(), " ",
            currDate.getHours(), ":",
            currDate.getMinutes())
console.log(currDate.getDate(), "-",
            currDate.getMonth(), "-",
            currDate.getFullYear(), " ",
            currDate.getHours(), ":",
            currDate.getMinutes())
            console.log(currDate.getDate(), "/",
            currDate.getMonth(), "/",
            currDate.getFullYear(), " ",
            currDate.getHours(), ":",
            currDate.getMinutes())

const resultDate = currDate.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
})
console.log(resultDate)