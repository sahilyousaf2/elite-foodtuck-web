import React from 'react'

export default function Extra() {
  return (
    <>
      <main className='md:w-[1170px]  md:flex justify-between md:h-[716px]  mx-auto md:mt-[120px]'>
        {/* left section start */}
        <div className="left">
          {/* top section start */}
          <div className="top md:h-[356px]  md:flex">
            <img src="/aboutus.png" className='md:w-[362px] w-[400px] ml-10 md:ml-0 md:h-[356px]' alt="" />
            <img src="/card8.png" className='md:mt-[120px] md:ml-4 md:w-[281px] ml-12 mt-2 w-[381px] md:h-[231px]' alt="" />
          </div>
          {/* top section end */}
          {/* bottom section start*/}
          <div className="bottom md:flex  md:w-[658px] md:h-[350px] md:mt-4 ">
            <div className='md:flex '>
              <img src="/unsplash_CLMpC9UhyTo.png" alt="" className='ml-10 md:ml-0 md:mt-0 mt-2 w-[400px] md:w-[244px] md:h-[306px]' />
              <img src="/mainCourse.png" alt="" className='ml-10 rounded-md md:mt-0 mt-2 w-[400px] md:ml-4 md:w-[221px] md:h-[226px]' />
            </div>
            <div>
              <img src="/unsplash_tzl1UCXg5Es.png" alt="" className='ml-10 rounded-md md:mt-0 mt-2 w-[400px] md:ml-4 md:w-[161px] md:h-[168px]' />
              <img src="/unsplash_mmnKI8kMxpc.png" alt="" className='ml-10 rounded-md mt-2 w-[400px]  md:mt-2 md:ml-4 md:w-[161px] md:h-[168px]' />
            </div>
          </div>
        </div>
        {/* left section end */}
        {/* right section start */}
        <div className="right md:w-[500px] md:ml-[50px] md:h-[606px]  md:mt-[0px]">
          <h3 className='about text-2xl mt-4 md:mt-0 text-center md:text-left  text-[#FF9F0D]'>Why Choose us</h3>
          <h1 className='text-center md:text-left text-white text-5xl font-bold'><span className='text-[#FF9F0D]'>Ex</span>ta ordinary taste <br /> And Experienced</h1>
          <p className='text-center md:text-left mt-2 md:mt-0 md:pt-8 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br /> consequat.</p>
          <div>
            <div className=' mx-auto flex w-[274px] md:mt-8 text-white justify-between md:w-[374px] md:h-[174px]'>
              <div>
                <div className='flex justify-center items-center md:w-[90px] md:h-[90px] bg-[#FF9F0D]'>
                  <img src="/Hamburger.png" className=' md:w-14 md:h-14' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='my-2'>Fast Food</h1>
                </div>
              </div>
              <div>
                <div className='flex justify-center items-center md:w-[90px] md:h-[90px] bg-[#FF9F0D]'>
                  <img src="/Cookie.png" className=' md:w-14 md:h-14' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='my-2'>Fast Food</h1>
                </div>

              </div>
              <div>
                <div className='flex justify-center items-center md:w-[90px] md:h-[90px] bg-[#FF9F0D]'>
                  <img src="/Wine.png" className=' md:w-14 md:h-14' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='my-2'>Fast Food</h1>
                </div>
              </div>

            </div>
          </div>
          <div className='mt-3 md:mt-0 ml-12  mb-4 md:mb-0 md:ml-10 w-[374px] h-[93px] rounded-md flex'>
            <div className="left w-[10px] h-[93px] bg-[#FF9F0D]"></div>
            <div className="right flex w-[364px] h-[93px] bg-white">
              <div className="left">
                <h1 className='text-5xl pt-[19px] pl-[51px] text-[#FF9F0D] font-bold'>30+</h1>
              </div>
              <div className="right pt-[17px] pl-[47px]">
                <h1 className='text-xl '>Years of</h1>
                <h1 className='text-2xl font-bold'>Experienced</h1>
              </div>
            </div>
          </div>
        </div>
        {/* right section end */}
      </main>
    </>
  )
}
