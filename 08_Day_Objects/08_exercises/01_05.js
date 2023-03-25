const dog = {
    name: 'Shoob',
    legs: 'long',
    color: 'black',
    age: 7,
    bark: function() {
        return 'woof woof'
    }
}

dog.breed = 'shiba inu'
dog.getDogInfo = function() {
    return dog
}

console.log(dog)
console.log(dog.getDogInfo())