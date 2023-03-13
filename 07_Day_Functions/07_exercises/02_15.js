function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function randomUserIp() {
    let ip = [0,0,0,0]
    for(let i=0; i<4; i++)
        ip[i] = randomIntFromInterval(0,254)
    let ipStr = `${ip[0]}:${ip[1]}:${ip[2]}:${ip[3]}`
    return ipStr
}

console.log(randomUserIp())