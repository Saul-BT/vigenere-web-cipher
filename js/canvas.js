import POLYALPHABET from './vigenere.js';

var ctx = document.getElementById("polyAlphabet").getContext('2d');

ctx.font = "10px Arial";

for (let row = 0; row < POLYALPHABET.length; row++) {
    let x = 12 + row * 420 / 26;

    for (let col = 0; col < POLYALPHABET[row].length; col++) {
        let y = 20 + col * 420 / 26;
        let dif = Math.abs(col - row);
        let green = ('00' + (dif*10).toString(16)).slice(-2);
        let hexColor = `#ff${green}64`;

        ctx.fillStyle=hexColor;
        ctx.fillText(POLYALPHABET[row][col], x, y);
    }
}