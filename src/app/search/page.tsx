"use client";
import Link from "next/link";
import React, { useState } from "react";
import Binary from "@/images/binary-search-algorithm-diagram.png";
import Linear from "@/images/linear search.png";
import Divide from "@/images/Divide.png";
import Image from "next/image";
export default function Search() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 pt-32 min-h-screen min-w-full">
      <h1 className="text-3xl font-bold">Search</h1>

      <div className="flex flex-col gap-5 items-start pb-5 ">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Linear Search </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"search/linear"}
          >
            Visualize Linear Search
          </Link>
        </div>

        <p className=" text-xl font-semibold ">
          How Does Linear Search Algorithm Work?
        </p>
        <ul className=" list-disc text-lg flex flex-col gap-2 pl-5 min-w-[950px]">
          <li>
            Every element is considered as a potential match for the key and
            checked for the same.
          </li>
          <li>
            If any element is found equal to the key, the search is successful
            and the index of that element is returned.
          </li>
          <li>
            If no element is found equal to the key, the search yields “No match
            found”.
          </li>
        </ul>
        <Image className="w-[800px]" src={Linear} alt="Linear Search" />
      </div>
      <div className="flex flex-col gap-5 items-start  pb-5 min-w-[950px]">
        <div className="flex justify-center gap-96 items-center text-center">
          <h2 className=" text-3xl text-Navy font-bold">Binary Search </h2>
          <Link
            className="bg-Royal hover:bg-Navy text-white font-bold py-2 px-4 rounded-full mt-3"
            href={"search/binary"}
          >
            Visualize Binary Search
          </Link>
        </div>
        <p className=" text-xl font-semibold ">
          How Does Binary Search Algorithm Work?
        </p>
        <ul className=" list-disc text-lg flex flex-col gap-2 pl-5">
          <li>
            Divide the search space into two halves by finding the middle index
            “mid”.
            <Image className="w-[800px]" src={Divide} alt=""></Image>
          </li>
          <li>Compare the middle element of the search space with the key.</li>
          <li>
            If the key is found at middle element, the process is terminated.
          </li>
          <li>
            If the key is not found at middle element, choose which half will be
            used as the next search space.
            <ul className=" list-disc text-lg flex flex-col gap-2 pl-5">
              <li>
                If the key is smaller than the middle element, then the left
                side is used for next search.
              </li>
              <li>
                If the key is larger than the middle element, then the right
                side is used for next search.
              </li>
            </ul>
          </li>
          <li>
            This process is continued until the key is found or the total search
            space is exhausted.
          </li>
        </ul>

        <Image className="w-[800px]" src={Binary} alt="Linear Search" />
      </div>
    </div>
  );
}
