let sound_Level = input.soundLevel()
input.setSoundThreshold(SoundThreshold.Loud, 100)
basic.forever(function () {
    if (10 < input.soundLevel()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else {
        basic.clearScreen()
    }
})
