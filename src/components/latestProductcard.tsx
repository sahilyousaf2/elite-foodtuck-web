import React from 'react'
import Image from 'next/image'
export type LatestProductcardDataType = { name: string }
export default function LatestProductcard(props: LatestProductcardDataType) {
    return (
        <>
            <main>
                <div className='w-[252px] flex items-center gap-[15.58px]  mt-4 h-[67px] text-[#4F4F4F]'>
                    <Image
                        src={"/product-20.png"}
                        width={71.81}
                        height={65}
                        alt=''
                    // className='mt-4'
                    />
                    <div >
                        <h1>{props.name}</h1>
                        <Image
                            src={"/star.png"}
                            width={63}
                            height={9}
                            alt=''
                            className='pt-2'
                        />
                        <h1 className='pt-1'>$35.00</h1>
                    </div>
                </div>
            </main>
        </>
    )
}
