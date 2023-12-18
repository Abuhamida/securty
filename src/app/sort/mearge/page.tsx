"use client";
import React, { useState } from "react";

interface Step {
  left: number[];
  right: number[];
  merged: number[];
}

function MergeSortVisualization() {
  const [inputArray, setInputArray] = useState<string>("");
  const [sortedSteps, setSortedSteps] = useState<Step[]>([]);

  const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    const mergedArray = merge(sortedLeft, sortedRight);

    // Save the intermediate step to visualize later
    setSortedSteps((prevSteps) => [
      ...prevSteps,
      { left: sortedLeft, right: sortedRight, merged: mergedArray },
    ]);

    return mergedArray;
  };

  const merge = (left: number[], right: number[]): number[] => {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };

  const visualizeMergeSort = () => {
    const arrayToSort = inputArray.split(",").map(Number);

    // Reset previous steps
    setSortedSteps([]);

    // Start the merge sort algorithm
    mergeSort(arrayToSort);
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1>Merge Sort Visualization</h1>
      <div className="flex flex-col gap-5 justify-center text-center items-center">
        <label>
          <p>Enter comma-separated numbers:</p>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
            placeholder="e.g. 1, 2, 3, 4"
          />
        </label>
        <button
          className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full "
          onClick={visualizeMergeSort}
        >
          Visualize Merge Sort
        </button>
      </div>
      {/* Render subarrays or steps here */}
      <div className="text-center flex gap-5">
        <div className="flex flex-col justify-start gap-5">
          {sortedSteps.map((step, index) => (
            <p
              className="bg-Navy p-4 text-xl text-white rounded-xl "
              key={index}
            >
              {step.left.join(", ")}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-start gap-5">
          {sortedSteps.map((step, index) => (
            <p
              className="bg-Navy p-4 text-xl text-white rounded-xl "
              key={index}
            >
              {step.right.join(", ")}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-start gap-5">
          {sortedSteps.map((step, index) => (
            <p
              className="bg-Navy p-4 text-xl text-white rounded-xl "
              key={index}
            >
              Step {index + 1} (Merged): {step.merged.join(", ")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MergeSortVisualization;
