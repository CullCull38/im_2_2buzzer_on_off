input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("C B C B C B C B ", 120)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C B C B C B C B ", 120)
    }
})
music.setVolume(255)
