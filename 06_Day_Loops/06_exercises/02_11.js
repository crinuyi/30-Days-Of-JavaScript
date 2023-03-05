const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let wordWithLongestName = ''
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > wordWithLongestName.length) {
        wordWithLongestName = webTechs[i]
    }
}

console.log(wordWithLongestName)