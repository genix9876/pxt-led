basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);


//% color = #008000
namespace ledblink{
    //% blockId=PrintFunction weight=10 blockGap=22
    //% block="value of moisture sensor at pin %name"
    export function showname(name: string) {
        basic.showString(name)
    }
}