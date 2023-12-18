'use client'
import Link from "next/link";
import React, { useState } from 'react';

export default function Search() {
 
  return (
    <div className="flex flex-col items-center gap-5 pt-32 min-h-screen">
      <Link className="text-black" href={'search/linear'}>Linear Search</Link>
    </div>
  );
}
