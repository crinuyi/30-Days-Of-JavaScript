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
let countries2 = []
for (let i = 0; i < countries.length; i++)
    countries2.push(countries[i].toUpperCase())

console.log(countries2)