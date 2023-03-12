function showDateTime(dateObj) {
    console.log(`${dateObj.getDate()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`)
}

showDateTime(new Date())