'use client'
import Link from "next/link";
import React, { useState } from 'react';

export default function Sort() {
 
  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <Link className="text-black" href={'/sort/mearge'}>mearge sort</Link>
      <Link className="text-black" href={'/sort/bubble'}>Bubble sort</Link>
      <Link className="text-black" href={'/sort/selection '}>Selection sort</Link>
      <Link className="text-black" href={'/sort/quick '}>Quick sort</Link>

    </div>
  );
}
