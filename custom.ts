
//% weight=0 color=#0fbc11  icon="\uf11b" block="Joystick"
namespace joystick {

    export enum JoystickPin {
        //% block="C"
        P15 = DAL.MICROBIT_ID_IO_P15,
        //% block="D"
        P14 = DAL.MICROBIT_ID_IO_P14,
        //% block="E"
        P13 = DAL.MICROBIT_ID_IO_P13,
        //% block="F"
        P12 = DAL.MICROBIT_ID_IO_P12,
        //% block="P"
        P8 = DAL.MICROBIT_ID_IO_P8
    }

    export enum rockerType {
        //% block="X"
        X,
        //% block="Y"
        Y
    }

    export enum ButtonType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }

    /**
    * initialization joystick:bit
    */
    //% blockId=initJoystick block="initialization joystick:bit"
    export function initJoystickBit(): void {
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
    }

    /**
    * get Button
    */
    //% blockId=getButton block="button %button is pressed"
    export function getButton(button: JoystickPin): boolean {
        return (pins.digitalReadPin(<number>button) == 0 ? true : false)
    }

    /**
    * Registers code to run when a joystick:bit event is detected.
    */
    //% blockId=onButtonEvent block="on button %button|is %event" blockExternalInputs=false
    export function onButtonEvent(button: JoystickPin, event: ButtonType, handler: Action): void {
        pins.onPulsed(<number>button, <number>event, handler);
    }

    /**
    * get rocker value
    * @param rocker describe parameter here, eg: 1
    */
    //% blockId=getRockerValue block="rocker value of %rocker"
    export function getRockerValue(rocker: rockerType): number {
        switch (rocker) {
            case rockerType.X: return pins.analogReadPin(AnalogPin.P1);
            case rockerType.Y: return pins.analogReadPin(AnalogPin.P2);
            default: return 0;
        }
    }
}