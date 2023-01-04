const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

let countriesWithFiveCharas = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        countriesWithFiveCharas.push(countries[i])
    }
}

console.log(countriesWithFiveCharas)