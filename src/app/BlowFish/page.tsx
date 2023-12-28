// pages/index.js
"use client";
const crypto = require("crypto");

// Key must be 32 characters long
import Encrypt from "./encrypte";
import Decrypt from "./decrypt";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");

  const handleEncrypt = async (isImage = false) => {
    if (inputData && inputKey) {
      const encrypted = await Encrypt(inputData, isImage, inputKey);
      setEncryptedData(encrypted);
      setInputData(encrypted);
    }
  };

  const handleDecrypt = () => {
    if ((encryptedData && inputKey) ||( inputData && inputKey)) {
      if  (encryptedData){
        const decrypted = Decrypt(
        encryptedData,
        inputKey,
        inputData.startsWith("data:image")
      );
      setInputData(decrypted);
      setDecryptedData(decrypted);
      }
      else{
        const decrypted = Decrypt(
          inputData,
          inputKey,
          inputData.startsWith("data:image")
        );
        setInputData(decrypted);
        setDecryptedData(decrypted);
      }
      
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setInputData(URL.createObjectURL(file));
    }
  };

  const isDataUrl = (str: any) => /^data:.+/.test(str);
  const isBlobUrl = (str: any) => /^blob:.+/.test(str);

  return (
    <div className="flex flex-col justify-center text-center  items-center gap-5 pt-32 min-h-screen">
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
        <textarea
          className="appearance-none block w-96 h-32 bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
      <div className="">
  {encryptedData && (
    <>
      <p className="text-2xl font-bold">Encrypted data: </p>
      <samp className="text-Royal text-xl font-semibold ">
        {encryptedData}
      </samp>
    </>
  )}
</div>


      {decryptedData && (
        <>
          <p className=" max-w-screen-md text-2xl font-bold">
            Decrypted data: <br />
            <samp className="max-w-screen-md text-Royal text-xl font-semibold">
              {decryptedData}
            </samp>{" "}
          </p>
          {isDataUrl(decryptedData) && (
            <Image
              src={decryptedData}
              width={500}
              height={500}
              alt="Decrypted Image"
            />
          )}
          {isBlobUrl(decryptedData) && (
            <Image
              src={decryptedData}
              width={500}
              height={500}
              alt="Decrypted Image"
            />
          )}
        </>
      )}
    </div>
  );
}
