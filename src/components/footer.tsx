
import { Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import Link from 'next/link'
export default function Footer() {
    const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact']
    const helpLinks = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy']
    const posts = [
        { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
        { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
        { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
    ]
    const icons = [
        { Icon: Facebook, color: 'text-[#1E1E1E]' },
        { Icon: Twitter, color: 'text-[#1E1E1E]' },
        { Icon: Instagram, color: 'text-[#1E1E1E]' },
        { Icon: Youtube, color: 'text-[#FF9F0D]' },
        { Icon: PinIcon, color: 'text-[#1E1E1E]' },
    ]
    return (
        <>
            <main className='w-full relative h-[700px] bg-[#0D0D0D] text-white'>
                <div className='flex justify-between w-[966px] absolute h-[100px] bg-red-0 ml-[300px] mt-[120px] border-b border-[#FF9F0D]'>
                    <div>
                        <h1 className='text-3xl font-bold'><span className="text-[#FF9F0D] pb-4">St</span>ill You Need Our Support ?</h1>
                        <p className="pt-4 text-nowrap">Dont wait make a smart & logical quote here. Its pretty easy.</p>
                    </div>

                    <div className='w-[350px] h-[55px] bg-[#FF9F0D] flex justify-end'>
                        <div className='mr-14 text-white/80 mt-[14px]'>
                            <h1> Enter Your Email</h1>
                        </div>
                        <div className='w-[150px] h-[55px] text-[#FF9F0D] flex justify-center items-center bg-white'>
                            <h1>Subscribe Now</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[1170px] mt-[276px] absolute ml-[200px]'>
                    <div className=' flex'>
                        {/* about */}
                        <div className='w-[395.2px] h-[261px]'>
                            <h3 className="text-xl font-bold mb-8">About Us.</h3>
                            <p className="mb-6 text-[18px] leading-[26px]">
                                Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
                            </p>
                            <div className="flex items-center ju">
                                <div className="bg-[#FF9F0D] p-2 rounded flex justify-center items-center mr-4 w-[77.23px] h-[70.79px]">
                                    <Clock className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Opening Hours</h4>
                                    <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
                                    <p className="text-sm">Sunday - Closed</p>
                                </div>
                            </div>
                        </div>
                        {/* about */}
                        <div className='pl-[100px]'>
                            <h3 className="text-xl font-bold text-nowrap">Useful Links</h3>
                            <ul className="text-[16px] flex flex-col pt-10">
                                {links.map((link) => (
                                    <li key={link} className="mb-2">
                                        <Link href="#" className="hover:text-[#FF9F0D] transition duration-300">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Help */}
                        <div className='pl-[100px]'>
                            <div>
                                <h3 className="text-xl font-bold mb-6">Help?</h3>
                                <ul className="text-[16px] flex flex-col pt-5">
                                    {helpLinks.map((link) => (
                                        <li key={link} className="mb-2">
                                            <Link href="../FAQ" className="hover:text-[#FF9F0D] transition duration-300">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* posts */}
                        <div className="w-[200px]  ml-[100px]">
                            <h3 className="text-xl font-bold mb-8">Recent Post</h3>
                            {posts.map((post, index) => (
                                <div key={index} className="flex  items-center mb-4">
                                    <Image src={post.image} width={64} height={64} alt="" className="w-16 h-16 object-cover mr-4" />
                                    <div>
                                        <h4 className="font-semibold mb-1">{post.title}</h4>
                                        <p className="text-sm text-gray-400">{post.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full absolute top-[680px]  bg-[#4F4F4F] h-[100px]'>
                    <div className='w-[1170px] flex justify-between mt-8 mx-auto'>
                        <h1>Copyright © 2022 by Sahil Yousaf. All Rights Reserved.</h1>
                        <div className="flex space-x-4 w-[239px] h-[30px]">
                            {icons.map(({ Icon, color }, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
