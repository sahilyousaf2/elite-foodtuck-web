import React from 'react'
type LatestCardDataType = {
    imageURL: string,
    name: string
}
export default function LatestCard(props: LatestCardDataType) {
    return (
        <>
            <main className='w-[390px] border-2 border-white h-[500px] md:h-[569px]'>
                <div className="image">
                    <img src={props.imageURL} className='w-[390px] md:h-[349px]' alt="" />
                </div>
                <div className='w-[390px] md:h-[220px] '>
                    <div className="text">
                        <h1 className='text-base pl-11 pt-7 text-[#FF9F0D]'>10 February 2022</h1>
                        <h1 className='text-2xl pl-11 pt-4 text-white'>{props.name}</h1>
                    </div>
                    <div className="learnMore mx-auto text-white md:mb-5 mb-0 w-[290px] mt-8 flex justify-between items-center">
                        <h1>Learn More</h1>
                        <div className='flex justify-center items-center'>
                            <img src="/ThumbsUp.png" alt="" />
                            <img src="/ChatDots.png" alt="" />
                            <img src="/ShareNetwork.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
