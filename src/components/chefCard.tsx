// import React from 'react'
// type ChefCardType = {
//     imageURL: string,
//     name: string,
//     position: string
// }
// export default function ChefCard(props: ChefCardType) {
//     return (
//         <>
//             <main className='md:w-[293px] space-x-1 relative group overflow-hidden md:h-[391px] rounded-md'>
//                 <img src={props.imageURL} className='relative group-hover:scale-110 transition-transform duration-300 md:w-[293px] md:h-[391px]' alt="" />
//                 <div className='w-[160px] h-[67px] rounded top-[316px] left-1 text-center absolute bg-white text-black'>
//                     <h1 className='text-[18px] font-bold pt-[6px]'>{props.name}</h1>
//                     <h3 className='pt-1 text-[#333333] text-sm'>{props.position}</h3>
//                 </div>

//             </main>
//         </>
//     )
// }
import React from 'react'
import Image from 'next/image'

type ChefCardType = {
    imageURL: string,
    name: string,
    position: string
}

export default function ChefCard(props: ChefCardType) {
    return (
        <>
            <main className='md:w-[293px] space-x-1 relative group overflow-hidden md:h-[391px] rounded-md'>
                <Image
                    src={props.imageURL}
                    className='relative group-hover:scale-110 transition-transform duration-300 md:w-[293px] md:h-[391px] object-cover'
                    alt={`Chef ${props.name}`}
                    width={293}
                    height={391}
                    priority
                />
                <div className='w-[160px] h-[67px] rounded top-[316px] left-1 text-center absolute bg-white text-black'>
                    <h1 className='text-[18px] font-bold pt-[6px]'>{props.name}</h1>
                    <h3 className='pt-1 text-[#333333] text-sm'>{props.position}</h3>
                </div>
            </main>
        </>
    )
}