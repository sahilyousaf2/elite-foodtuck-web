import React from 'react'
import ChefCard from './chefCard'
import { ChefCardData } from '@/constant/ChefCardData'
export default function MeetOurChef() {
    return (
        <>
            <main className='mt-[120px] mx-auto text-white md:w-[1170px]  md:h-[657px] '>
                <div className="text text-center">
                    <h1 className='about text-[32px] text-[#FF9F0D]'>Chefs</h1>
                    <h1 className=' text-5xl font-bold'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1>
                </div>
                <div className='ml-20 space-y-5 md:space-y-0 mt-5 md:ml-0 md:flex md:mt-14'>
                    {
                        ChefCardData.map((chef) => {
                            return (

                                <ChefCard
                                    key={chef.id}
                                    imageURL={chef.imageURL}
                                    name={chef.name}
                                    position={chef.position}
                                />
                            )
                        })
                    }
                </div>
                <div className='flex mt-5 justify-center items-center md:mt-14'>
                    <button className='w-[155px] h-[50px] rounded-full flex justify-center items-center border-2 border-[#FF9F0D]'>See More</button>
                </div>
            </main>
        </>
    )
}
