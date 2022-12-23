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