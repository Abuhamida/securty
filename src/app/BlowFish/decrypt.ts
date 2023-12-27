const crypto = require("crypto");

export default function Decrypt(data: any, inputKey: any, isImage = false) {
    const decipher = crypto.createDecipher("aes-256-cbc", inputKey);
  
    let decrypted;
    if (isImage) {
      const encryptedBuffer = Buffer.from(data, "hex");
      decrypted = Buffer.concat([
        decipher.update(encryptedBuffer),
        decipher.final(),
      ]);
    } else {
      decrypted = decipher.update(data, "hex", "utf8");
      decrypted += decipher.final("utf8");
    }
  
    return decrypted;
  }