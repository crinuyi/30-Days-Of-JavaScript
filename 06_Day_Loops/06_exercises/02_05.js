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

countries.sort()
let countriesLength = []
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length)
}

console.log(countriesLength)