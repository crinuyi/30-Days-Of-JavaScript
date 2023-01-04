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

let isContainingLand = false
let countiesWithLand = []
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        isContainingLand = true
        countiesWithLand.push(countries[i])
    }
}

if (isContainingLand)
    console.log(countiesWithLand)
else console.log('All these countries are without land')