function userIdGenerator() {
    return Math.random().toString(36).substring(2, 8);
}
//toString(36) - 0-9 + alfabet

console.log(userIdGenerator())