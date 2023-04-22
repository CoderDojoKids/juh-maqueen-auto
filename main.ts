radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 250)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 250)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (receivedNumber == 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 250)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
maqueen.motorStop(maqueen.Motors.All)
radio.setGroup(11)
basic.forever(function () {
	
})
