import React from 'react'
import Image from 'next/image'
type TeamMemberCardType = {
    name: string,
    position: string,
    isTure?: boolean
}
export default function TeamMemberCard({ isTure, name, position }: TeamMemberCardType) {

    return (
        <>
            <main className='relative md:w-[274px] md:h-[398px]  shadow-lg bg-white'>
                <div>
                    <Image src="/team.png" alt="" layout="fixed" width={274} height={310} />
                    <h1 className='text-center pt-4 text-xl font-bold text-[#4f4f4f]'>{name}</h1>
                    <h3 className='text-center pt-1 text-base text-[#828282]'>{position}</h3>
                </div>
                {isTure &&
                    <div className='absolute flex flex-col gap-3 top-6 right-7'>
                        <Image src="/Group 20219.png" alt="" layout="fixed" width={50} height={50} />
                        <Image src="/Group 20220.png" alt="" layout="fixed" width={50} height={50} />
                        <Image src="/Group 20222.png" alt="" layout="fixed" width={50} height={50} />
                        <Image src="/Group 20223.png" alt="" layout="fixed" width={50} height={50} />
                    </div>
                }
            </main>
        </>
    )
}
