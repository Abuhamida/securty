"use client";

import Link from "next/link";
import { useState } from "react";
import Stack from "./class";

export default function StackPage() {
  const [stack, setStack] = useState(new Stack());
  const [newElement, setNewElement] = useState("");
  const [error, setError] = useState(false);

  const handlePush = () => {
    if (newElement.trim() !== "") {
      setStack((prevStack) => {
        const newStack = new Stack();
        newStack.items = [...prevStack.items, newElement];
        return newStack;
      });
      setNewElement("");
      setError(false); // Reset error when pushing is successful
    } else {
      setError(true);
    }
  };

  const handlePop = () => {
    setStack((prevStack) => {
      const newStack = new Stack();
      newStack.items = [...prevStack.items];
      newStack.pop();
      return newStack;
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold ">Stack Component</h1>
      <p className="text-2xl font-semibold">
        Top Element: <samp className=" text-Royal">{stack.peek()}</samp>{" "}
      </p>

      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          element
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Enter the Element"
          value={newElement} // Bind the input value to newElement
          onChange={(e) => setNewElement(e.target.value)}
        />
        {error ? (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        ) : null}

        <div className=" flex flex-row text-black items-center p-5 gap-4">
          <button
            className=" bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePush}
          >
            Push
          </button>
          <button
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePop}
          >
            Pop
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p>Stack:</p>
        {stack.isEmpty() ? (
          <div className=" flex flex-col justify-center text-center items-center w-20 bg-Navy p-5 min-h-[300px] font-semibold text-2xl  rounded-xl ">
            <p className="text-white rotate-90 h-full min-w-max ">Stack is empty</p>
          </div>
        ) : (
          <ul className="flex flex-col-reverse text-center items-center justify-center w-20 gap-3 bg-Navy p-5 min-h-[300px] rounded-xl">
            {stack.items.map((item, index) => (
              <li
                className=" bg-Baby text-Navy font-bold text-xl rounded-xl min-h-min pt-4 pb-4 w-16 text-center items-center "
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
