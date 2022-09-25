// ----- 01
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))

let challenge2 = 'Facebook, Google, Microsoft, ' +
                'Apple, IBM, Oracle, Amazon'
console.log(challenge2.split(', '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let challenge3 = 'You cannot end a sentence with because because because ' +
                'is a conjunction'
console.log(challenge3.indexOf('because'))
console.log(challenge3.lastIndexOf('because'))
console.log(challenge3.search('because'))

let challenge4 = ' 30 Days Of JavaScript '
console.log(challenge4.trim(' '))

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/gi))

let challenge5 = '30 Days of'
console.log(challenge5.concat(' JavaScript'))

console.log(challenge.repeat(2))


// ----- 02
var text1 = 'There is no exercise better for the heart than reaching down' +
            'and lifting people up.'
var text2 = 'Love is not patronizing and charity isn\'t about pity, it is' +
            'about love. Charity and love are the same -- with charity you give' +
            'love, so don\'t just give money but reach out your hand instead.'
console.log(text1)
console.log(text2)

var ten = '10'
console.log(typeof ten)
console.log(typeof parseInt(ten))

var floatValue = parseFloat('9.8')
console.log(Math.ceil(floatValue))

console.log('python'.includes('on'))
console.log('jargon'.includes('on'))

let jargonStr = 'I hope this course is not full of jargon'
console.log(jargonStr.includes('jargon'))

console.log(Math.random() * (101)) //od 0 do 100 włącznie
console.log(Math.random() * (101 - 50)) + 50 //od 50 do 100 włącznie
console.log(Math.random() * (256)) //od 0 to 255 włącznie

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

console.log("1 1 1 1 1\
            2 1 2 4 8\
            3 1 3 9 27\
            4 1 4 16 64\
            5 1 5 25 125")

console.log(challenge3.substring(
                            challenge3.indexOf('b'),
                            challenge3.lastIndexOf('e') + 1
))

// ----- 03
let challenge6 = 'Love is the best thing in this world. Some found their love \
                and some are still looking for their love.'
console.log(challenge6.match(/love/gi).length)

console.log(challenge3.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re \
                $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
                ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s \
                mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the \
                $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%/g, '')
                    .replace(/#/g, '')
                    .replace(/@/g, '')
                    .replace(/&/g, '')
                    .replace(/\$/g, '')
                    .replace(/;/g, ''))

let challenge7 = 'He earns 5000 euro from salary per month, 10000 euro annual \
                bonus, 15000 euro online courses per month.'
let eurosArr = challenge7.match(/\d+/g)
let euros = 0
for(let i = 0; i<eurosArr.length; i++) {
    let euroNum = Number(eurosArr[i])
    euros += euroNum
}
console.log(euros)