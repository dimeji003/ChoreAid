import React from 'react'
import styles from './about.module.css'
import Searchbar from '../components/Searchbar'
import Image from 'next/image'

export default function page() {
  return (
    <div>
    <div className={styles.home}>
       <div className='relative top-96'><Searchbar /></div> 

    </div>

   
        <h2 className='text-center font-extrabold pt-20 text-2xl'>We render the following services..</h2>
        <div className='w-[75%] m-auto'>
            <div className='flex md:flex-row flex-col items-center py-9'>
                <div className='w-[100%]'><Image src='/cleaning.jpeg' width={450} height={100} /></div>
                <div className='w-[100%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cleaning</h2>
                    <p>ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning service is divided into two distinct sections to provide flexibility and convenience for our customers:</p>
                    <p className='font-bold'>1. Professional Cleaning Services</p>
                    <p className='font-bold'>2. AssistKlin Cleaning Services</p>
                </div>

            </div>

            <h2 className='font-bold'>1. Professional Cleaning Service</h2>
            <p className='pt-7'><h2 className='font-semibold'>Description</h2>
            ChoreAid provides both the cleaning tools and the cleaning service. This option is ideal for customers who want a hassle-free experience where everything is taken care of by our professional cleaners.</p>
            <p className='pt-7 font-semibold'>Features</p>
            <ul>
                <li>-Thorough cleaning of all designated areas.</li>
                <li>-Suitable for customers who prefer not to handle cleaning logistics.</li>
                <li>-High-quality, eco-friendly cleaning products used.</li>
            </ul>

            <h2 className='pt-9 font-bold'>2. AssistKlin Cleaning Service</h2>
            <h2 className='font-bold pt-7'>Description:</h2>
            <p>Customers provide the cleaning tools, and ChoreAid provides the cleaning service. This option is cost-effective and convenient for customers who already have cleaning supplies and equipment at home.</p>

            <h2 className='pt-7 font-bold'>Features:</h2>
            <p>- Professional cleaning service performed by ChoreAid cleaners.</p>
            <p>- Flexible and budget-friendly option.</p>
            <p>- Suitable for customers who prefer using their own cleaning products</p>

            
        </div>
   

    </div>
  )
}
