'use client'

import React, { useState } from 'react';
import Queue from './class';

export default function QueuePage() {
  const [queue, setQueue] = useState( new Queue());
  const [newElement, setNewElement] = useState("");
  const [error, setError] = useState(false);

  const handleEnqueue = () => {
    if (newElement.trim() !== "") {
      setQueue((prevQueue) => {
        const newQueue = new Queue();
        newQueue.items = [...prevQueue.items, newElement];
        return newQueue;
      });
      setNewElement("");
      setError(false); // Reset error when enqueue is successful
    } else {
      setError(true);
    }
  };

  const handleDequeue = () => {
    setQueue((prevQueue) => {
      const newQueue = new Queue();
      newQueue.items = [...prevQueue.items];
      newQueue.dequeue();
      return newQueue;
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold">Queue Component</h1>
      <p className="text-2xl font-semibold">
      Front Element: 
      <samp className=" text-Royal">{queue.isEmpty() ? ' Queue is empty' : ` ${queue.front()}`}</samp> 
      </p>

      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Element
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-x-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Enter the Element"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
        />
        {error ? (
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        ) : null}
        
        <div className="flex flex-row justify-center text-black items-center p-5 gap-4">
          <button
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
            onClick={handleEnqueue}
          >
            Enqueue
          </button>
          <button
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full"
            onClick={handleDequeue}
          >
            Dequeue
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p>Queue:</p>

        <ul className="flex flex-row text-center items-center justify-center h-20 gap-3 bg-Navy p-5 min-w-[300px] rounded-xl">
          {queue.isEmpty() ? (
            <li className="text-white font-bold text-xl rounded-xl min-h-min pt-4 pb-4 text-center items-center ">
              Queue is empty
            </li>
          ) : (
            queue.items.map((item, index) => (
              <li
                className="bg-Baby text-Navy font-bold text-xl rounded-xl min-h-min pt-4 pb-4 w-16 text-center items-center"
                key={index}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
