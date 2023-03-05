const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let acronym = ''
for (let i=0; i<mernStack.length; i++) 
    acronym = acronym.concat(mernStack[i].charAt(0))

console.log(acronym)