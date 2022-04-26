input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(9 - x)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        basic.showNumber(2 / x)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(2 * x)
    }
})
