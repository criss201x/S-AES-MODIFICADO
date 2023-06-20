"use strict";
const S_BOX_1 = [
  [9, 4, 10, 11],
  [13, 1, 8, 5],
  [6, 2, 0, 3],
  [12, 14, 15, 7]
];
const S_BOX_2 = [
  [3, 8, 11, 1],
  [9, 12, 2, 13],
  [0, 4, 6, 5],
  [10, 14, 7, 15]
];
function shiftRows(state) {
  const temp = state[1];
  state[1] = state[3];
  state[3] = temp;
}
const MIX_COLUMNS_MATRIX_1 = [
  [2, 3, 1, 1],
  [1, 2, 3, 1],
  [1, 1, 2, 3],
  [3, 1, 1, 2]
];
const MIX_COLUMNS_MATRIX_2 = [
  [14, 11, 13, 9],
  [9, 14, 11, 13],
  [13, 9, 14, 11],
  [11, 13, 9, 14]
];
const ROUND_CONSTANTS = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  27,
  54
];
function padBlock(block) {
  const paddedBlock = [...block];
  while (paddedBlock.length < 4) {
    paddedBlock.push(0);
  }
  return paddedBlock;
}
function substituteNibbles(nibble, sBox) {
  const row = nibble >> 4 & 15;
  const column = nibble & 15;
  return sBox[row][column];
}
function permuteNibbles(nibble, mixColumnsMatrix) {
  const result = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result[i] ^= galoisMultiplication(nibble >> j * 4 & 15, mixColumnsMatrix[i][j]);
    }
  }
  let permutedNibble = 0;
  for (let i = 0; i < 4; i++) {
    permutedNibble |= result[i] << i * 4;
  }
  return permutedNibble;
}
function galoisMultiplication(a, b) {
  let p = 0;
  let counter = 0;
  let hiBitSet;
  while (counter < 8) {
    if ((b & 1) === 1) {
      p ^= a;
    }
    hiBitSet = (a & 128) !== 0;
    a <<= 1;
    if (hiBitSet) {
      a ^= 27;
    }
    b >>= 1;
    counter++;
  }
  return p & 255;
}
function encrypt(plaintext, key2) {
  let state = [...plaintext];
  const roundKeys = keyExpansion(key2);
  return state;
}
function decrypt(ciphertext, key2) {
  let state = [...ciphertext];
  const roundKeys = keyExpansion(key2);
  return state;
}
function keyExpansion(key2) {
  let roundKeys = [];
  return roundKeys;
}
function main() {
  const plaintext = [50, 136];
  const key2 = [43, 126];
  console.log("Plaintext:", plaintext.map((byte) => byte.toString(16).padStart(2, "0")).join(" "));
  console.log("Key:", key2.map((byte) => byte.toString(16).padStart(2, "0")).join(" "));
  const ciphertext = encrypt(plaintext, key2);
  console.log("Ciphertext:", ciphertext.map((byte) => byte.toString(16).padStart(2, "0")).join(" "));
  const decryptedPlaintext = decrypt(ciphertext, key2);
  console.log("Decrypted plaintext:", decryptedPlaintext.map((byte) => byte.toString(16).padStart(2, "0")).join(" "));
}
main();
console.log("10 de el algoritmo propio");
function encryptWithCBC(plaintextList, key2) {
  const ciphertextList2 = [];
  let previousBlock = [0, 0];
  for (let i = 0; i < plaintextList.length; i++) {
    const plaintextBlock = plaintextList[i];
    const xorResult = plaintextBlock.map((byte, index) => byte ^ previousBlock[index]);
    const ciphertextBlock = encrypt(xorResult, key2);
    ciphertextList2.push(ciphertextBlock);
    previousBlock = ciphertextBlock;
  }
  return ciphertextList2;
}
const words = [
  [117, 110],
  [105, 118],
  [101, 114],
  [115, 105],
  [100, 97],
  [100, 100],
  [105, 115],
  [116, 114],
  [105, 116],
  [97, 108]
];
const key = [43, 126];
const ciphertextList = encryptWithCBC(words, key);
console.log("Ciphertext:");
ciphertextList.forEach((block) => {
  const hexBlock = block.map((byte) => byte.toString(16).padStart(2, "0")).join(" ");
  console.log(hexBlock);
});
//# sourceMappingURL=index.js.map
