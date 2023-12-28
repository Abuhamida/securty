const Blowfish = require('blowfish-node');

export default async function Encrypt(data: any, isImage = false, inputKey: any) {
  // Convert the input key to a Buffer
  const keyBuffer = Buffer.from(inputKey, 'utf-8');

  // Create a Blowfish instance
  const bf = new Blowfish(keyBuffer, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);

  // Set an optional initialization vector (IV) for CBC mode
  bf.setIv('abcdefgh'); // Replace with your actual IV

  if (isImage) {
    // If data is an image, convert it to a Buffer
    data = Buffer.from(data, 'binary');
  }

  // Perform the encryption
  const encryptedDataBuffer = bf.encode(data);

  // Convert the encrypted data buffer to a hex string
  const encryptedData = encryptedDataBuffer.toString('hex');

  console.log('Encrypted:', encryptedData);

  if (isImage) {
    // Handle saving encrypted data for images if needed
  }

  return encryptedData;
}
