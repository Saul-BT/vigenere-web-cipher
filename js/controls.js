import {encrypt, decrypt} from './vigenere.js';

var buttonEncrypt = document.getElementById('encrypt');
var buttonDecrypt = document.getElementById('decrypt');

buttonEncrypt.addEventListener('click', actionEncrypt);
buttonDecrypt.addEventListener('click', actionDecrypt);

var areaOutput = document.getElementById('output');

function actionEncrypt() {
    let key = document.getElementById('key').value;
    let phrase = document.getElementById('input').value;
    areaOutput.value = encrypt(key, phrase);
}

function actionDecrypt() {
    let key = document.getElementById('key').value;
    let phrase = document.getElementById('input').value;
    areaOutput.value = decrypt(key, phrase);
}