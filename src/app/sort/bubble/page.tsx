"use client";

import React, { useState } from 'react';

export default function BubbleSortVisualization() {
  
  const [inputArray, setInputArray] = useState<string>("");
  const [sortedSteps, setSortedSteps] = useState<number[][]>([]);

  const bubbleSort = (arr: number[]): number[] => {
    const n = arr.length;
    let steps: number[][] = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Swap if the element found is greater than the next element
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Save the current state of the array for visualization
          steps.push([...arr]);
        }
      }
    }

    setSortedSteps(steps);
    return arr;
  };

  const visualizeBubbleSort = (): void => {
    const arrayToSort: number[] = inputArray.split(',').map(Number);

    // Reset previous steps
    setSortedSteps([]);

    // Start the bubble sort algorithm
    bubbleSort(arrayToSort);
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold ">Bubble Sort Visualization</h1>
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
          onClick={visualizeBubbleSort}
        >
          Visualize Bubble Sort
        </button>
      </div>
      {/* Render steps here */}
      {sortedSteps.map((step, index) => (
        <div key={index} className="bg-Navy p-4 text-xl text-white rounded-xl">
          <p>
            Step {index + 1} → {`{ ${step.join(", ")} }`}
          </p>
        </div>
      ))}
    </div>
  );
}



