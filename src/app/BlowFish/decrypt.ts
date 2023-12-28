const Blowfish = require("blowfish-node");

export default function Decrypt(data: any, inputKey: any, isImage = false) {
  console.log(data);
  const bf = new Blowfish(inputKey, Blowfish.MODE.ECB, Blowfish.PADDING.NULL); // only key isn't optional
  bf.setIv("abcdefgh"); // optional for ECB mode; bytes length should be equal 8
  const dataArray = data.split(",").map(Number);

  const uint8Array = new Uint8Array(dataArray);

  // Create an ArrayBuffer from the Uint8Array
  const arrayBuffer = uint8Array.buffer;


  let decrypted;

  if (isImage) {
    // Convert the string to an array of numbers
    decrypted = bf.decode(arrayBuffer);
  } else {
    decrypted = bf.decode(arrayBuffer);
  }
  console.log(decrypted);

  return decrypted; //
}
