
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShopCard from '@/components/shopCard'
import { ShopCardData } from '@/constant/ShopCardData'
import CheckBox from '@/components/checkBox'
import Navbar from '@/components/Navbar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import LatestProductcard from '@/components/latestProductcard'
const CheckBoxNames = ["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg", "Uncategorized"];
const LatestProductcardData = ["Pizza", "Cupchake", "Cookies", "Burger"]
function Shop() {
  return (
    <>
      <Navbar />
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
      <section className='max-w-[1170px] mx-auto px-4 my-8 lg:my-[120px]'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Main Content Area */}
          <div className='w-full lg:w-[858px]'>
            {/* Sort Controls */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4'>
                <h1 className='text-xl whitespace-nowrap'>Sort By:</h1>
                <Select>
                  <SelectTrigger className="w-full sm:w-[246px] text-[#BDBDBD] h-[46px]">
                    <SelectValue placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Newest</SelectLabel>
                      <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                      <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                      <SelectItem value="blueberry">Burger</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4'>
                <h1 className='text-xl whitespace-nowrap'>Show:</h1>
                <Select>
                  <SelectTrigger className="w-full sm:w-[246px] text-[#BDBDBD] h-[46px]">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Default</SelectLabel>
                      <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                      <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                      <SelectItem value="blueberry">Burger</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className='grid mx-24 md:mx-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
              {ShopCardData.map((card, index) => (
                <ShopCard
                  key={index}
                  imageURl={card.imageURl}
                  name={card.name}
                  price={card.price}
                  delPrice={card.delPrice}
                  topImage={card.topImage}
                  topSellImage={card.topSellImage}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='w-full h-[1489px] mt-16 lg:w-[312px] border rounded-lg p-4'>
            {/* Search */}

            <div className='flex justify-center mb-6'>
              <div className='flex w-full max-w-[248px]'>
                <input
                  type="text"
                  placeholder='Search Product'
                  className='bg-[#FF9F0D1A]/10 pl-5 h-12 flex-grow'
                />
                <button className='w-12 h-12 bg-[#ff9f0d] flex justify-center items-center'>
                  <Image
                    src='/MagnifyingGlass.png'
                    alt='Search'
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            {/* Category */}
            <div className='mb-6'>
              <h1 className='text-xl font-semibold mb-4'>Category</h1>
              <div className='space-y-2'>
                {CheckBoxNames.map((name, index) => (
                  <CheckBox key={index} name={name} />
                ))}
              </div>
            </div>

            {/* Perfect Taste Banner */}
            <div className='w-full max-w-[248px] h-[286px] mx-auto mb-6 bg-[url("/Rectang.png")] bg-cover'>
              <div className="p-6 text-white">
                <h1 className='text-base font-bold'>Perfect Taste</h1>
                <h1 className='text-xl pt-1 font-bold'>Classic Restaurant</h1>
                <h3 className='text-base text-[#FF9F0D] pt-1 font-bold'>45.00$</h3>
                <div className='flex items-center gap-2 mt-[109px]'>
                  <h3>Shop Now</h3>
                  <Image
                    src="/ArrowCircleRight.png"
                    height={20}
                    width={20}
                    alt='Arrow'
                  />
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div className='mb-6'>
              <h1 className='text-xl font-semibold mb-4'>Filter By Price</h1>
              <Image
                src="/price_renge.png"
                height={11}
                width={248}
                alt='Price Range'
                className='w-full mb-4'
              />
              <div className='flex justify-between items-center text-[#1e1e1e]'>
                <span>From \$0 to \$8000</span>
                <button>Filter</button>
              </div>
            </div>

            {/* Latest Products */}
            <div className='mb-6'>
              <h1 className='text-xl font-semibold mb-4'>Latest Products</h1>
              <div className='space-y-4'>
                {LatestProductcardData.map((product, index) => (
                  <LatestProductcard key={index} name={product} />
                ))}
              </div>
            </div>

            {/* Product Tags */}
            <div className=''>
              <h1 className='text-xl font-semibold mb-4'>Product Tags</h1>
              <div className='text-[#4F4F4F] space-y-4'>
                <div className='flex flex-wrap gap-4'>
                  <span className='border-b border-[#F2F2F2]'>Services</span>
                  <span className='border-b border-[#F2F2F2]'>Our Menu</span>
                  <span className='border-b border-[#F2F2F2]'>Pizza</span>
                </div>
                <div className='flex flex-wrap gap-4'>
                  <span className='border-b border-[#F2F2F2]'>Cupcake</span>
                  <span className='border-b border-[#F2F2F2]'>Burger</span>
                  <span className='border-b border-[#F2F2F2]'>Cookies</span>
                </div>
                <div className='flex flex-wrap gap-4'>
                  <span className='border-b border-[#F2F2F2]'>Our Shop</span>
                  <span className='border-b border-[#F2F2F2]'>Tandoori Chicken</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
