function calculateBmi(weight, height) {
    return weight / (height * height)
}

function checkBmi(bmi) {
    if(bmi < 18.5)
        return 'underweight'
    if(bmi >= 18.5 && bmi < 25)
        return 'normal weight'
    if(bmi >= 25 && bmi < 29.9)
        return 'overweight'
    else return 'obese'
}

console.log(checkBmi(calculateBmi(80, 1.85)))