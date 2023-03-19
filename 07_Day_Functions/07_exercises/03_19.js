function areItemsUnique(arr) {
    for(let i=0; i<arr.length; i++) {
        let amount = 0
        for(let j=0; j<arr.length; j++) {
            if(arr[i] == arr[j])
                amount++
        }
        if(amount > 1)
            return false
    }
    return true
} 

function getRandomFrom0To9(){
    return Math.floor(Math.random() * 10);
}

function sevenRandomNumbers() {
    let arr = []
    arr.push(getRandomFrom0To9())
    for(let i=1; i<7; i++) {
        do {
            arr.push(getRandomFrom0To9())
            if(areItemsUnique(arr))
                break;
            arr.pop()
        } while(true);
    }
    return arr
}

console.log(sevenRandomNumbers())