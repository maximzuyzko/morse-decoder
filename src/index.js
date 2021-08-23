const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const LETTER_LENGTH = 10;
const SYMBOL_LENGTH = 2;
const DOT = '10';
const DASH = '11';

function decode(expr) {
    let arr = expr.split('');
    let result = [];

    while (arr.length) {
        let letterDecoded = arr.splice(LETTER_LENGTH * -1);
        let letterMorse = '';

        if (letterDecoded.join('') === "**********") {
            result.push(' ');
            continue;
        }

        for (i = 0; i < letterDecoded.length; i += SYMBOL_LENGTH) {
            let symbol = letterDecoded.slice(i, i + SYMBOL_LENGTH).join('');
            letterMorse += symbol === DOT ? '.' : symbol === DASH ? '-' : '';
        }
        result.push(MORSE_TABLE[letterMorse]);
    }
    return result.reverse().join('');
}


module.exports = {
    decode
}