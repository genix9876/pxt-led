basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);


//% color = #0000f0 icon = "\uf121"
namespace ledblink{
    //% blockId=blinkled weight 70 blockGap = 30
    //% block="blink led at pin %p| digital write %s" 
    export function blinkled(p: DigitalPin, s: number) {
        pins.digitalWritePin(p, s);
    }
    //% blockId=printName weight=60 blockGap=30
    //% block="Enter a string to print %name"
    export function showname(name: string) {
        basic.showString(name)
    }
}