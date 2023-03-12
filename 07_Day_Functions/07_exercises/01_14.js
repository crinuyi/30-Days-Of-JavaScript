function checkSeason(month) {
    if (month == 'January' &&
        month == 'February' &&
        month == 'December')
        return 'Winter'
    else if (month == 'March' &&
            month == 'April' &&
            month == 'May')
        return 'Spring'
    else if (month == 'June' &&
            month == 'July' &&
            month == 'August')
        return 'Summer'
    else return 'Autumn'
}

console.log(checkSeason('September'))