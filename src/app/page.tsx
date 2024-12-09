
import Image from 'next/image'
import FoodCategory from '@/components/foodcatagery'
function HomePage() {
  return (
    <>
      <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <Image src={"/Group 1000002057.png"}
          height={492}
          width={25.28}
          alt=''
        />
        <div className='text-white pl-10 w-full md:w-[50%]'>
          <h1 className='about md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
            Its Quick & Amusing!
          </h1>

          <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

            <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
          </h1>

          <p className='text-[10px] md:text-[16px] font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>

          <div className='flex flex-col md:flex-row items-center md:items-start'>

            <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
              See More
            </button>
          </div>
        </div>

        {/* Image */}

        <div className='mt-[50px] md:mt-0 '>
          <Image
            src="/food.png"
            alt='Hero Image'
            width={700}
            height={500}
            className=''
          />

        </div>
      </section>
      <section className='w-full relative bg-black text-white h-screen'>
        <div className='w-[1170px] absolute ml-[220px] flex gap-[89px] top-[120px] h-[562px]  mx-auto '>
          <div className="left h-[562px] w-[562px] ">
            <h1 className='text-[#FF9F0D] text-[32px] h-[40px] about'>About us</h1>
            <h1 className='pt-2 text-5xl font-bold '><span className='text-[#FF9F0D]'>We</span> Create the best
              <br />
              foody product
            </h1 >
            <p className='pt-6 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='pt-7' >
              <div className='flex h-[13px] items-center gap-2'>
                <Image src={"/check.png"}
                  width={17}
                  height={12.24}
                  alt=''
                />
                <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>
              <div className='pt-7'>
                <div className='flex h-[13px] items-center gap-2'>
                  <Image src={"/check.png"}
                    width={17}
                    height={12.24}
                    alt=''
                  />
                  <p> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                </div>
              </div>
              <div className='pt-7'>
                <div className='flex h-[13px] items-center gap-2'>
                  <Image src={"/check.png"}
                    width={17}
                    height={12.24}
                    alt=''
                  />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <button className='w-[190px] h-[60px] rounded-[30px] mt-8 bg-[#FF9F0D]' >Read More</button>
          </div>
          <div className="right h-[562px] w-[660px] ">
            <Image src={"/unsplash_fdlZBWIP0aM.png"}
              width={660}
              height={562}
              alt=''
            />
            <div className='flex justify-between mt-4 h-[210px] w-[660px] '>
              <Image src={"/unsplash_jpkfc5_d-DI.png"}
                width={322}
                height={210}
                alt=''
              />
              <Image src={"/unsplash_jpkfc5_d-DI.png"}
                width={322}
                height={210}
                alt=''
              />

            </div>
          </div>
        </div>

      </section>

      <FoodCategory/>
    </>
  )
}

export default HomePage

