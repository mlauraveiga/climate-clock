/*
@function flooper
@param {String|HTMLElement} flooperElement - flooper container, defaults to '.js-flooper'
@param {Object} [options] - containing the props described here at #options-and-defaults
*/

let fl = document.querySelectorAll(".js-flooper");
fl.forEach(function (f) {
    let myFlooper = new flooper(f, {
        autoPlay: true,
        bufferSize: 1,
        speed: 0.5,
        onFloop: () => { }, //noop
        onStart: () => { }, //noop
        onPlay: () => { }, //noop
        onPause: () => { }, //noop
        onSlowmotion: () => { }, //noop
    });
});