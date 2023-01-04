let length = prompt("Length of ID?")
let id = ""
for (let i = 0; i < length; i++) {
    let char = String.fromCharCode(33 + Math.floor(Math.random() * 93))
    id += char
}
console.log(id)