'use client'
import Link from "next/link";
export default function NavBar() {
  return <>

  <div className=" h-10 bg-Navy w-full fixed shadow-xl  flex flex-row  justify-around gap-96 items-center text-center p-10">
<div className=" text-white font-bold"> <Link  href="/" > Data Structure </Link></div>
<div className=" text-white font-bold flex flex-row gap-6" >
    <Link className=" hover:text-Baby hover:border-b-2" href={'/stack'}> Stack </Link>
    <Link className=" hover:text-Baby hover:border-b-2"  href={'/queue'}> Queue </Link>
    <Link className=" hover:text-Baby hover:border-b-2"  href={'/stack'}> Search </Link>
    <Link className=" hover:text-Baby hover:border-b-2"  href={'/Sort'}> Sort </Link>

</div>
</div>
  </>;
}
