function isEmpty(arg) {
    if(arg == null ||
        arg == "" ||
        arg == [] ||
        arg == undefined)
        return true
    else return false
}

console.log(isEmpty([1,2,3]))
console.log(isEmpty(null))