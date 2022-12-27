import countries from './countries.js';

let firstTenCountr = countries.slice(0, 10)
console.log(firstTenCountr)

let index = (countries.length-1)/2
if(countries.length%2 == 0) {
    let newIndex = Math.ceil(index)
    let firstHalf = countries.slice(0, newIndex)
    let secondHalf = countries.slice(newIndex, countries.length)
    console.log(countries[parseInt(index)])
    console.log(countries[newIndex])
    console.log(firstHalf)
    console.log(secondHalf)
} else {
    console.log(countries[index])
    let firstHalf = countries.slice(0, index)
    let secondHalf = countries.slice(index, countries.length)
    console.log(firstHalf, secondHalf)
}



