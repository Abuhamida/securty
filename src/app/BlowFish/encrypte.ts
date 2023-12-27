const crypto = require("crypto");
export default async function Encrypt(data: any, isImage = false, inputKey: any) {
    const cipher = crypto.createCipher("aes-256-cbc", inputKey);
  
    if (isImage) {
      // If data is an image, fetch it and convert the response to a buffer
      const response = await fetch(data);
      const buffer = await response.arrayBuffer();
      data = Buffer.from(buffer);
    }
  
    let encrypted = cipher.update(data, isImage ? null : "utf8", "hex");
    encrypted += cipher.final("hex");
  
    if (isImage) {
      // Handle saving encrypted data for images if needed
    }
  
    return encrypted;
  }