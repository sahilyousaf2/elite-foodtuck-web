import React from 'react'
import LatestCard from './latestCard'
import { LatestCardData } from '@/constant/latestCardData'

export default function LastestBlog() {
    return (
        <>
            <main className=' md:w-[1170px] md:mt-0 mt-10 md:h-[732px] md:my-[120px] mx-auto'>
                <div className="text-white text-center">
                    <h1 className='about text-[32px] text-[#FF9F0D]'>Blog Post</h1>
                    <h1 className='text-5xl font-bold'><span className='text-[#FF9F0D]'>La</span>test News & Blog</h1>
                </div>
                <div className='md:mt-14 grid md:ml-0 ml-10 mt-5 md:grid-cols-[390px_390px_390px] gap-4 md:gap-2'>
                    {
                        LatestCardData.map((card) => {
                            return (
                                <LatestCard
                                    imageURL={card.imageURL}
                                    name={card.name}

                                />

                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}
