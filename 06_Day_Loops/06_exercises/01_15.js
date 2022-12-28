let id = ""
for (let i = 0; i < 6; i++) {
    let char = String.fromCharCode(33 + Math.floor(Math.random() * 93))
    id += char
}
console.log(id)