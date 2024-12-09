
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <>
      <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Blog List
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
      <div className=' mt-[120px] mb-[120px] w-[1320px] mx-auto flex h-[3138px]'>


        <div className=' mt-[120px] mb-[120px] w-[872px] h-[3138px]'>
          <div>
            <div>
              <Image
                src={"/blog.png"}
                width={872}
                height={520}
                alt=''
              />
            </div>
            <div className='pt-4 flex items-center space-x-2'>
              <Image
                src={"/Calendar.png"}
                width={24}
                height={24}
                alt=''
              />
              <Image
                src={"/Admin.png"}
                width={267}
                height={26}
                alt=''
              />
            </div>
            <div>
              <h1 className='text-2xl font-semibold pt-4'>10 Reasons To Do A Digital Detox Challenge</h1>
              <p className='pt-12'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
              <p className='pt-4'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
                Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat
                himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>
            </div>
            <div className='w-[853] flex justify-center h-[176px] bg-[#FF9F0D] mt-14'>
              <div className='mt-6 ml-6'>
                <Image
                  src={"/Quotes.png"}
                  width={90}
                  height={90}
                  alt=''
                />
              </div>
              <p className='ml-6 text-2xl font-semibold text-white my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
            </div>
            <div className='mt-14'>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            </div>
            <div className='mt-6 flex justify-between'>
              <div className='w-[420px] h-[236px]'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <p className='pt-4'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                </p>
              </div>
              <div>
                <Image
                  src={"/unsplash_rAyCBQTH7ws.png"}
                  width={424}
                  height={366}
                  alt=''
                />
              </div>
            </div>
            <div className='mt-6'>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <p className='mt-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <div className='mt-8'>
                <Image
                  src={"/Share.png"}
                  width={872}
                  height={60}
                  alt=''
                />
              </div>
              <div className='w-[872px] h-[472px] mt-14'>
                <h1 className='text-[32px] leading-[40px] font-semibold'>Comments - 03</h1>

                <div className='w-[872px] h-[112px]'>
                  <div>
                    <Image
                      src={"/MD sojib.png"}
                      width={872}
                      height={112}
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-[872px] h-[112px]'>
                  <div className='ml-[81px] mt-8'>
                    <Image
                      src={"/MD sojib (1).png"}
                      width={791}
                      height={112}
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-[872px] h-[112px]'>
                  <div className='mt-8'>
                    <Image
                      src={"/MD sojib (2).png"}
                      width={872}
                      height={112}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='w-[872px] h-[484px] mt-14'>
                <Image
                  src={"/Post a comment.png"}
                  width={872}
                  height={484}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right mt-[120px] ml-6 w-[424px] h-[2501px] bg-fuchsia-00">
          <div>
            <Image
              src={"/Search (1).png"}
              width={421.82}
              height={70}
              alt=''
            />

          </div>
          <div className='mt-6'>
            <Image
              src={"/Prince Miyako.png"}
              width={424}
              height={423}
              alt=''
            />

          </div>
          <div className='mt-6'>
            <Image
              src={"/Recent Post.png"}
              width={423}
              height={592}
              alt=''
            />

          </div>
          <div className='mt-6'>
            <Image
              src={"/Filter by Menu.png"}
              width={423}
              height={490}
              alt=''
            />
          </div>
          <div className='mt-6'>
            <Image
              src={"/Popular Tag.png"}
              width={423}
              height={308}
              alt=''
            />
          </div>
          <div className='mt-6'>
            <Image
              src={"/Photo Gallery.png"}
              width={423}
              height={316}
              alt=''
            />
          </div>
          <div className='mt-6'>
            <Image
              src={"/Flollow us.png"}
              width={423}
              height={158}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog