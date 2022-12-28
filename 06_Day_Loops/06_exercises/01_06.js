console.log('i      i^2     i^3')
for (let k = 0; k <= 10; k++) {
    let kLength = k.toString().length
    let k2Length = (k*k).toString().length
    let k3Length = (k*k*k).toString().length
    if ((kLength == 0 && k2Length == 0 && k3Length == 0) ||
        (kLength == 1 && k2Length == 1 && k3Length == 1) ||
        (kLength == 1 && k2Length == 1 && k3Length == 2))
        console.log(`${k}       ${k*k}      ${k*k*k}`)
    else if ((kLength == 1 && k2Length == 2 && k3Length == 2) ||
             (kLength == 1 && k2Length == 2 && k3Length == 3))
        console.log(`${k}       ${k*k}     ${k*k*k}`)
    else console.log(`${k}      ${k*k}    ${k*k*k}`)
}