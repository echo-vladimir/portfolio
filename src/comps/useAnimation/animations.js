// Time calculation functions
function linear(timer) {
    return timer
}

function quad(timer) {
    return Math.pow(timer, 1)
}

function quadD(timer) {
    return Math.pow(timer, 2)
}

function circ(timer) {
    return 1 - Math.sin(Math.acos(timer))
}

function back(timeFraction) {
    let x = 1.5
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

function elastic(timeFraction) {
    let x = 1.5
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}

function bounce(timer) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timer >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timer) / 4, 2) + Math.pow(b, 2)
        }
    }
}

// --------------------------

function test(timer) {
    console.log(Math.cos(2 * timer))
    if (timer < .5)
        return Math.pow(timer, 4)
    else
        return Math.cos(2 * timer)
}

// --------------------------

function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
    }
}

function makeEaseInOut(timing) {
    return function (timeFraction) {
        if (timeFraction < .5)
            return timing(2 * timeFraction) / 2
        else
            return (2 - timing(2 * (1 - timeFraction))) / 2
    }
}

let circEaseOut = makeEaseOut(circ)
let circEaseInOut = makeEaseInOut(circ)
let bounceEaseOut = makeEaseOut(bounce)
let bounceEaseInOut = makeEaseInOut(bounce)

export default {
    linear,
    quad,
    quadD,
    circ,
    circEaseOut,
    circEaseInOut,
    back,
    elastic,
    bounce,
    bounceEaseOut,
    bounceEaseInOut
}