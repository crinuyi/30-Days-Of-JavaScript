function userIdGeneratedByUser(length, amount) {
    if(amount == 0)
        return null
    else if (amount == 1)
        return Math.random().toString(36).substring(2, length+2);

    let ids = []
    for(let i=0; i<amount; i++) {
        ids.push(Math.random().toString(36).substring(2, length+2))
    }
    return ids
}

let length = 5
let amount = 3
console.log(userIdGeneratedByUser(length, amount))