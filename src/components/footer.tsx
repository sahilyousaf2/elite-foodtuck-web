

import { Facebook, Twitter, Instagram, Youtube, PinIcon, Clock } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'];
    const helpLinks = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
    const posts = [
        { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
        { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
        { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
    ];
    const icons = [
        { Icon: Facebook, color: 'text-[#1E1E1E]' },
        { Icon: Twitter, color: 'text-[#1E1E1E]' },
        { Icon: Instagram, color: 'text-[#1E1E1E]' },
        { Icon: Youtube, color: 'text-[#FF9F0D]' },
        { Icon: PinIcon, color: 'text-[#1E1E1E]' },
    ];

    return (
        <footer className="bg-black w-full text-white">
            <div className="container mx-auto max-w-screen-xl py-16 px-4">
                <div className="flex md:w-[966px] md:mx-auto flex-col text-nowrap pb-5 border-b-2 border-b-[#FF9F0D] md:flex-row justify-between items-center">
                    <div className="md:w-1/3">
                        <h1 className="text-3xl font-bold mb-4"><span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</h1>
                        <p className="text-base">Dont wait make a smart & logical quote here. Its pretty easy.</p>
                    </div>

                    <div className='w-[222px] mt-10 md:mt-0 md:w-[350px] h-[55px] bg-[#FF9F0D] flex justify-end'>
                        <div className='md:mr-14 md:text-base md:mb-3 text-xs text-nowrap flex justify-center items-center px-3 text-white/80 md:mt-[14px]'>
                            <h1> Enter Your Email</h1>
                        </div>
                        <div className='w-[100px] text-nowrap md:text-base text-xs md:w-[150px] h-[55px] text-[#FF9F0D] flex justify-center items-center bg-white'>
                            <h1>Subscribe Now</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us.</h3>
                        <p className="text-base leading-6">
                            Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="bg-[#FF9F0D] p-2 rounded flex justify-center items-center mr-4">
                                <Clock className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Opening Hours</h4>
                                <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
                                <p className="text-sm">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-bold">Useful Links</h3>
                        <ul className="text-base leading-6 mt-4">
                            {links.map((link) => (
                                <li key={link} className="mb-2">
                                    <Link href="#" className="hover:text-[#FF9F0D] transition-all duration-300">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-xl font-bold">Help?</h3>
                        <ul className="text-base leading-6 mt-4">
                            {helpLinks.map((link) => (
                                <li key={link} className="mb-2">
                                    <Link href="/" className="hover:text-[#FF9F0D] transition-all duration-300">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Post */}
                    <div className='md:mt-[-10px]'>
                        <h3 className="text-xl font-bold mb-4">Recent Post</h3>
                        {posts.map((post, index) => (
                            <div key={index} className="flex items-center mb-4">
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
            <div className='md:w-full bg-[#4F4F4F] '>
                <div className='md:w-[1170px]  md:pt-0 px-3 md:px-0 pt-7  mt-4 mx-auto'>
                    <div className='items-center h-[100px] flex justify-between'>
                        <div>
                            <h1>Copyright © 2022 by Sahil Yousaf. All Rights Reserved.</h1>
                        </div>
                        <div className=" mt-2 items-center md:mt-0 flex space-x-4 w-[239px] h-[30px]">
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
            </div>
        </footer>
    );
}