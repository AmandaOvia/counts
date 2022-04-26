input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(9 - x)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(3)
        basic.showNumber(5)
        basic.showNumber(7)
        basic.showNumber(9)
        basic.showNumber(11)
        basic.showNumber(13)
        basic.showNumber(15)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(2 * x)
    }
})
