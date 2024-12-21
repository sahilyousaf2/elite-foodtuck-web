import React from 'react'
import OurFoodCard from './ourFoodCard'

export default function OurFoodMenu() {
    return (
        <>
            <main className='md:mx-auto md:mb-[120px] md:mt-0 mt-10 md:w-[1170px] md:h-[941px]'>
                <div className="head">
                    <h1 className='text-5xl font-bold text-center text-[#333333]'>Our Food Menu</h1>
                    <p className='text-center pt-2 text-base text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Varius sed pharetra dictum neque massa congue</p>
                </div>
                <div className="nav md:mx-auto md:w-[900px] md:h-[28px] md:mt-14">
                    <ul className='text-xl text-center md:text-left py-3 md:py-0 md:flex justify-between text-[#4f4f4f]'>
                        <li className=' font-bold text-[#FF9F0D] border-b border-[#FF9F0D]'>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>
                        <li>Suops</li>
                    </ul>
                </div>
                <hr className='md:w-[1170px] bg-[#E0E0E0] mx-auto md:mt-6' />
                <div className='md:w-[1170px] gap-6 grid-cols-1 md:my-0 my-10 mx-10 grid md:grid-cols-2 md:mx-auto md:mt-[58px]'>
                    <div>
                        <OurFoodCard textColor='[#FF9F0D]' />
                    </div>
                    <OurFoodCard />
                    <OurFoodCard />
                    <OurFoodCard />
                    <OurFoodCard />
                    <OurFoodCard />
                    <OurFoodCard />
                    <OurFoodCard />
                </div>
                <div className='flex justify-center md:my-0 my-5 items-center md:mt-14'>
                    <button className='w-[143px] h-[52px] border text-[#FF9F0D] border-[#FF9F0D] flex justify-center items-center'>View menu</button>

                </div>
            </main>
        </>
    )
}
