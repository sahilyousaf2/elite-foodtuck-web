import Image from "next/image"
import Link from "next/link"
import { IoPlayOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      {/* hero */}
      <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our About
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/about" className='text-[#FF9F0D]'>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <div>
        {/* Frist Section: Content and Buttons */}
        <section className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
              <Image
                className="object-cover object-center mb-[450px] w-[336px] h-[536px] mt-530px radius-6px"
                alt="hero"
                src="/aboutus.png" width={309} height={536}
              />
            </div>
            {/* Right Images */}
            <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
              <div>
                <Image
                  className="object-cover object-center w-309px h-271px ml-6  radius-6px"
                  alt="image2"
                  src="/about4.png"
                  width={309} height={271}
                />
                {/* Bottom Image */}
                <Image
                  className="object-cover mt-[27px] object-center w-309px h-382px mt-882px ml-6 radius-6px"
                  alt="image3"
                  src="/about3.png"
                  width={309} height={382}
                />
              </div>
            </div>
            {/* Text Content and Buttons */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
                About us _____
              </h1>
              <p className="text-black title-font text-3xl font-bold">
                Food is an important part of a balanced Diet
              </p>
              <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
                velit in consequat.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  Show More
                </button>
                <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  <IoPlayOutline className="mr-2 block" /> {/* Icon on the left */}
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="text-white  mt-[-180px] body-font">
          <div className=" mx-auto flex px-5 py-24 items-center justify-center flex-col w-[1170px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum.</p>
            <Image
              className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
              alt="hero"
              src="/about.png"
              width={1320} height={386}
            />
          </div>
        </section>
        {/* Thrid section */}
        <section className="text-white body-font">
          <div className="container px-3 py-20 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full  flex justify-center items-center  flex-col  rounded-lg overflow-hidden">
                  <Image

                    src="/student.png"
                    width={80} height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      BEST CHEF
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
                    className=""
                    src="/coffee.png"
                    width={80} height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      120 Item food
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
                    className=" flex flex-col justify-center items-center"
                    src="/man.png"
                    width={80} height={80}
                    alt="blog"

                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      Clean Environment
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About