const POLYALPHABET = [];

export default POLYALPHABET;

for (let row = 0; row < 26; row++) {
	let i; let rowLetters = [];

	for (let col = 0, i = row; i < 26 + row && col < 26; i++, col++)
		rowLetters[col] = String.fromCharCode(i % 26 + 65);

	POLYALPHABET.push(rowLetters);
}

const reIgnoreChars = /[\s¡!¿?.,()]/;

export function encrypt(key, phrase) {
	key = key.toUpperCase().replace(/\s/g, '');
	phrase = phrase.toUpperCase().trim();
	let i; let n; let encrypted = '';

	for (i = 0, n = 0; i < phrase.length; i++, n++) {
		let phraseChar = phrase.charAt(i);

		if (reIgnoreChars.test(phraseChar)) {
			encrypted += phraseChar;
			n--;
		} else {
			encrypted += POLYALPHABET[key.charCodeAt(n % key.length) - 65][phraseChar.charCodeAt(0) - 65];
		}
	}
	return encrypted;
}

export function decrypt(key, encrypted) {
	key = key.toUpperCase().replace(/\s/g, '');
	encrypted = encrypted.toUpperCase().trim();
	let i; let n; let phrase = '';

	for (i = 0, n = 0; i < encrypted.length; i++, n++) {
		let encryptedChar = encrypted.charAt(i);
		let lineTarget = POLYALPHABET[key.charCodeAt(n % key.length) - 65];

		if (reIgnoreChars.test(encryptedChar)) {
			phrase += encryptedChar;
			n--;
		} else
			for (let j = 0; j < lineTarget.length; j++)
				if (lineTarget[j] === encryptedChar) phrase += POLYALPHABET[0][j];
	}
	return phrase;
}