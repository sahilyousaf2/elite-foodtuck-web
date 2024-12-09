
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShopCard from '@/components/shopCard'
import { ShopCardData } from '@/constant/ShopCardData'

function Shop() {
  return (
    <>
      <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our Shop
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/shop" className='text-[#FF9F0D]'>
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='w-[1170px] h-[1900px] mx-auto flex my-[120px]'>
        <div className='w-[858px] h-[1900px]  '>
          <div className='w-[682px] flex justify-between items-center h-[46px]'>
            <div className='w-[332px] flex justify-between items-center h-[46px] '>
              <h1 className='text-xl'>Sort By :</h1>
              <Image
                src={"/Newest.png"}
                width={246}
                height={46}
                alt=''
              />
            </div>
            <div className='w-[332px] flex justify-between items-center h-[46px] '>
              <h1 className='text-xl'>Show : :</h1>
              <Image
                src={"/Newest (1).png"}
                width={246}
                height={46}
                alt=''
              />
            </div>
          </div>
          <div className='grid mt-6 grid-cols-[270px_270px_270px] gap-6'>
            {
              ShopCardData.map((card) => {
                return (
                  <>
                    <ShopCard
                      imageURl={card.imageURl}
                      name={card.name}
                      price={card.price}
                      delPrice={card.delPrice}
                      topImage={card.topImage}
                      topSellImage={card.topSellImage}
                    />
                  </>
                )
              })
            }
          </div>
        </div>
        <div className='ml-6 mt-[70px]'>
          <Image
            src={"/Side ber2.png"}
            height={1489}
            width={312}
            alt=''
          />
        </div>
      </section>
    </>
  )
}

export default Shop