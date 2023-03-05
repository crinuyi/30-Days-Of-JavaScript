import countries from './countries.js';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let countriesWithLand = []
let longestCountryName = ''
let countriesWithFourChars = []
let countriesWithTwoOrMoreWords = []
let countriesReversed = []

for(let i=0; i<countries.length; i++) {
    if(countries[i].endsWith('land'))
        countriesWithLand.push(countries[i])
    if(countries[i].length > longestCountryName.length)
        longestCountryName = countries[i]
    if(countries[i].length == 4)
        countriesWithFourChars.push(countries[i])
    if(countries[i].includes(' '))
        countriesWithTwoOrMoreWords.push(countries[i])
}

for(let i=countries.length-1; i>=0; i--)
    countriesReversed.push(capitalizeFirstLetter(countries[i]))

// 04, 06
console.log(countriesWithLand)
// 05
console.log(longestCountryName)
// 07
console.log(countriesWithFourChars)
// 08
console.log(countriesWithTwoOrMoreWords)
// 09
console.log(countriesReversed)