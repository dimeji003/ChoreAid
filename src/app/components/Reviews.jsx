import React from 'react'
import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

export default function Reviews() {
  return (
    <div>
        <h1 className='text-center w-[80%] m-auto md:w-[100%] font-bold text-2xl '>What are they saying about ChoreAid</h1>
        <div className='flex md:flex-row flex-col w-[80%] m-auto gap-20 pt-16'>
            <div className='flex flex-col gap-4 bg-sky-200 p-8 w-[100%] rounded-xl'>
                <Image src='/review1.jpeg' width={50} height={50} className='rounded-2xl'/>
                <p>They were responsive and they always did their best to follow up with us to ensure that the work was done to our satisfaction.</p>
                <h2 className='font-bold'>John Benedict</h2>
              
            </div>
            <div className='flex flex-col gap-4 bg-sky-200 p-8 w-[100%] rounded-xl'>
                <Image src='/review2.jpeg' width={50} height={50} className='rounded-2xl'/>
                <p>It’s no exaggeration to say that I was lost before I found ChoreAid and I recommend them wholeheartedly!</p>
                <h2 className='font-bold'>Elizabeth Micheal</h2>

            </div>
        </div>

        <Link href='/'><div  className='bg-sky-600 flex flex-row items-center  justify-between md:w-[10%] w-[30%] m-auto rounded-2xl px-3 p-1 text-white text-sm mt-8'>See More <HiArrowLongRight /></div></Link>

    </div>
  )
}
