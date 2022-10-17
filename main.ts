let changes = 0
input.onButtonPressed(Button.A, function () {
    changes = randint(1, 6)
})
input.onButtonPressed(Button.AB, function () {
    changes = 0
})
input.onButtonPressed(Button.B, function () {
    changes = 3
    basic.showNumber(changes)
    while (changes > 0) {
        changes += -1
        basic.showNumber(changes)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
basic.forever(function () {
	
})
