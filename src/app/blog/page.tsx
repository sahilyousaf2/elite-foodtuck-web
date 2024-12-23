
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/blogCard'
import { BlogCardData } from '@/constant/BlogCardData'
import { FiterMenuCardData } from '@/constant/FiterMenuCardData'
import FiterMenuCard from '@/components/fiterMenuCard'
import BlogPhoto from '@/components/blogPhoto'
import { BlogPhotoData } from '@/constant/BlogPhotoData'

function Blog() {
  return (
    <>
      <main>
        <Navbar />
        <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
                Blog Details
              </h1>
              <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
                <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                  Home
                </Link>
                <span className='text-white'>/</span>
                <Link href="/blog" className='text-[#FF9F0D]'>
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Main content wrapper */}
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Main blog content */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-8">
                {/* Blog image */}
                <div className="w-full">
                  <Image
                    src="/blog.png"
                    width={872}
                    height={520}
                    alt="Blog header"
                    className="w-full h-auto"
                  />
                </div>

                {/* Meta info */}
                <div className="flex items-center space-x-2">
                  <Image
                    src="/Calendar.png"
                    width={24}
                    height={24}
                    alt="Calendar"
                  />
                  <Image
                    src="/Admin.png"
                    width={267}
                    height={26}
                    alt="Admin"
                    className="h-auto"
                  />
                </div>

                {/* Blog title and content */}
                <div className="space-y-6">
                  <h1 className="text-2xl md:text-3xl font-semibold">10 Reasons To Do A Digital Detox Challenge</h1>
                  <p className="text-gray-700">Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi.</p>
                  <p className="text-gray-700">Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.</p>
                </div>

                {/* Quote section */}
                <div className="bg-[#FF9F0D] p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
                  <Image
                    src="/Quotes.png"
                    width={90}
                    height={90}
                    alt="Quote"
                    className="hidden md:block"
                  />
                  <p className="text-lg md:text-2xl font-semibold text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Content with image */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                  <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/unsplash_rAyCBQTH7ws.png"
                      width={424}
                      height={366}
                      alt="Blog image"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Tags and share section */}
                <div className="border p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="font-bold">Tags:</span>
                    <span className="text-gray-500">Restaurant,</span>
                    <span className="text-gray-500">Dinner,</span>
                    <span className="text-gray-500">Pizza,</span>
                    <span className="text-gray-500">Yummy</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Share:</span>
                    <div className="flex gap-4">
                      {['f.png', 't.png', 'i.png', 'p-black.png'].map((icon) => (
                        <Image
                          key={icon}
                          src={`/${icon}`}
                          alt={`Share on ${icon.split('.')[0]}`}
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comments section */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold">Comments - 03</h2>

                  {/* Comment items */}
                  <div className="space-y-6">
                    {/* Single comment */}
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <Image src="/c1.png" alt="User avatar" width={73} height={65} className="rounded-full" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 flex-wrap">
                          <h3 className="font-bold">Unithan</h3>
                          <button className="flex items-center gap-1 text-gray-600">
                            <Image src="/reply.png" alt="Reply icon" width={16} height={16} />
                            <span>Reply</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-gray-500">
                          <Image src="/CalendarBlank.png" width={16} height={16} alt="Calendar icon" />
                          <span>Sep 4, 2022</span>
                        </div>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>

                  {/* Comment form */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Post a comment</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name*" className="w-full p-4 border" />
                      <input type="text" placeholder="Email*" className="w-full p-4 border" />
                    </div>
                    <div className="border p-4 h-48">
                      <h3 className="text-gray-600">Write a comment</h3>
                    </div>
                    <button className="px-8 py-4 bg-[#ff9f0d] text-white hover:bg-[#e08c0c] transition-colors">
                      Post a comment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search Your Keyword..."
                  className="flex-1 border p-4"
                />
                <button className="bg-[#ff9f0d] p-4 flex items-center justify-center">
                  <Image
                    src="/MagnifyingGlass.png"
                    width={20}
                    height={20}
                    alt="Search"
                  />
                </button>
              </div>

              {/* Author profile */}
              <div className="border p-6 text-center">
                <Image
                  src="/img.png"
                  width={115}
                  height={113}
                  alt="Author"
                  className="mx-auto"
                />
                <h3 className="text-xl font-semibold mt-4">Prince Miyako</h3>
                <p className="text-gray-500 mt-2">Blogger/Photographer</p>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <Image
                    src="/review.png"
                    width={87}
                    height={12}
                    alt="Review"
                  />
                  <span>(1 Review)</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="mt-6">
                  <Image
                    src="/social_icon.png"
                    alt="Social icons"
                    width={16}
                    height={16}
                    className="mx-auto"
                  />
                </div>
              </div>

              {/* Blog cards section */}
              <div className="border p-6">
                <h3 className="text-xl font-bold mb-6">Recent Post</h3>
                <div className="space-y-4">
                  {BlogCardData.map((blog) => (
                    <BlogCard key={blog.id} imageURL={blog.imageURL} />
                  ))}
                </div>
              </div>

              {/* Filter section */}
              <div className="border p-6">
                <h3 className="text-xl font-bold mb-6">Filter</h3>
                <div className="space-y-4">
                  {FiterMenuCardData.map((filter, index) => (
                    <FiterMenuCard
                      key={index}
                      imageURL={filter.imageURL}
                      name={filter.name}
                      oder={filter.oder}
                    />
                  ))}
                </div>
              </div>

              {/* Tags section */}
              <div className="border p-6">
                <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Sandwich', 'Tikka', 'Bbq', 'Restaurant', 'Health', 'Food', 'Pizza'].map((tag) => (
                    <button key={tag} className="text-sm border px-4 py-2 hover:bg-[#ff9f0d] hover:text-white transition-colors">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo gallery */}
              <div className="border p-6">
                <h3 className="text-xl font-bold mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {BlogPhotoData.map((photo, index) => (
                    <BlogPhoto key={index} imageURL={photo.imageURL} eye={photo.eye} />
                  ))}
                </div>
              </div>

              {/* Social follow */}
              <div className="border p-6">
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  {['t.png', 'y.png', 'p.png', 'i.png', 'f.png'].map((icon, index) => (
                    <button
                      key={icon}
                      className="w-12 h-12 bg-gray-200 hover:bg-[#ff9f0d] transition-colors flex items-center justify-center"
                    >
                      <Image
                        src={`/${icon}`}
                        alt={`Social media ${index + 1}`}
                        width={24}
                        height={24}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog