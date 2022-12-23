let challenge7 = 'He earns 5000 euro from salary per month, 10000 euro annual \
                bonus, 15000 euro online courses per month.'
let eurosArr = challenge7.match(/\d+/g)
let euros = 0
for(let i = 0; i<eurosArr.length; i++) {
    let euroNum = Number(eurosArr[i])
    euros += euroNum
}
console.log(euros)