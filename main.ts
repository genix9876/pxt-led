basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);


//% color = #008000
namespace ledblink{
    // //% blockId=blinkled weight 70 blockGap = 30
    // //% block="blink led at pin %p| digital write %s" 
    // export function blinkled(p: DigitalPin, s: number) {
    //     pins.digitalWritePin(p, s);
    // }

    //% blockId=PrintFunction weight=10 blockGap=22
    //% block="value of moisture sensor at pin %name"
    export function showname(name: string) {
        basic.showString(name)
    }
}