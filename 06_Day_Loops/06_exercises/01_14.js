function getRandomNum(){
    return new Date().getTime().toString() + Math.floor(Math.random()*1000000);
}

let numbers = []
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomNum())
}
console.log(numbers)