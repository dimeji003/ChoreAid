import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between px-32 py-7 bg-white text-black'>
        <div>
            <p>ChoreAid</p>

        </div>
        <div className='flex flex-row gap-6 items-center'>
            <p>Home</p>
            <p>Services</p>
            <p>Help Center</p>
            <p>Meet our team</p>
            <p className='bg-blue-600 p-2 rounded-3xl'>Sign Up/Login</p>

        </div>
    </div>
  )
}
