// Función de sustitución S-Box
var S_BOX = [
    [9, 4, 10, 11],
    [13, 1, 8, 5],
    [6, 2, 0, 3],
    [12, 14, 15, 7]
];
// Función de permutación P-Box
var P_BOX = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
];
// Subclaves generadas
var SUBKEYS = [
    [0, 1, 2, 3],
    [4, 5, 6, 7]
];
// Función de multiplicación en el campo de Galois
function galoisMultiplication(a, b) {
    var p = 0;
    for (var i = 0; i < 8; i++) {
        if (b & 1) {
            p ^= a;
        }
        var carry = a & 0x80;
        a <<= 1;
        if (carry) {
            a ^= 0x1b;
        }
        b >>= 1;
    }
    return p;
}
// Función de sustitución no lineal
function substituteNibbles2(nibble) {
    return S_BOX[(nibble >> 2) & 0x3][nibble & 0x3];
}
// Función de permutación
function permuteNibbles(nibble) {
    return P_BOX[(nibble >> 2) & 0x3][nibble & 0x3];
}
// Función para expandir una clave de 8 bits a una clave de 16 bits
function expandKey(key) {
    var expandedKey = [[0, 0, 0, 0], [0, 0, 0, 0]];
    expandedKey[0][0] = key[0];
    expandedKey[0][1] = key[1];
    expandedKey[0][2] = key[0] ^ (substituteNibbles2(key[2]) ^ 0x80);
    expandedKey[0][3] = key[1] ^ substituteNibbles2(key[3]);
    expandedKey[1][0] = expandedKey[0][2] ^ (substituteNibbles2(expandedKey[0][2]) ^ 0x30);
    expandedKey[1][1] = expandedKey[0][3] ^ substituteNibbles2(expandedKey[0][3]);
    expandedKey[1][2] = expandedKey[1][0] ^ (substituteNibbles2(expandedKey[1][0]) ^ 0x60);
    expandedKey[1][3] = expandedKey[1][1] ^ substituteNibbles2(expandedKey[1][1]);
    return expandedKey;
}
// Función para generar las subclaves
function generateSubkeys(key) {
    SUBKEYS = expandKey(key);
}
// Función para encriptar un bloque de 16 bits usando S-AES
function encryptBlock(block) {
    var state = [[block[0], block[1]], [block[2], block[3]]];
    // Ronda 1
    state = addRoundKey(state, SUBKEYS[0]);
    state = substituteNibbles(state);
    state = shiftRows(state);
    state = mixColumns(state);
    state = addRoundKey(state, SUBKEYS[1]);
    // Ronda 2
    state = substituteNibbles(state);
    state = shiftRows(state);
    state = addRoundKey(state, SUBKEYS[0]);
    return [state[0][0], state[0][1], state[1][0], state[1][1]];
}
// Función para encriptar en modo CBC
function encryptCBC(plaintext, key, iv) {
    var ciphertext = [];
    var previousBlock = iv.slice(); // Bloque inicial
    for (var i = 0; i < plaintext.length; i++) {
        var block = [plaintext[i][0] ^ previousBlock[0], plaintext[i][1] ^ previousBlock[1]]; // Bloque actual
        var encryptedBlock = encryptBlock(block);
        ciphertext.push(encryptedBlock);
        previousBlock = encryptedBlock;
    }
    return ciphertext;
}
// Función para añadir la clave de ronda
function addRoundKey(state, roundKey) {
    return [
        [state[0][0] ^ roundKey[0], state[0][1] ^ roundKey[1]],
        [state[1][0] ^ roundKey[2], state[1][1] ^ roundKey[3]]
    ];
}
// Función para sustituir los nibbles usando la S-Box
function substituteNibbles(state) {
    var substitutedState = [];
    for (var i = 0; i < state.length; i++) {
        var row = [];
        for (var j = 0; j < state[i].length; j++) {
            row.push(substituteNibbles(state[i][j]));
        }
        substitutedState.push(row);
    }
    return substitutedState;
}
// Función para desplazar las filas
function shiftRows(state) {
    return [
        [state[0][0], state[0][1]],
        [state[1][1], state[1][0]]
    ];
}
// Función para mezclar las columnas
function mixColumns(state) {
    var mixedState = [[0, 0], [0, 0]];
    mixedState[0][0] = galoisMultiplication(state[0][0], 2) ^ galoisMultiplication(state[0][1], 3);
    mixedState[0][1] = galoisMultiplication(state[0][0], 3) ^ galoisMultiplication(state[0][1], 2);
    mixedState[1][0] = galoisMultiplication(state[1][0], 2) ^ galoisMultiplication(state[1][1], 3);
    mixedState[1][1] = galoisMultiplication(state[1][0], 3) ^ galoisMultiplication(state[1][1], 2);
    return mixedState;
}
// Ejemplo de uso
var plaintexts = [
    [0x75, 0x6e],
    [0x69, 0x76],
    [0x65, 0x72],
    [0x73, 0x69],
    [0x64, 0x61],
    [0x64, 0x64],
    [0x69, 0x73],
    [0x74, 0x72],
    [0x69, 0x74],
    [0x61, 0x6c] //al
];
var key = [0x2b, 0x28, 0xab, 0x09];
/**
** fuerza bruta
*/
function decimalToHexadecimal(decimal) {
    return decimal.toString(16).padStart(2, '0');
}
// Función para convertir una cadena hexadecimal en un número decimal
function hexadecimalToDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}
// Función para realizar un ataque de fuerza bruta
function bruteForceAttack(ciphertexts, iv) {
    var targetCiphertexts = ciphertexts.map(function (block) { return block.map(decimalToHexadecimal); });
    var targetIV = iv.map(decimalToHexadecimal);
    for (var key_1 = 0; key_1 <= 0xFFFFFFFF; key_1++) {
        var keyBytes = [
            (key_1 & 0xFF000000) >>> 24,
            (key_1 & 0x00FF0000) >>> 16,
            (key_1 & 0x0000FF00) >>> 8,
            key_1 & 0x000000FF
        ];
        generateSubkeys(keyBytes);
        var decryptedPlaintexts = encryptCBC(ciphertexts, keyBytes, iv).map(function (block) { return block.map(decimalToHexadecimal); });
        if (decryptedPlaintexts[0][0] === targetCiphertexts[0][0] &&
            decryptedPlaintexts[0][1] === targetCiphertexts[0][1] &&
            decryptedPlaintexts[1][0] === targetCiphertexts[1][0] &&
            decryptedPlaintexts[1][1] === targetCiphertexts[1][1] &&
            decryptedPlaintexts[2][0] === targetCiphertexts[2][0] &&
            decryptedPlaintexts[2][1] === targetCiphertexts[2][1] &&
            decryptedPlaintexts[3][0] === targetCiphertexts[3][0] &&
            decryptedPlaintexts[3][1] === targetCiphertexts[3][1] &&
            decryptedPlaintexts[4][0] === targetCiphertexts[4][0] &&
            decryptedPlaintexts[4][1] === targetCiphertexts[4][1] &&
            decryptedPlaintexts[5][0] === targetCiphertexts[5][0] &&
            decryptedPlaintexts[5][1] === targetCiphertexts[5][1] &&
            decryptedPlaintexts[6][0] === targetCiphertexts[6][0] &&
            decryptedPlaintexts[6][1] === targetCiphertexts[6][1] &&
            decryptedPlaintexts[7][0] === targetCiphertexts[7][0] &&
            decryptedPlaintexts[7][1] === targetCiphertexts[7][1] &&
            decryptedPlaintexts[8][0] === targetCiphertexts[8][0] &&
            decryptedPlaintexts[8][1] === targetCiphertexts[8][1] &&
            decryptedPlaintexts[9][0] === targetCiphertexts[9][0] &&
            decryptedPlaintexts[9][1] === targetCiphertexts[9][1]) {
            var decryptedIV = encryptBlock(iv.map(decimalToHexadecimal))
                .map(decimalToHexadecimal);
            if (decryptedIV[0] === targetIV[0] && decryptedIV[1] === targetIV[1]) {
                console.log('Clave encontrada:', keyBytes.map(decimalToHexadecimal).join(' '));
                return;
            }
        }
    }
    console.log('Clave no encontrada.');
}
// Ejemplo de uso
var ciphertexts = [
    [0x2e, 0x72],
    [0x9f, 0xb9],
    [0x84, 0x66],
    [0x0e, 0x00],
    [0x62, 0xdb],
    [0xc7, 0xe2],
    [0xad, 0x77],
    [0x4d, 0xa8],
    [0x87, 0x51],
    [0xd6, 0x1d]
];
var iv = [0x1a, 0x4b];
bruteForceAttack(ciphertexts, iv);
/*
* 4,294,967,296 claves / 1,000,000 claves/segundo = 4,294.97 segundos
* Esto equivale aproximadamente a 1 hora y 11 minutos. Sin embargo, ten en cuenta que esta
*/ 
