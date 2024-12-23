// import Image from 'next/image';
// import FoodCategory from '@/components/foodcatagery';
// import Extra from '@/components/extra';
// import Experience from '@/components/Experience';
// import FromOurMenu from '@/components/fromOurMenu';
// import MeetOurChef from '@/components/meetOurChef';
// import Testimorial from '@/components/testimorial';
// import Document from '@/components/document';
// import LastestBlog from '@/components/lastestBlog';
// import HomeHeader from '@/components/homeHeader';
// function HomePage() {
//   return (
//     <>
//     <HomeHeader/>
//       <main className='bg-black md:h-[7400px]'>
//         <section className="bg-black px-4 md:px-16 lg:px-32 py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between">
//           {/* Heading */}
//           <div className="md:w-1/2 md:ml-20 lg:w-2/5 order-2 md:order-1 text-white md:pl-10">
//             <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#FF9F0D] whitespace-nowrap mb-2">
//               Its Quick & Amusing!
//             </h1>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//               <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
//             </h1>
//             <p className="text-sm md:text-base lg:text-lg mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
//             </p>
//             <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition duration-300">
//               See More
//             </button>
//           </div>

//           {/* Image */}
//           <div className="md:w-1/2 lg:w-2/5 order-1 md:order-2 mb-8 md:mb-0">
//             <Image
//               src="/food.png"
//               alt="Hero Image"
//               width={700}
//               height={500}
//               style={{ width: '100%', height: 'auto' }} // Make image responsive
//               priority // Prioritize loading this image
//             />
//           </div>
//           <Image src={"/Group 1000002057.png"}
//             height={492}
//             width={25.28}
//             alt=''
//             className='hidden md:block absolute left-48 top-[20%]'
//           />
//         </section>

//         <section className="bg-black text-white py-16 md:py-24">
//           <div className="container mx-auto px-4 md:px-16 lg:px-32">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//               <div className="md:w-1/2 lg:w-2/5">
//                 <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#FF9F0D] mb-4">About us</h1>
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//                   <span className="text-[#FF9F0D]">We</span> Create the best <br /> foody product
//                 </h1>
//                 <p className="text-base md:text-lg mb-8">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
//                 </p>
//                 <div>
//                   {/* Use a map for cleaner rendering of list items */}
//                   {[
//                     "Lacus nisi, et ac dapibus sit eu velit in consequat.",
//                     "Quisque diam pellentesque bibendum non dui volutpat fringilla",
//                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                   ].map((text, index) => (
//                     <div className="flex items-center mb-4" key={index}>
//                       <Image src="/check.png" width={17} height={12.24} alt="" />
//                       <p className="ml-2 text-base md:text-lg">{text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-full mt-8 hover:bg-yellow-800 transition duration-300">
//                   Read More
//                 </button>
//               </div>
//               <div className="">
//                 <img src="/unsplash_fdlZBWIP0aM.png" width={660} height={562} alt="" style={{ height: 'auto' }} />
//                 <div className="flex flex-col md:flex-row mt-4 gap-4">
//                   <img src="/unsplash_jpkfc5_d-DI.png" className='md:w-[322px] md:h-[210px] w-full' alt="" style={{ height: 'auto' }} />
//                   <img src="/card6.png" className='md:w-[322px] md:h-[210px] w-full' alt="" style={{ height: 'auto' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <FoodCategory />
//         <Extra />
//         <div className='md:mt-[120px]'>
//           <Experience />
//         </div>
//         <div className='md:mt-[120px]'>
//           <FromOurMenu />
//         </div>
//         <MeetOurChef />
//         <Testimorial/>
//         <Document/>
//         <LastestBlog/>
//       </main>
//     </>
//   );
// }

// export default HomePage;

import Image from 'next/image';
import FoodCategory from '@/components/foodcatagery';
import Extra from '@/components/extra';
import Experience from '@/components/Experience';
import FromOurMenu from '@/components/fromOurMenu';
import MeetOurChef from '@/components/meetOurChef';
import Testimorial from '@/components/testimorial';
import Document from '@/components/document';
import LastestBlog from '@/components/lastestBlog';
import HomeHeader from '@/components/homeHeader';

function HomePage() {
  return (
    <>
      <HomeHeader/>
      <main className='bg-black md:h-[7400px]'>
        <section className="bg-black px-4 md:px-16 lg:px-32 py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between">
          {/* Heading */}
          <div className="md:w-1/2 md:ml-20 lg:w-2/5 order-2 md:order-1 text-white md:pl-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#FF9F0D] whitespace-nowrap mb-2">
              Its Quick & Amusing!
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
            </h1>
            <p className="text-sm md:text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition duration-300">
              See More
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 lg:w-2/5 order-1 md:order-2 mb-8 md:mb-0">
            <Image
              src="/food.png"
              alt="Hero Image"
              width={700}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
          <Image 
            src="/Group 1000002057.png"
            height={492}
            width={25}
            alt="Decorative element"
            className='hidden md:block absolute left-48 top-[20%]'
          />
        </section>

        <section className="bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 lg:w-2/5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#FF9F0D] mb-4">About us</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-[#FF9F0D]">We</span> Create the best <br /> foody product
                </h1>
                <p className="text-base md:text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div>
                  {[
                    "Lacus nisi, et ac dapibus sit eu velit in consequat.",
                    "Quisque diam pellentesque bibendum non dui volutpat fringilla",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  ].map((text, index) => (
                    <div className="flex items-center mb-4" key={index}>
                      <Image 
                        src="/check.png" 
                        width={17} 
                        height={12} 
                        alt="Checkmark icon" 
                      />
                      <p className="ml-2 text-base md:text-lg">{text}</p>
                    </div>
                  ))}
                </div>
                <button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-full mt-8 hover:bg-yellow-800 transition duration-300">
                  Read More
                </button>
              </div>
              <div className="">
                <Image
                  src="/unsplash_fdlZBWIP0aM.png"
                  width={660}
                  height={562}
                  alt="Restaurant interior"
                  className="w-full h-auto"
                />
                <div className="flex flex-col md:flex-row mt-4 gap-4">
                  <Image
                    src="/unsplash_jpkfc5_d-DI.png"
                    width={322}
                    height={210}
                    alt="Food presentation"
                    className="w-full md:w-[322px] h-auto"
                  />
                  <Image
                    src="/card6.png"
                    width={322}
                    height={210}
                    alt="Food display"
                    className="w-full md:w-[322px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FoodCategory />
        <Extra />
        <div className='md:mt-[120px]'>
          <Experience />
        </div>
        <div className='md:mt-[120px]'>
          <FromOurMenu />
        </div>
        <MeetOurChef />
        <Testimorial/>
        <Document/>
        <LastestBlog/>
      </main>
    </>
  );
}

export default HomePage;