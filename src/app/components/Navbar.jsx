"use client"
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import Link from 'next/link';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    function onclick(){
        setShowNav(!showNav)
    }

  return (
    <div className='flex flex-row h-20  items-center justify-between  lg:px-24 px-10 py-7 bg-white text-black'>
        <div>
            <p>ChoreAid</p>

        </div>
        <div className='flex items-center h-[100vh] lg:h-10'>
        <div className={`flex text-black lg:flex-row flex-col h-[100vh] text-sm md:gap-11 gap-14 justify-center absolute z-50 bg-white sm:bg-transparent left-0 right-0 bottom-0   md:relative  top-0 items-center ease-in-out duration-500 transition ${showNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>

            
            <Link href='/'><p>Home</p></Link>
            <Link href='/about'><p>Services</p></Link>
            <p>Help Center</p>
            <p>Meet our team</p>
            <p className='bg-sky-600 p-1 px-6 text-white  rounded-3xl'>Sign Up/Login</p>
            <MdCancel className='lg:hidden' onClick={onclick}/>

        </div>

        </div>
        <RiMenu3Fill className='lg:hidden' onClick={onclick}/>
    </div>
  )
}
