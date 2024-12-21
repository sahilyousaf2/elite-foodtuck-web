'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function Hero() {
    const router = useRouter()
    return (
        <>
            <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
                            404
                        </h1>
                        <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
                            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                                Home
                            </Link>
                            <span className='text-white'>/</span>
                            <Link href="/404Error" className='text-[#FF9F0D]'>
                                404
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='h-[582px] md:w-[630px] mx-auto'>
                <h1 className='text-[96px] text-[#FF9F0D] leading-[104px] font-semibold text-center pt-[120px]'>404</h1>
                <p className='text-[32px] font-semibold leading-[40px] text-center pt-8'>Oops! Look likes something going wrong</p>
                <p className='text-[18px] font-semibold leading-[26px]  text-center pt-8'>Page Cannot be found! well have it figured out in no time.
                    Menwhile, cheek out these fresh ideas:</p>
                <div className='flex justify-center items-center mt-8'>
                    <button onClick={() => {
                        router.push("/")
                    }} className='text-[18px] font-semibold leading-[26px] text-white w-[197px] h-[58px] bg-[#FF9F0D]'>Go to home</button>
                </div>
            </div>
        </>
    )
}

export default Hero