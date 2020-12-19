radio.onReceivedNumber(function (receivedNumber) {
    if (!(sender)) {
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    sender = true
})
let sender = false
basic.showIcon(IconNames.Heart)
sender = false
radio.setGroup(50)
radio.sendNumber(0)
weatherbit.startWindMonitoring()
basic.forever(function () {
    if (sender) {
        led.plotBarGraph(
        weatherbit.windSpeed(),
        20
        )
        radio.sendNumber(weatherbit.windSpeed())
    }
    basic.pause(500)
})
