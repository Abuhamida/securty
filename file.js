const Blowfish = require('blowfish-node');
const bf = new Blowfish('asdfghjk', Blowfish.MODE.ECB, Blowfish.PADDING.NULL); // only key isn't optional
bf.setIv('abcdefgh'); // optional for ECB mode; bytes length should be equal 8

const encoded = bf.encode('input text even with emoji 🎅');
const decoded = bf.decode(encoded);
const uint8Array = new Uint8Array([
    247, 223, 191, 112,   8,  65, 182,
     19, 238,  77, 249, 160,  46, 178,
     84, 229, 176, 244, 214, 125, 233,
    137,  87, 133,  70, 187, 185, 229,
    201, 204,  53, 241
]);

// Create an ArrayBuffer from the Uint8Array
const arrayBuffer = uint8Array.buffer;


const response = bf.decode(arrayBuffer);

console.log(response)
// console.log(encoded,decoded)