//if else 
let a = 4
let b = 3

if (a == b) console.log(`${a} is the same as ${b}`)
else if (a > b) console.log(`${a} is greater than ${b}`)
else console.log(`${b} is greater than ${a}`)

let check = function(){ return a > b };
check ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)