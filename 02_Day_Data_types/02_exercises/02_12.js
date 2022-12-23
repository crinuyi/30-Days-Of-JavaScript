let challenge3 = 'You cannot end a sentence with because because because ' +
                'is a conjunction'
console.log(challenge3.substring(
    challenge3.indexOf('b'),
    challenge3.lastIndexOf('e') + 1
))