"use client";
import Link from "next/link";
import Image from "next/image";
import Merge1 from "@/images/merge1.png";
import Merge2 from "@/images/merge2.png";
import Merge3 from "@/images/merge3.png";
import Merge4 from "@/images/merge4.png";

import Bubble from "@/images/bubble_sort.png";
import Quick from "@/images/QuickSort.png";
import Selection1 from "@/images/selection1.png";
import Selection2 from "@/images/selection2.png";
import Selection3 from "@/images/selection3.png";
import Selection4 from "@/images/selection4.png";

import React, { useState } from "react";

export default function Sort() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 pt-32 min-h-screen min-w-full">
      <h1 className="text-3xl font-bold">Sort</h1>

      <div className="flex flex-col gap-5 items-start pb-5 min-w-[950px]">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Merge Sort </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"sort/merge"}
          >
            Visualize Merge Sort
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <p className=" text-xl font-semibold ">
            How Does Merge sort Algorithm Work?
          </p>
          <ul className=" flex flex-col gap-10 list-disc max-w-[800px]">
            <li>
              <p className="mb-5">
                Initially divide the array into two equal halves:
              </p>

              <Image className="w-[800px]" src={Merge1} alt=""></Image>
            </li>
            <li>
              <p className="mb-5">
                These subarrays are further divided into two halves. Now they
                become array of unit length that can no longer be divided and
                array of unit length are always sorted.
              </p>

              <Image className="w-[800px]" src={Merge2} alt=""></Image>
            </li>
            <li>
              <p className="mb-5">
                These sorted subarrays are merged together, and we get bigger
                sorted subarrays.
              </p>

              <Image className="w-[800px]" src={Merge3} alt=""></Image>
            </li>
            <li>
              <p className="mb-5">
                This merging process is continued until the sorted array is
                built from the smaller subarrays.
              </p>

              <Image className="w-[800px]" src={Merge4} alt=""></Image>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start pb-5 min-w-[950px]">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Bubble Sort </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"sort/bubble"}
          >
            Visualize Bubble Sort
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <p className=" text-xl font-semibold ">
            How Does Bubble sort Algorithm Work?
          </p>
          <ul className=" flex flex-col gap-5 text-lg list-disc max-w-[800px] mb-5">
            <li>
              <samp className="text-Royal font-semibold text-xl">
                First Pass:
              </samp>
              The largest element is placed in its correct position, i.e., the
              end of the array.
            </li>
            <li>
              <samp className="text-Royal font-semibold text-xl">
                {" "}
                Second Pass:
              </samp>
              Place the second largest element at correct position
            </li>
            <li>
              <samp className="text-Royal font-semibold text-xl">
                Third Pass:
              </samp>
              Place the remaining two elements at their correct positions.
            </li>
          </ul>
          <Image className="w-[800px]" src={Bubble} alt=""></Image>
          <ul className="text-xl font-bold text-Royal mt-5 flex flex-col gap-4 list-disc max-w-[800px]">
            <li>Total no. of passes: n-1</li>
            <li>Total no. of comparisons: n*(n-1)/2</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start pb-5 min-w-[950px]">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Quick Sort </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"sort/quick"}
          >
            Visualize Quick Sort
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <p className=" text-xl font-semibold ">
            How Does Quick sort Algorithm Work?
          </p>
          <p className=" text-xl max-w-[800px]">
            The quicksort algorithm uses a series of recursive calls to
            partition a list into smaller and smaller sublists about a value
            called the pivot.
          </p>
          <Image className="w-[800px]" src={Quick} alt=""></Image>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start pb-5 min-w-[950px]">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Selection Sort </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"sort/selection"}
          >
            Visualize Selection Sort
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <p className=" text-xl font-semibold ">
            How Does slection sort Algorithm Work?
          </p>
          <ul className=" flex flex-col gap-10 list-decimal max-w-[800px]">
            <li>
              <samp className="text-Royal font-semibold text-xl">
                First pass:
              </samp>

              <ul className="mb-5 flex flex-col gap-5 list-disc max-w-[800px] ml-7">
                <li>
                  For the first position in the sorted array, the whole array is
                  traversed from index 0 to 4 sequentially. The first position
                  where 64 is stored presently, after traversing whole array it
                  is clear that 11 is the lowest value.
                </li>
                <li>
                  Thus, replace 64 with 11. After one iteration 11, which
                  happens to be the least value in the array, tends to appear in
                  the first position of the sorted list.
                </li>
              </ul>
              <Image className="w-[800px]" src={Selection1} alt=""></Image>
            </li>
            <li>
              <samp className="text-Royal font-semibold text-xl">
                Second Pass:
              </samp>

              <ul className="mb-5 flex flex-col gap-5 list-disc max-w-[800px] ml-7">
                <li>
                  For the second position, where 25 is present, again traverse
                  the rest of the array in a sequential manner.
                </li>
                <li>
                  After traversing, we found that 12 is the second lowest value
                  in the array and it should appear at the second place in the
                  array, thus swap these values.
                </li>
              </ul>
              <Image className="w-[800px]" src={Selection2} alt=""></Image>
            </li>
            <li>
              <samp className="text-Royal font-semibold text-xl">
                Third Pass:
              </samp>

              <ul className="mb-5 flex flex-col gap-5 list-disc max-w-[800px] ml-7">
                <li>
                  Now, for third place, where 25 is present again traverse the
                  rest of the array and find the third least value present in
                  the array.
                </li>
                <li>
                  While traversing, 22 came out to be the third least value and
                  it should appear at the third place in the array, thus swap 22
                  with element present at third position.
                </li>
              </ul>
              <Image className="w-[800px]" src={Selection3} alt=""></Image>
            </li>
            <li>
              <samp className="text-Royal font-semibold text-xl">
                Fourth pass:
              </samp>
              <ul className="mb-5 flex flex-col gap-5 list-disc max-w-[800px] ml-7">
                <li>
                  Similarly, for fourth position traverse the rest of the array
                  and find the fourth least element in the array
                </li>
                <li>
                  As 25 is the 4th lowest value hence, it will place at the
                  fourth position.
                </li>
              </ul>
              <Image className="w-[800px]" src={Selection4} alt=""></Image>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
