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

let longestCountryName = 0
let longestCountryNameIndex = 0
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestCountryName) {
        longestCountryName = countries[i].length
        longestCountryNameIndex = i
    }
}

console.log(countries[longestCountryNameIndex])