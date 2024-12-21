import React from 'react'
type BlogPhoto = {
    imageURL: string,
    eye: boolean
}
export default function BlogPhoto({ imageURL, eye }: BlogPhoto) {
    return (
        <>
            <main className='relative w-[110px] h-[92px]'>
                <img src={imageURL} className=' w-[110px] h-[92px]' alt="" />
                {
                    eye && <div className='w-[110px] h-[92px] absolute top-0 bg-black/70'>
                        <img src="/.png" alt="" className='absolute top-10 left-10' />
                    </div>
                }

            </main>
        </>
    )
}
