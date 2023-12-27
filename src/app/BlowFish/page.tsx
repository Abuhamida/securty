// pages/index.js
"use client";
const crypto = require("crypto");

// Key must be 32 characters long

export async function encrypt(data: any, isImage = false, inputKey: any) {
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

export function decrypt(data: any, inputKey: any, isImage = false) {
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
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");
  const downloadLinkRef = useRef(null);

  const handleEncrypt = async (isImage = false) => {
    if (inputData && inputKey) {
      const encrypted = await encrypt(inputData, isImage, inputKey);
      setEncryptedData(encrypted);
      setInputData(encrypted);
    }
  };

  useEffect(() => {
    // Trigger download when decryptedData is set
    if (decryptedData && inputData.startsWith("data:image")) {
      const blob = new Blob([decryptedData], { type: "image/png" });

      // Create or update the download link
      if (!downloadLinkRef.current) {
        downloadLinkRef.current = document.createElement("a");
        document.body.appendChild(downloadLinkRef.current);
      }

      const downloadLink = downloadLinkRef.current;
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "decrypted_image.png";
      downloadLink.click();
    }
  }, [decryptedData, inputData]);

  const handleDecrypt = () => {
    if (encryptedData && inputKey) {
      const decrypted = decrypt(
        encryptedData,
        inputKey,
        inputData.startsWith("data:image")
      );
      setDecryptedData(decrypted);
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setInputData(URL.createObjectURL(file));
    }
  };

  const isDataUrl = (str: any) => /^data:.+/.test(str);

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold ">Blowfish Algorithm</h1>
      <label>
        Upload Image:
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      <br />
      <label>
        Enter text or image URL:
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter key:
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
        />
      </label>
      <br />
      <div className="flex gap-3 items-center">
        <button
          className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleEncrypt(inputData.startsWith("data:image"))}
        >
          Encrypt
        </button>
        <button
          className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
          onClick={handleDecrypt}
        >
          Decrypt
        </button>
      </div>

      <br />
      {encryptedData && (
        <p className=" text-2xl font-bold">
          Encrypted data:{" "}
          <samp className="  text-Royal text-xl font-semibold">
            {encryptedData}
          </samp>{" "}
        </p>
      )}
      {decryptedData && (
        <>
          <p className="max-w-screen-md text-2xl font-bold">
            Decrypted data: <br />
            <samp className="max-w-screen-md text-Royal text-xl font-semibold">
              {decryptedData}
            </samp>{" "}
          </p>
        </>
      )}
    </div>
  );
}