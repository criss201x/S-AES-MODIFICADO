// Implementación del algoritmo S-AES con modificaciones

// Nuevas cajas de sustitución S complementarias
const S_BOX_1: number[][] = [
  [9, 4, 10, 11],
  [13, 1, 8, 5],
  [6, 2, 0, 3],
  [12, 14, 15, 7]
];

const S_BOX_2: number[][] = [
  [3, 8, 11, 1],
  [9, 12, 2, 13],
  [0, 4, 6, 5],
  [10, 14, 7, 15]
];

// Nueva política de corrimiento de ShiftRows
function shiftRows(state: number[]): void {
  const temp = state[1];
  state[1] = state[3];
  state[3] = temp;
}

// Nuevas matrices de MixColumns complementarias
const MIX_COLUMNS_MATRIX_1: number[][] = [
  [0x02, 0x03, 0x01, 0x01],
  [0x01, 0x02, 0x03, 0x01],
  [0x01, 0x01, 0x02, 0x03],
  [0x03, 0x01, 0x01, 0x02]
];

const MIX_COLUMNS_MATRIX_2: number[][] = [
  [0x0E, 0x0B, 0x0D, 0x09],
  [0x09, 0x0E, 0x0B, 0x0D],
  [0x0D, 0x09, 0x0E, 0x0B],
  [0x0B, 0x0D, 0x09, 0x0E]
];

// Nuevas constantes del KeyExpansion
const ROUND_CONSTANTS: number[] = [
  0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36
];

// Nueva política de relleno de bloques
function padBlock(block: number[]): number[] {
  const paddedBlock = [...block];
  while (paddedBlock.length < 4) {
    paddedBlock.push(0x00);
  }
  return paddedBlock;
}

// Función de sustitución no lineal utilizando una caja S complementaria
function substituteNibbles(nibble: number, sBox: number[][]): number {
  const row = (nibble >> 4) & 0x0F;
  const column = nibble & 0x0F;
  return sBox[row][column];
}

function permuteNibbles(nibble: number, mixColumnsMatrix: number[][]): number {
  const result: number[] = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result[i] ^= galoisMultiplication(nibble >> (j * 4) & 0x0F, mixColumnsMatrix[i][j]);
    }
  }

  let permutedNibble = 0;
  for (let i = 0; i < 4; i++) {
    permutedNibble |= result[i] << (i * 4);
  }

  return permutedNibble;
}

// Función de multiplicación en el campo de Galois
function galoisMultiplication(a: number, b: number): number {
  let p = 0;
  let counter = 0;
  let hiBitSet: boolean;
  while (counter < 8) {
    if ((b & 1) === 1) {
      p ^= a;
    }
    hiBitSet = (a & 0x80) !== 0;
    a <<= 1;
    if (hiBitSet) {
      a ^= 0x1B;
    }
    b >>= 1;
    counter++;
  }
  return p & 0xFF;
}

// Función principal de encriptación
function encrypt(plaintext: number[], key: number[]): number[] {
  // Implementar el proceso de encriptación según el algoritmo S-AES
  // Utilizar las funciones y estructura del S-AES original y aplicar las modificaciones propuestas

  let state = [...plaintext];
  const roundKeys = keyExpansion(key);

  // Resto del proceso de encriptación...

  return state;
}

// Función principal de desencriptación
function decrypt(ciphertext: number[], key: number[]): number[] {
  // Implementar el proceso de desencriptación según el algoritmo S-AES
  // Utilizar las funciones y estructura del S-AES original y aplicar las modificaciones propuestas

  let state = [...ciphertext];
  const roundKeys = keyExpansion(key);

  // Resto del proceso de desencriptación...

  return state;
}

// Función de expansión de clave (Key Expansion) para generar las claves de ronda
function keyExpansion(key: number[]): number[][] {
  // Implementar el proceso de expansión de clave según el algoritmo S-AES
  // Utilizar las constantes y funciones del S-AES original y aplicar las modificaciones propuestas

  let roundKeys: number[][] = [];

  // Resto del proceso de expansión de clave...

  return roundKeys;
}

// Función principal de ejecución del algoritmo
function main() {
  const plaintext: number[] = [0x32, 0x88]; // Datos de entrada (2 bytes)
  const key: number[] = [0x2b, 0x7e]; // Clave (2 bytes)

  console.log('Plaintext:', plaintext.map(byte => byte.toString(16).padStart(2, '0')).join(' '));
  console.log('Key:', key.map(byte => byte.toString(16).padStart(2, '0')).join(' '));

  const ciphertext = encrypt(plaintext, key);
  console.log('Ciphertext:', ciphertext.map(byte => byte.toString(16).padStart(2, '0')).join(' '));

  const decryptedPlaintext = decrypt(ciphertext, key);
  console.log('Decrypted plaintext:', decryptedPlaintext.map(byte =>     byte.toString(16).padStart(2, '0')).join(' '));
}

// Ejecutar el algoritmo
main();

/*
* Usando encriptación por bloques independientes (CBC), encriptar 10 palabras de el algoritmo propio
*/
console.log("10 de el algoritmo propio");
// Función principal de encriptación con CBC
function encryptWithCBC(plaintextList: number[][], key: number[]): number[][] {
  const ciphertextList: number[][] = [];
  let previousBlock: number[] = [0x00, 0x00]; // Valor inicial para el primer bloque

  for (let i = 0; i < plaintextList.length; i++) {
    const plaintextBlock = plaintextList[i];

    // Realizar XOR entre el bloque de texto plano y el bloque cifrado anterior
    const xorResult = plaintextBlock.map((byte, index) => byte ^ previousBlock[index]);

    // Encriptar el bloque XOR resultante
    const ciphertextBlock = encrypt(xorResult, key);

    // Agregar el bloque cifrado a la lista de bloques cifrados
    ciphertextList.push(ciphertextBlock);

    // Establecer el bloque cifrado actual como el bloque anterior para el siguiente ciclo
    previousBlock = ciphertextBlock;
  }

  return ciphertextList;
}

const words = [
  [0x75, 0x6e],
  [0x69, 0x76],
  [0x65, 0x72],
  [0x73, 0x69],
  [0x64, 0x61],
  [0x64, 0x64],
  [0x69, 0x73],
  [0x74, 0x72],
  [0x69, 0x74],
  [0x61, 0x6c]
];

// Clave de encriptación de 2 caracteres (16 bits)
const key = [0x2b, 0x7e];

// Encriptar las palabras cifradas utilizando CBC
const ciphertextList = encryptWithCBC(words, key);

// Imprimir los bloques cifrados en hexadecimal
console.log("Ciphertext:");
ciphertextList.forEach(block => {
  const hexBlock = block.map(byte => byte.toString(16).padStart(2, '0')).join(' ');
  console.log(hexBlock);
});