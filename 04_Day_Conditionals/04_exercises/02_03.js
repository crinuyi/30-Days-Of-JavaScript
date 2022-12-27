function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let today = prompt('What is the day today?').toLowerCase()
todayCap = capitalizeFirstLetter(today)
if(todayCap == 'Saturday' || todayCap == 'Sunday')
    alert(`${todayCap} is a weekend`)
else if (todayCap == 'Monday' ||
        todayCap == 'Tuesday' ||
        todayCap == 'Wednesday' ||
        todayCap == 'Thursday' ||
        todayCap == 'Friday')
    alert(`${todayCap} is a working day`)
else alert('Invalid data')