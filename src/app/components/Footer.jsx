import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-row justify-between w-[70%] m-auto h-[50vh] items-center'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-sky-500'>ChoreAid</h2>
            <p className='text-sm'>choreaid@gmail.com</p>
            <p className='text-sm'>+23344789987799878</p>
        </div>
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col text-sm gap-2'>
                <h2 className='text-sky-500 '>Quick links</h2>
                <p className='pt-2'>About Us</p>
                <p>Blog</p>
                <p>Terms & Conditiom</p>
            </div>
            <div className='flex flex-col text-sm gap-2'>
                <h2 className='text-sky-500 '>Help Center</h2>
                <p className='pt-2'>Privacy Policy</p>
                <p>Contact Support</p>
                <p>FAQ</p>
                
            </div>
            <div className='flex flex-col text-sm gap-2'>
                <h2 className='text-sky-500'>Join our Team</h2>
                <p className='pt-2'>Careers</p>
                <p>Meet our team</p>
            </div>
        </div>
    </div>
  )
}
