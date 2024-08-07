import Image from 'next/image'
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';


export default function Services() {
  return (
    <div className='w-[70%] m-auto'>
        <div className='text-center flex flex-col gap-3'>
            <h1 className='text-2xl font-extrabold'>WHAT IS CHOREAID?</h1>
            <p>Due to work demands, lack of time, and other family or home challenges, some family or individual needs often go unmet. ChoreAid is a platform where families or individuals who can help with errands and other tasks.</p>
        </div>

        <div className='text-center py-28'>
            <h1 className='text-2xl font-extrabold'>Our Services</h1>
            <p>We render the following domestic services to our clients</p>
        </div>

        <div className='flex flex-col gap-7'>
            <div className='flex flex-row justify-between items-center'>
                <div className='w-[45%]'><Image src='/cleaning.jpeg' width={300} height={300} className='w-[100%]'/> </div>
                <div className='w-[45%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cleaning</h2>
                    <p>ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of families and individuals</p>
                    <Link href='/'>
                      <div className='bg-sky-600 flex flex-row items-center  justify-between w-[30%] rounded-2xl px-3 p-1 text-white'>
                        <p className='text-sm'>Read More</p> 
                        <HiArrowLongRight />
                      </div>
                    
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='w-[45%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cooking</h2>
                    <p>ChoreAid offers a flexible cooking service where customers provide all necessary ingredients, and our professional cooks provide the labor and expertise to prepare the meals.</p>
                    <Link href='/'>
                      <div className='bg-sky-600 flex flex-row items-center  justify-between w-[30%] rounded-2xl px-3 p-1 text-white'>
                        <p className='text-sm'>Read More</p> 
                        <HiArrowLongRight />
                      </div>
                    
                    </Link>

                </div>
                <div className='w-[45%]'><Image src='/cooking.jpeg' width={300} height={100} className='w-[100%] h-72'/></div>
            </div>
            <div className='flex flex-row justify-between items-center'>
            <div className='w-[45%]'><Image src='/babysitting.jpeg' width={300} height={300} className='w-[100%]'/> </div>
                <div className='w-[45%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-28'>Babysitting</h2>
                    <p>Babysitting is temporarily caring for a chlld providing care in the absence of their parents.</p>
                    <Link href='/'>
                      <div className='bg-sky-600 flex flex-row items-center  justify-between w-[30%] rounded-2xl px-3 p-1 text-white'>
                        <p className='text-sm'>Read More</p> 
                        <HiArrowLongRight />
                      </div>
                    
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
            <div className='w-[45%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-20'>Errands</h2>
                    <p>ChoreAid provides you with professionals that will help you run errands such as grocery shopping, parcel pick up etc.</p>
                    <Link href='/'>
                      <div className='bg-sky-600 flex flex-row items-center  justify-between w-[30%] rounded-2xl px-3 p-1 text-white'>
                        <p className='text-sm'>Read More</p> 
                        <HiArrowLongRight />
                      </div>
                    
                    </Link>

                </div>
                <div className='w-[45%]'><Image src='/errands.jpeg' width={300} height={100} className='w-[100%] '/></div>

            </div>
        </div>
    </div>
  )
}
