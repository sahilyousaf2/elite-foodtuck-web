import React from 'react'
import Image from 'next/image'

export default function TestimorialBgWhite() {
    return (
        <>
            <main className='mx-auto relative md:mb-28 mt-[900px] md:-mt-24 md:w-[1170px] md:h-[770px]'>
                <div className='text'>
                    <h1 className='text-[32px] text-center md:text-left md:pl-10 md:pt-0 pt-4 about text-[#FF9F0D]'>Tesimorial</h1>
                    <h1 className='text-5xl text-center md:text-left md:pl-10 md:pt-0 pt-4 font-bold'>What our client are saying</h1>
                </div>
                <div className="card shadow-2xl relative w-[300px] md:w-[868px] h-[550px] md:h-[451px] mt-20 bg-white mx-auto md:mt-[122px]">
                    <div className="image absolute left-20 md:left-[367px] top-[-66px]">
                        <Image src="/Ellipse 6.png" alt="" layout="fixed" width={150} height={10} />
                    </div>
                    <div className="Quotes absolute left-32 top-[99px] md:left-[410px]">
                        <Image src="/Quotes.png" alt="" layout="fixed" width={48} height={48} />
                    </div>
                    <div className="text absolute flex justify-center items-center w-[250px] md:w-[697px] h-[104px] left-10 top-[220px] md:top-[178px] md:left-[86px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    </div>
                    <div className="star absolute top-[400px] left-20 md:top-[314px] md:left-[358px]">
                        <Image src="/star.png" alt="" layout="fixed" width={152} height={6} />
                        <h1 className='text-2xl pt-4 text-[#333333] font-bold text-center'>Alamin Hasan</h1>
                        <h1 className='text-[#828282] pt-2 text-center'>Food Specialist</h1>
                    </div>
                </div>
                <div className="overlay absolute top-[195px] left-[745px]">
                    <Image src="/unsplash_Ioq6qEibtbU.png" alt="" layout="fixed" width={300} height={300} />
                </div>
                <div className='hidden w-[86px] mx-auto mt-14 h-4 md:flex justify-between items-center'>
                    <div className='bg-[#FF9F0D] h-4 w-[15px] rounded-full'></div>
                    <div className='bg-[#FF9F0D]/30 h-4 w-[15px] rounded-full'></div>
                    <div className='bg-[#FF9F0D]/30 h-4 w-[15px] rounded-full'></div>
                    <div className='bg-[#FF9F0D]/30 h-4 w-[15px] rounded-full'></div>
                </div>
            </main>
        </>
    )
}
