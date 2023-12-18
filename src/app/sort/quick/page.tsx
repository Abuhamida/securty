"use client";
import React, { useState } from 'react';

interface Step {
  array: number[];
}

function QuickSortVisualization() {
  const [inputArray, setInputArray] = useState<string>("");
  const [sortedSteps, setSortedSteps] = useState<Step[]>([]);

  const quickSort = (arr: number[]): void => {
    if (arr.length <= 1) {
      return;
    }

    const stack = [{ low: 0, high: arr.length - 1 }];

    while (stack.length > 0) {
      const { low, high } = stack.pop()!;

      if (low < high) {
        const partitionIndex = partition(arr, low, high);

        stack.push({ low, high: partitionIndex - 1 });
        stack.push({ low: partitionIndex + 1, high });
      }
    }
  };

  const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Save the current state of the array for visualization
    setSortedSteps((prevSteps) => [
      ...prevSteps,
      { array: [...arr] },
    ]);

    return i + 1;
  };

  const visualizeQuickSort = () => {
    const arrayToSort = inputArray.split(',').map(Number);

    // Reset previous steps
    setSortedSteps([]);

    // Create a copy of the array for visualization purposes
    const initialArray = [...arrayToSort];
    setSortedSteps([{ array: initialArray }]);

    // Start the quick sort algorithm
    quickSort(arrayToSort);
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold ">Quick Sort Visualization</h1>
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
          onClick={visualizeQuickSort}
        >
          Visualize Quick Sort
        </button>
      </div>
      {/* Render steps here */}
      {sortedSteps.map((step, index) => (
        <div key={index} className="bg-Navy p-4 text-xl text-white rounded-xl">
          <p>
            Step {index + 1}: {step.array.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuickSortVisualization;
