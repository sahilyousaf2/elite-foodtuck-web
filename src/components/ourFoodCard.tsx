import React from 'react'
type OurFoodCardType = {
    textColor?: string
}
export default function OurFoodCard({ textColor }: OurFoodCardType) {
    return (
        <>
            <main className='md:w-[561px]  border-b border-dashed border-[#E0E0E0]  md:h-[111px]'>
                <div className="top md:w-[561px] md:h-8 flex justify-between items-center">
                    <h1 className={`text-2xl font-bold text-${textColor}`}>Alder Grilled Chinook Salmon</h1>
                    <h1 className=' text-[#FF9F0D] text-2xl font-bold'>32$</h1>
                </div>
                <div className="bottom pt-2">
                    <h1 className='text-[#4f4f4f]'>Toasted French bread topped with romano, cheddar</h1>
                    <h3 className='text-[#828282] pt-2'>560 CAL</h3>
                </div>
            </main>
        </>
    )
}
