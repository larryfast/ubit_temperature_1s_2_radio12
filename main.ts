let temperature = 0
radio.setGroup(12)
basic.forever(function () {
    temperature = input.temperature()
    radio.sendValue(control.deviceName(), temperature)
    serial.writeValue(control.deviceName(), temperature)
    basic.showString("" + (temperature))
    basic.pause(1000)
})
