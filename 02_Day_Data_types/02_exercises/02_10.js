let expectedString = 'JavaScript'
let expectedStringAscii = []
let resultCharAscii = []
for(let i = 0; i < expectedString.length; i++) {
    expectedStringAscii.push(
        expectedString.charCodeAt(i)
    )
}
for(let i = 0; i < expectedString.length; i++) {
    let expectedCharAscii = expectedString.charCodeAt(i)
    while(true) {
        resultCharAscii = []
        for(let j = 0; j < 200; j++) {
            //tablica ASCII - od 65 do 122
            resultCharAscii.push(Math.floor(Math.random() * (123 - 65) + 65))
            if(resultCharAscii[j] == expectedCharAscii) {
                console.log(String.fromCharCode(resultCharAscii[j]))
                break
            }
        }
        break
    }
}