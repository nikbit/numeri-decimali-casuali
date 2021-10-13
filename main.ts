let Num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    Num1 = randint(0, 100)
    num2 = randint(0, 100)
    if (Num1 % num2 != 0) {
        basic.showNumber(Num1 / num2)
    }
})
