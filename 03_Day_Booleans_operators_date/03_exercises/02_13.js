let currDate = new Date()
let birthYear = parseInt(prompt("Enter your birth year:"))
let checkAge = currDate.getFullYear()-birthYear
if (checkAge >= 18)
    console.log("You are old enough to drive")
else console.log("You are not old enough to drive, you need to wait for", 18-(18-checkAge), "year(s)")
