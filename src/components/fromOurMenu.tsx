

import React from 'react'
import Image from 'next/image'
import FormCard from './formCard'
import { FromCardData } from '@/constant/FormCard'

export default function FromOurMenu() {
    return (
        <>
            <main className='md:w-[1170px] md:h-[656px] mx-auto'>
                <div className="text text-white text-center">
                    <h1 className='text-[32px] about text-[#FF9F0D]'>Choose & pick</h1>
                    <h1 className='text-5xl'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>
                </div>
                <div className="nav md:w-[900px] md:h-[28px] md:mt-14">
                    <ul className='text-xl text-center md:text-left py-3 md:py-0 md:flex justify-between text-white'>
                        <li className='font-bold text-[#FF9F0D]'>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>
                        <li>Soups</li> {/* Fixed typo from "Suops" to "Soups" */}
                    </ul>
                </div>
                <div className='md:mt-14 md:flex'>
                    {/* Using Next.js Image component for the main image */}
                    <Image 
                        src="/Group 1000002253.png" 
                        alt="Menu image showcasing various food items" 
                        width={515} 
                        height={406} 
                        className='object-cover' 
                    />
                    <div className='grid md:mt-0 mt-4 mx-4 md:mx-0 gap-3 md:gap-0 grid-cols-1 md:grid-cols-2'>
                        {
                            FromCardData.map((card) => {
                                return (
                                    <FormCard
                                        key={card.id}
                                        imageURL={card.imageURL}
                                        price={card.price}
                                        name={card.name}
                                        dis={card.dis}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
