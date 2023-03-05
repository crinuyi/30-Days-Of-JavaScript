const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let webTechsLen = []
  for (let i=0; i<webTechs.length; i++) {
    webTechsLen.push([webTechs[i], webTechs[i].length])
  }

  console.log(webTechsLen)