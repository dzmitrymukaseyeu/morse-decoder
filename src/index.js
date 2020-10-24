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

function decode(expr) {
    let arr = [];
    let word = [];
    
    for ( let i = 0 ; i <= expr.length - 9 ; i += 10 ) {
        arr.push( expr.slice( i, i + 10 ) );
    }

    for ( let str of arr ) {

        if ( str == '**********' ) {
            word.push( ' ' );
        } else {

            let letter = [];
            let morseLetter = [];

            for ( let j = 0 ; j <= str.length ; j += 2 ) {
                letter.push( str.slice( j, j + 2 ) );
            }

            for ( let morse of letter ) {
                if ( morse == '10') morseLetter.push( '.' );
                if ( morse == '11') morseLetter.push( '-' );
            }
            
            morseLetter = morseLetter.join( '' );
            word.push( MORSE_TABLE[morseLetter] );
        }

    }

    return word.join( '' );
}

module.exports = {
    decode
}