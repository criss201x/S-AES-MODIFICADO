// Función de sustitución S-Box
const S_BOX: number[][] = [
  [9, 4, 10, 11],
  [13, 1, 8, 5],
  [6, 2, 0, 3],
  [12, 14, 15, 7]
];

// Función de permutación P-Box
const P_BOX: number[][] = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];

// Subclaves generadas
let SUBKEYS: number[][] = [
  [0, 1, 2, 3],
  [4, 5, 6, 7]
];

// Función de multiplicación en el campo de Galois
function galoisMultiplication(a: number, b: number): number {
  let p = 0;
  for (let i = 0; i < 8; i++) {
    if (b & 1) {
      p ^= a;
    }
    const carry = a & 0x80;
    a <<= 1;
    if (carry) {
      a ^= 0x1b;
    }
    b >>= 1;
  }
  return p;
}

// Función de sustitución no lineal
function substituteNibbles(nibble: number): number {
  return S_BOX[(nibble >> 2) & 0x3][nibble & 0x3];
}

// Función de permutación
function permuteNibbles(nibble: number): number {
  return P_BOX[(nibble >> 2) & 0x3][nibble & 0x3];
}

// Función para expandir una clave de 8 bits a una clave de 16 bits
function expandKey(key: number[]): number[][] {
  const expandedKey: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0]];
  expandedKey[0][0] = key[0];
  expandedKey[0][1] = key[1];
  expandedKey[0][2] = key[0] ^ (substituteNibbles(key[2]) ^ 0x80);
  expandedKey[0][3] = key[1] ^ substituteNibbles(key[3]);
  expandedKey[1][0] = expandedKey[0][2] ^ (substituteNibbles(expandedKey[0][2]) ^ 0x30);
  expandedKey[1][1] = expandedKey[0][3] ^ substituteNibbles(expandedKey[0][3]);
  expandedKey[1][2] = expandedKey[1][0] ^ (substituteNibbles(expandedKey[1][0]) ^ 0x60);
  expandedKey[1][3] = expandedKey[1][1] ^ substituteNibbles(expandedKey[1][1]);
  return expandedKey;
}

// Función para generar las subclaves
function generateSubkeys(key: number[]): void {
  SUBKEYS = expandKey(key);
}

function encrypt(plaintext: number[]): number[] {
  const state: number[] = [0, 0, 0, 0];
  state[0] = plaintext[0] ^ SUBKEYS[0][0];
  state[1] = plaintext[1] ^ SUBKEYS[0][1];
  state[2] = plaintext[0] ^ SUBKEYS[1][0];
  state[3] = plaintext[1] ^ SUBKEYS[1][1];

  // Ronda 1
  state[0] = substituteNibbles(state[0]);
  state[1] = substituteNibbles(state[1]);
  state[2] = substituteNibbles(state[2]);
  state[3] = substituteNibbles(state[3]);

  state[0] ^= state[2];
  state[2] ^= state[1];
  state[1] ^= state[3];

  state[1] = permuteNibbles(state[1]);
  state[2] = permuteNibbles(state[2]);

  state[0] ^= SUBKEYS[1][0];
  state[1] ^= SUBKEYS[1][1];
  state[2] ^= SUBKEYS[0][0];
  state[3] ^= SUBKEYS[0][1];

  const ciphertext: number[] = [state[0], state[1], state[2], state[3]];
  return ciphertext;
}

// Función de descifrado
function decrypt(ciphertext: number[]): number[] {
  const state: number[] = [0, 0, 0, 0];
  state[0] = ciphertext[0] ^ SUBKEYS[0][0];
  state[1] = ciphertext[1] ^ SUBKEYS[0][1];
  state[2] = ciphertext[2] ^ SUBKEYS[1][0];
  state[3] = ciphertext[3] ^ SUBKEYS[1][1];

  // Ronda 1 inversa
  state[1] = permuteNibbles(state[1]);
  state[2] = permuteNibbles(state[2]);

  state[0] ^= state[2];
  state[2] ^= state[1];
  state[1] ^= state[3];

  state[0] = substituteNibbles(state[0]);
  state[1] = substituteNibbles(state[1]);
  state[2] = substituteNibbles(state[2]);
  state[3] = substituteNibbles(state[3]);

  state[0] ^= SUBKEYS[1][0];
  state[1] ^= SUBKEYS[1][1];
  state[2] ^= SUBKEYS[0][0];
  state[3] ^= SUBKEYS[0][1];

  const plaintext: number[] = [state[0], state[1], state[2], state[3]];
  return plaintext;
}

// Ejemplo de uso
const plaintext: number[] = [0x32, 0x88]; // Datos de entrada (2 bytes)
const key: number[] = [0x2b, 0x7e]; // Clave (2 bytes)

generateSubkeys(key);

const ciphertext: number[] = encrypt(plaintext);
const decryptedPlaintext: number[] = decrypt(ciphertext);

console.log("Texto cifrado:", ciphertext);
console.log("Texto descifrado:", decryptedPlaintext);

/*
* Usando encriptación por bloques independientes (CBC), encriptar 10 palabras en el S-AES
*/

console.log('Usando encriptación por bloques independientes (CBC), encriptar 10 palabras en el S-AES:');

// Función de encriptación CBC
function encryptCBC(plaintext: number[], key: number[], iv: number[]): number[] {
  const ciphertext: number[] = [];
  let previousBlock = iv.slice(); // Bloque inicial

  for (let i = 0; i < plaintext.length; i += 2) {
    const block: number[] = [plaintext[i], plaintext[i + 1]]; // Bloque actual
    block[0] ^= previousBlock[0];
    block[1] ^= previousBlock[1];

    const encryptedBlock = encrypt(block);
    ciphertext.push(encryptedBlock[0], encryptedBlock[1]);

    previousBlock = encryptedBlock;
  }

  return ciphertext;
}

// Mensaje: UniversidadDistrital
const plaintexts: number[][] = [
  [0x75, 0x6e], //Un
  [0x69, 0x76], //iv
  [0x65, 0x72], //er
  [0x73, 0x69], //si
  [0x64, 0x61], //da
  [0x64, 0x64], //dD
  [0x69, 0x73], //is
  [0x74, 0x72], //tr
  [0x69, 0x74], //it
  [0x61, 0x6c] //al
];

const key2: number[] = [0x2b, 0x7e]; // Clave (2 bytes)
const iv: number[] = [0x00, 0x00]; // Vector de inicialización (IV)

generateSubkeys(key2);

for (let i = 0; i < plaintexts.length; i++) {
  const plaintext = plaintexts[i];
  const ciphertext = encryptCBC(plaintext, key2, iv);

  console.log(`Plaintext ${i + 1}:`, plaintext);
  console.log(`Ciphertext ${i + 1}:`, ciphertext);
  console.log('---');
}