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

const sortedCountries = []
for(let i=0; i<countries.length; i++)
    sortedCountries.push(countries[i])

sortedCountries.sort()

console.log(sortedCountries)