let month = prompt('Give me a month:').toLowerCase()
if (month == 'september' ||
    month == 'october' ||
    month == 'november')
    alert(`The season is Autumn`)
else if (month == 'December' ||
    month == 'january' ||
    month == 'february')
    alert(`The season is Winter`)
else if (month == 'march' ||
    month == 'april' ||
    month == 'may')
    alert(`The season is Spring`)
else if (month == 'june' ||
    month == 'july' ||
    month == 'august')
    alert(`The season is Summer`)
else alert('Invalid input')