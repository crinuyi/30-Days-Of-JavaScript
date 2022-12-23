let myAge = 25
let yourAge = prompt("Enter your age:")
if (yourAge < 0)
    alert("Invalid age")
else if (myAge == yourAge)
    alert("We have the same age")
else if (myAge > yourAge)
    alert(`I am ${myAge - yourAge} older than you`)
else alert(`You are ${yourAge - myAge} older than me`)