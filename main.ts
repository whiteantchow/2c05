let changes = 0
input.onButtonPressed(Button.A, function () {
    changes = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showNumber(changes)
})
