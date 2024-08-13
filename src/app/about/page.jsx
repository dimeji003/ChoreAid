import React from 'react'
import styles from './about.module.css'
import Searchbar from '../components/Searchbar'
import Image from 'next/image'
import { BsQuestionSquareFill } from "react-icons/bs";


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

            <h2 className='pt-9 font-bold'>Accomodation types</h2>
            <p>Self-contained, One Bedroom, Two Bedroom, Three Bedroom, Four Bedroom and Above</p>
            <p>ChoreAid will provide the following services</p>
            <p className='pt-7 font-bold'>i. General Cleaning</p>
            <p className='font-bold'>ii. Fumigation</p>

            <div className='flex md:flex-row flex-col items-center py-14'>
                <div className='w-[100%]'><Image src='/cookingservice.jpeg' width={450} height={100} /></div>
                <div className='w-[100%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cooking</h2>
                    <p>ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning service is divided into two distinct sections to provide flexibility and convenience for our customers:</p>
                    <p className='font-bold'>1. Meal Preparation</p>
                    <p className='font-bold'>2. Specialty Cooking</p>
                </div>
                
            </div>

            <div className='flex flex-col gap-7'>
                <h2 className='font-bold'>1. Meal Preparation</h2>
                <p>ChoreAid offers three tiers of meal preparation services, each tailored to different needs and serving sizes.</p>
                <p>i. Basic Meal</p>
                <p>Description: Preparation of one dish serving 1-2 people.</p>
                <p>Features:</p>
                <div>
                    <p>- Ideal for small meals or individual servings.</p>
                    <p>- Quick and efficient meal preparation.</p>
                </div>
            </div>

            <div className='flex flex-col gap-7 pt-14'>
                <h2 className='font-bold'>2. Specialty Cooking</h2>
                <p>Chore_Aid provides specialty cooking services for unique culinary needs and preferences.</p>
                <p>i. BBQ and Grill</p>
                <p>Description: Expert preparation of BBQ and grilled dishes</p>
                <p>Features:</p>
                <div>
                    <p>- Ideal for outdoor events and gatherings.</p>
                    <p>- Professional grilling techniques.</p>
                </div>
            </div>

            <div className='flex flex-col gap-7 pt-14'>
                <h2 className='font-bold'>3. Large Coooking</h2>
                <p>Chore_Aid offers cooking services for larger groups and events, ensuring everyone is well-fed with delicious meals.</p>
                <p>i. 10-20 People</p>
                <p>Description: Preparation of meals serving 10-20 people.</p>
                <p>Features:</p>
                <div>
                    <p>- Suitable for medium-sized gatherings and events.</p>
                    <p>- Efficient and large-scale meal preparation.</p>
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center py-14'>
                <div className='w-[100%]'><Image src='/cookingservice.jpeg' width={450} height={100} /></div>
                <div className='w-[100%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cooking</h2>
                    <p>ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning service is divided into two distinct sections to provide flexibility and convenience for our customers:</p>
                    <p className='font-bold'>1. Meal Preparation</p>
                    <p className='font-bold'>2. Specialty Cooking</p>
                </div>
                
            </div>

            <div className='flex md:flex-row flex-col items-center py-14'>
                <div className='w-[100%]'><Image src='/cookingservice.jpeg' width={450} height={100} /></div>
                <div className='w-[100%] flex flex-col gap-5'>
                    <h2 className='text-xl font-bold border-b-2 border-black w-24'>Cooking</h2>
                    <p>ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning service is divided into two distinct sections to provide flexibility and convenience for our customers:</p>
                    <p className='font-bold'>1. Meal Preparation</p>
                    <p className='font-bold'>2. Specialty Cooking</p>
                </div>
                
            </div>

            <h2 className='font-extrabold text-2xl pt-12'>Frequently asked questions?</h2>
            <p>Most often questions that users ask.</p>
            <div className='flex flex-row justify-between items-center gap-14 h-56 md:my-14'>
                <div className='flex flex-col items-center text-center w-[50%] gap-4 bg-sky-100 p-2 py-6'>
                    <div className='text-3xl  text-sky-600'><BsQuestionSquareFill /></div>
                    <h2>You have a different question?</h2>
                    <p>Reach out to us with your question and our support team will give you an answer as soon as possible.</p>
                    <p className='p-1 px-4 rounded-3xl bg-sky-600 w-[46%] text-center text-white'>Connect support team</p>

                </div>
                <div className='w-[50%] flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-between'><p className='flex flex-row'><p>1.</p>How do I figure out your premium workers?</p><div className='rounded-full border border-black px-2'>-</div></div>
                    <div className='flex flex-row items-center gap-11 justify-between'><p className='flex flex-row'><p>2.</p>How do I go about my bookings?</p><div className='rounded-full border border-black px-2'>-</div></div>
                    <div className='flex flex-row items-center gap-11 justify-between'><p className='flex flex-row'><p>3.</p>Are your staffs trained professionally?</p><div className='rounded-full border border-black px-2'>+</div></div>
                    <div className='flex flex-row items-center gap-11 justify-between'><p className='flex flex-row'><p>4.</p>Is ChoreAid available in all states in the country?</p><div className='rounded-full border border-black px-2'>+</div></div>
                </div>
            </div>

            
        </div>

        <div className={`pt-10  ${styles.keypoints}`}>

        </div>
   

    </div>
  )
}
