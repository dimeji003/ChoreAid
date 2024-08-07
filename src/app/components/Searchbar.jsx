import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function Searchbar() {
  return (
    <div className='flex flex-row font-thin w-[60%] bg-sky-200 py-3 my-14 m-auto items-center justify-between px-10 rounded-[20px]'>
        <div className=''>Search for any service... </div>
        <div className='bg-white p-1 text-[26px]'><IoSearchOutline /></div>
    </div>
  )
}
