
import React from 'react'
import Image from 'next/image'

type BlogPhoto = {
    imageURL: string,
    eye: boolean
}

export default function BlogPhoto({ imageURL, eye }: BlogPhoto) {
    return (
        <>
            <main className='relative w-[110px] h-[92px]'>
                <Image
                    src={imageURL}
                    className='w-[110px] h-[92px] object-cover'
                    alt="Blog gallery photo"
                    width={110}
                    height={92}
                />
                {eye && (
                    <div className='w-[110px] h-[92px] absolute top-0 bg-black/70'>
                        <Image
                            src="/.png"
                            alt="Eye icon"
                            className='absolute top-10 left-10'
                            width={20}
                            height={20}
                        />
                    </div>
                )}
            </main>
        </>
    )
}