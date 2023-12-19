"use client";
import React, { useState } from "react";

interface SearchStep {
  step: number;
  currentIndex: number;
}

export default function LinearSearchVisualization() {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<string>("");
  const [steps, setSteps] = useState<SearchStep[]>([]);
  const [inputArray, setInputArray] = useState<string>("");

  const generateArray = () => {
    const newArray = inputArray
      .split(",")
      .map((element) => parseInt(element.trim()) || 0); // Ensure to parse and handle NaN
    setArray(newArray); // Set the array for linear search
    setSteps([]); // Clear previous steps
    setTarget("");
  };

  const linearSearch = () => {
    const searchSteps: SearchStep[] = [];
    let step = 1;

    for (let i = 0; i < array.length; i++) {
      searchSteps.push({
        step,
        currentIndex: i,
      });

      if (array[i] === parseInt(target)) {
        // Target found
        setSteps(searchSteps);
        return;
      }

      step++;
    }

    // Target not found
    setSteps(searchSteps);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold">Linear Search Visualization</h1>

      <div className="flex flex-col justify-center items-center">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Enter Array Elements (comma-separated)
        </label>
        <input
          className="appearance-none w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="e.g. 1, 2, 3, 4"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
        <button
          className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
          onClick={generateArray}
        >
          Generate Array
        </button>
      </div>

      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Target
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="Enter Target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
      </div>

      <div className="flex flex-row justify-center text-black items-center p-5 gap-4">
        <button
          className="bg-Royal hover-bg-Navy text-white font-bold py-2 px-4 rounded-full"
          onClick={linearSearch}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p>Array:</p>
        <ul className="flex flex-row text-center items-center justify-center h-20 gap-3 bg-Navy p-5 min-w-[300px] rounded-xl">
          {array.map((value, index) => (
            <li
              className="bg-Baby text-Navy font-bold text-xl rounded-xl min-h-min pt-4 pb-4 w-16 text-center items-center"
              key={index}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p>Linear Search Steps:</p>
        <ul className="flex flex-col justify-center text-center items-center gap-6">
          {steps.map((step) => (
            <li className="flex flex-col items-center" key={step.step}>
              <div>
                Step {step.step}:{" "}
                <samp className=" bg-Baby text-Navy text-xl p-3 rounded-md">
                  Current Index: {step.currentIndex}
                </samp>
              </div>

              {array[step.currentIndex] === parseInt(target) ? (
                <div className="w-96 text-center flex flex-col items-center  mt-2">
                  {" "}
                  <p className=" text-xl  mt-6 bg-Baby p-2 rounded-md">
                    The Target is found at position →{" "}
                    <samp className="text-Royal">{step.currentIndex + 1}</samp>{" "}
                  </p>{" "}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
