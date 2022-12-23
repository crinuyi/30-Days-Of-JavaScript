let y = 2 * 0 - 2
let x = (0 + 2) / 2
let x1y1 = [0, y]
let x2y2 = [x, 0]
let slope = (x2y2[1] - x1y1[1]) / (x2y2[0] - x1y1[0])
console.log("Slope of y = 2x - 2 is", slope,
            ", x-intercept is", x2y2,
            "and y-intercept is", x1y1)