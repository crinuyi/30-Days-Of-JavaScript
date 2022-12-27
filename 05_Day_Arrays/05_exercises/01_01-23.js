const array = []

const array2 = Array(10).fill('value')

console.log(array2.length)

console.log(array2[0])
console.log(array2[array2.length - 1])
console.log(array2[parseInt(array2.length/2)])

const mixedDataTypes = [
    'test',
    1,
    false,
    [1,2,3],
    2,
    'second test'
]

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])
console.log(itCompanies[parseInt(itCompanies.length/2)])

for(let i=0; i<itCompanies.length; i++)
    console.log(itCompanies[i])

for(let i=0; i<itCompanies.length; i++)
    console.log(itCompanies[i].toUpperCase())

for(let i=0; i<itCompanies.length-3; i++)
    process.stdout.write(`${itCompanies[i]}, `)
process.stdout.write(`${itCompanies[itCompanies.length - 2]} and ${itCompanies[itCompanies.length - 1]} are big IT companies. \r`)

if(itCompanies.includes('Microsoft'))
    console.log('The company exists in the array')
else console.log('Company is not found')

for(let i=0; i< itCompanies.length-1; i++) 
    if(itCompanies[i].includes('oo')) //2x o is enough to check if there's more than one
        console.log(itCompanies[i])

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))

console.log(itCompanies[parseInt(itCompanies.length/2)])

console.log(itCompanies.shift())

itCompanies.splice(parseInt(itCompanies.length/2), 1)
console.log(itCompanies)

console.log(itCompanies.pop())

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)