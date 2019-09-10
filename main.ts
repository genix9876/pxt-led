basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

//% color=#0fbc11 icon="\uf121"
namespace ledblink{
    //% blockId=PrintFunction weight=90 blockGap=40
    //% block="value of moisture sensor at pin %name"
    export function showname(name: string) {
        basic.showString(name)
    }
}