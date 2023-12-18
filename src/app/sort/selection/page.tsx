"use client";

import React, { useState } from 'react';

export default function SelectionSortVisualization() {
  const [inputArray, setInputArray] = useState<string>("");
  const [sortedSteps, setSortedSteps] = useState<number[][]>([]);

  const selectionSort = (arr: number[]): number[] => {
    const n = arr.length;
    let steps: number[][] = [];

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        // Find the index of the minimum element
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // Swap the found minimum element with the first element
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

      // Save the current state of the array for visualization
      steps.push([...arr]);
    }

    setSortedSteps(steps);
    return arr;
  };

  const visualizeSelectionSort = (): void => {
    const arrayToSort: number[] = inputArray.split(',').map(Number);

    // Reset previous steps
    setSortedSteps([]);

    // Start the selection sort algorithm
    selectionSort(arrayToSort);
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold ">Selection Sort Visualization</h1>
      <div className="flex flex-col gap-5 justify-center text-center items-center">
        <label>
          <p className="text-xl font-semibold pb-3">Enter comma-separated numbers:</p>
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
          onClick={visualizeSelectionSort}
        >
          Visualize Selection Sort
        </button>
      </div>
      {/* Render steps here */}
      {sortedSteps.map((step, index) => (
        <div key={index} className="bg-Navy p-4 text-xl text-white rounded-xl">
          <p>
            Step {index + 1} →  {`{ ${step.join(", ")} }`}
          </p>
        </div>
      ))}
    </div>
  );
}




