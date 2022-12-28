function isPrimeNumber(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

for ( let i = 0; i <= 100; i++) {
    if (i==0 || i==1)
        console.log('Number needs to be higher than one!')
    else if (isPrimeNumber(i))
        console.log(`${i} is a prime number`)
    else console.log(`${i} is not a prime number`)
}