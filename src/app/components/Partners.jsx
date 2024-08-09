import React from 'react'
import Image from 'next/image'

export default function Partners() {
  return (
    <div className='py-32'>
        <h2 className='text-center font-extrabold text-2xl '>Our Partners</h2>
        <div className='flex flex-row items-center justigfy justify-around'>
            <div><Image src='/google.png' width={100} height={100} /></div>
            <div><Image src='/paypal.png' width={100} height={100} /></div>
            <div><Image src='/glovo.png' width={100} height={100} /></div>
            <div><Image src='/stripe.png' width={100} height={100} className='fill-purple-900'/></div>

        </div>
    </div>
  )
}
