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
let countriesFullList = []
for (let i = 0; i < countries.length; i++) {
    let country = []
    country.push(
        countries[i], 
        countries[i].toUpperCase().substring(0,3), countries[i].length)
        countriesFullList.push(country)
}

console.log(countriesFullList)