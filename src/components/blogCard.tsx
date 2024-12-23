import React from 'react'
import Image from 'next/image'

type BlogCardDataType = {
    imageURL: string,
}

export default function BlogCard({ imageURL }: BlogCardDataType) {
    return (
        <>
            <main className='md:w-[323px] spy2 flex md:h-[107px]'>
                <div className="img">
                    <Image 
                        src={imageURL} 
                        className='rounded-md' 
                        width={99} 
                        height={91} 
                        alt="Blog post thumbnail" 
                    />
                </div>
                <div className="text pl-4">
                    <h3 className='text-[#828282]'>June 22, 2020</h3>
                    <p className='text-[#4f4f4f] pt-2'>Lorem ipsum dolor sit cing
                        <br />
                        elit, sed do.</p>
                </div>
            </main>
        </>
    )
}