joystick.onButtonEvent(joystick.JoystickPin.P15, joystick.ButtonType.up, function () {
    radio.sendValue("C", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("A", 0)
})
joystick.onButtonEvent(joystick.JoystickPin.P8, joystick.ButtonType.up, function () {
    radio.sendValue("P", 0)
})
joystick.onButtonEvent(joystick.JoystickPin.P13, joystick.ButtonType.down, function () {
    radio.sendValue("E", 1)
})
joystick.onButtonEvent(joystick.JoystickPin.P14, joystick.ButtonType.up, function () {
    radio.sendValue("D", 0)
})
joystick.onButtonEvent(joystick.JoystickPin.P12, joystick.ButtonType.down, function () {
    radio.sendValue("F", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("A", 1)
})
joystick.onButtonEvent(joystick.JoystickPin.P8, joystick.ButtonType.down, function () {
    radio.sendValue("P", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("B", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("B", 1)
})
joystick.onButtonEvent(joystick.JoystickPin.P12, joystick.ButtonType.up, function () {
    radio.sendValue("F", 0)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
joystick.onButtonEvent(joystick.JoystickPin.P13, joystick.ButtonType.up, function () {
    radio.sendValue("E", 0)
})
joystick.onButtonEvent(joystick.JoystickPin.P14, joystick.ButtonType.down, function () {
    radio.sendValue("D", 1)
})
joystick.onButtonEvent(joystick.JoystickPin.P15, joystick.ButtonType.down, function () {
    radio.sendValue("C", 1)
})
serial.redirectToUSB()
joystick.initJoystickBit()
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendValue("X", joystick.getRockerValue(joystick.rockerType.X))
    radio.sendValue("Y", joystick.getRockerValue(joystick.rockerType.Y))
})
