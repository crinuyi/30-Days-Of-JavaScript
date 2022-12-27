const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages[0], ages[ages.length-1])
console.log(ages)

let index = (ages.length-1)/2
if(ages.length%2 == 0) {
    let firstIndex = Math.floor(index)
    let secondIndex = Math.ceil(index)
    console.log((ages[firstIndex]+ages[secondIndex])/2)
} else console.log(ages[index]/2)

let sum = ages.reduce((a,b) => a+b, 0) //reduce can be used to iterate through the array, adding the current element value to the sum of the previous element values.
console.log(sum/ages.length)

console.log(Math.abs(ages[0]-ages[ages.length-1]))