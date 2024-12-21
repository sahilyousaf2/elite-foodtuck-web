import React from 'react'
type FiterMenuCardType = {
    imageURL: string,
    name: string,
    oder: number
}
export default function FiterMenuCard({ imageURL, name, oder }: FiterMenuCardType) {
    return (
        <>
            <main className=' md:w-[311px] h-[62px] flex items-center'>
                <img src={imageURL} alt="" className='w-[67px] h-[62px] rounded-md' />
                <div className="text w-full md:w-[210px] pl-4 flex justify-between items-center">
                    <h1 className='font-bold'>{name}</h1>
                    <h1 className=' text-[#333333]'>{oder}</h1>
                </div>
            </main>
        </>
    )
}
