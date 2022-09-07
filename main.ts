input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
basic.showIcon(IconNames.Skull)
basic.showString("Hello!")
basic.showArrow(ArrowNames.South)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Rollerskate)
})
