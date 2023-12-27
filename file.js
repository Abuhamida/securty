const crypto = require('crypto');

// Key must be 32 characters long
const key = 'asdfghjk';

function encrypt(data) {
 const cipher = crypto.createCipher('aes-256-cbc', key);
 let encrypted = cipher.update(data, 'utf8', 'hex');
 encrypted += cipher.final('hex');
 return encrypted;
}

function decrypt(data) {
 const decipher = crypto.createDecipher('aes-256-cbc', key);
 let decrypted = decipher.update(data, 'hex', 'utf8');
 decrypted += decipher.final('utf8');
 return decrypted;
}

const data = 'Hello, world!';
const encryptedData = encrypt(data);
const decryptedData = decrypt(encryptedData);

console.log('Original data:', data);
console.log('Encrypted data:', encryptedData);
console.log('Decrypted data:', decryptedData);
