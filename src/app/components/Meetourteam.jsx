import React from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link';
import { HiArrowLongRight } from "react-icons/hi2";

export default function Meetourteam() {
  return (
    <div className='my-16'>
        <div className='w-[40%] m-auto py-7 text-center flex flex-col gap-5'>
           <h1 className='text-2xl font-extrabold'>Meet Our Team</h1>
           <p>ChoreAid is packed with core professionals who are dedicated to providing  excellent results to meeting customers needs</p>

        </div>

        <div className='flex md:flex-row flex-col gap-9 w-[70%] m-auto md:gap-28 py-7'>
            <div className='flex flex-col gap-6 bg-gray-100 border border-gray-300 p-5'>
                <div><Image src='/faith.jpeg' width={100} height={100} className=''/> </div>
                <h2 className='font-bold'>Faith Igwe</h2>
                <p>A professional babysitter, dedicated to work.</p>
                <h2 className='font-bold'>20,000 NGN Per hour</h2>
                <div className='flex flex-row text-4xl'><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp /></div>
            </div>
            <div className='flex flex-col gap-6 bg-gray-100 border border-gray-300 p-5'>
            <div><Image src='/michael.jpeg' width={100} height={100} className='h-20'/> </div>
                <h2 className='font-bold'>Micheal Ngah</h2>
                <p>A professional chef, dedicated to work.</p>
                <h2 className='font-bold'>30,000 NGN Per hour</h2>
                <div className='flex flex-row text-4xl'><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /></div>
            </div>
            <div className='flex flex-col gap-6 bg-gray-100 border border-gray-300 p-5' >
            <div><Image src='/isaac.jpeg' width={100} height={100} className='h-20'/> </div>
                <h2 className='font-bold'>Isaac Aliu</h2>
                <p>A trusted cleaner, dedicated to work.</p>
                <h2 className='font-bold'>10,000 NGN Per hour</h2>
                <div className='flex flex-row text-4xl'><IoStarSharp className='fill-yellow-400' /><IoStarSharp className='fill-yellow-400' /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
            </div>
        </div>
        
        <Link href='/'><div  className='bg-sky-600 flex flex-row items-center  justify-between w-[10%] m-auto rounded-2xl px-3 p-1 text-white text-sm mt-8'>See More <HiArrowLongRight /></div></Link>

        <div className='flex flex-row gap-11 justify-center w-[70%] m-auto text-3xl font-semibold py-12'>
            <div className='flex flex-col gap-2 text-center border border-blue-400 bg-sky-50 py-4 px-24 rounded-xl'>
                <p>100 +</p>
                <p>Workers</p>
            </div>
            <div className='flex flex-col gap-2 text-center border border-blue-400 bg-sky-50 py-4 px-24 rounded-xl'>
            <p>300 +</p>
            <p>Clients</p>
            </div>
            <div className='flex flex-col gap-2 text-center border border-blue-400 bg-sky-50 py-4 px-24 rounded-xl'>
            <p>200 +</p>
            <p>Reviews</p>
            </div>
        </div>
        
    </div>
  )
}
