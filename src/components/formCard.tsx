import Image from 'next/image'
import React from 'react'
type CardType = {
    imageURL: string,
    name: string,
    dis: string,
    price: string
}
export default function FormCard(props: CardType) {
    return (
        <>
            <main className='md:ml-5 text-white md:w-[300px] flex md:h-[70px]'>
                <Image
                    src={props.imageURL}
                    width={80}
                    height={70}
                    alt=''

                />
                <div className='ml-2 -mt-1'>
                    <h1 className='text-xl font-bold'>{props.name}</h1>
                    <p className='text-nowrap text-sm'>{props.dis}</p>
                    <h1 className='text-[18px] text-[#FF9F0D] font-bold'>{props.price}</h1>
                </div>
            </main>
        </>
    )
}
