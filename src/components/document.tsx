// import React from 'react'

// export default function Document() {
//     return (
//         <>
//             <main className='w-full md:h-[558px] md:bg-red-200 md:mt-[120px] md:bg-[url("/documents.png")]'>
//                 <div className="content md:pl-[800px] pt-[112px]">
//                     <div className="text">
//                         <h1 className='text-[32px] text-[#FF9F0D] about text-center md:pl-[100px]'>Restaurant Active Process</h1>

//                         <h1 className='text-center md:text-left text-5xl text-white font-bold'><span className='text-[#FF9F0D]'>We </span>Document Every Food
//                             <br className='hidden md:block' />
//                             Bean Process untile it is saved</h1>
//                         <p className='text-cnter md:text-left md:px-0 px-5 pt-8 text-white text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
//                             <br className='hidden md:block' />
//                             bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
//                     </div>
//                     <div className='flex justify-center'>
//                         <div className="button mt-8 flex justify-between items-center w-[369px] h-[60px]">
//                             <button className='w-[160px] h-[60px] border text-white text-base border-[#FF9F0D] rounded-full'>
//                                 Read More
//                             </button>
//                             <div className='flex items-center'>
//                                 <img src="/Play.png" alt="" className='w-[60px] h-[60px]' />
//                                 <h1 className='pl-3 font-bold text-white'>Play Video</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }
import React from 'react'
import Image from 'next/image'

export default function Document() {
    return (
        <>
            <main className='w-full md:h-[558px] md:bg-red-200 md:mt-[120px] md:bg-[url("/documents.png")]'>
                <div className="content md:pl-[800px] pt-[112px]">
                    <div className="text">
                        <h1 className='text-[32px] text-[#FF9F0D] about text-center md:pl-[100px]'>Restaurant Active Process</h1>

                        <h1 className='text-center md:text-left text-5xl text-white font-bold'>
                            <span className='text-[#FF9F0D]'>We </span>Document Every Food
                            <br className='hidden md:block' />
                            Bean Process untile it is saved
                        </h1>
                        <p className='text-cnter md:text-left md:px-0 px-5 pt-8 text-white text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                            <br className='hidden md:block' />
                            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className="button mt-8 flex justify-between items-center w-[369px] h-[60px]">
                            <button className='w-[160px] h-[60px] border text-white text-base border-[#FF9F0D] rounded-full'>
                                Read More
                            </button>
                            <div className='flex items-center'>
                                <Image 
                                    src="/Play.png" 
                                    alt="Play video button" 
                                    width={60} 
                                    height={60} 
                                    className='w-[60px] h-[60px]' 
                                />
                                <h1 className='pl-3 font-bold text-white'>Play Video</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}