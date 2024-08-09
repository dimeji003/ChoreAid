import React from 'react'
import styles from './main.module.css'

export default function Keypoints() {
  return (
    <div className={styles.keypoints}>
        <div className='flex h-[100%] justify-center text-sky-800 font-extrabold gap-8 text-3xl items items-center flex-col'>
       <h2 className='text-center border-b-2 border-sky-800'>Keypoints</h2> 
       <ol  className='text-center flex flex-col gap-5'>
        <li>1. Trusted workers </li>
        <li>2. Reliable Support</li>
        <li>3. Flexible Booking</li>
       </ol>

        </div>
    </div>
  )
}
