function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function checkIfLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}

let input = prompt('Enter a month:').toLowerCase()
let month = capitalizeFirstLetter(input)
if(month == "January" ||
    month == "March" ||
    month == "May" ||
    month == "July" ||
    month == "August" ||
    month == "October" ||
    month == "December")
    alert(`${month} has 31 days`)
else if(month == "February") {
    let currYear = new Date().getFullYear()
    if (checkIfLeapYear(currYear))
        alert(`${month} has 29 days`)
    else alert(`${month} has 28 days`)
}
else alert(`${month} has 30 days`)