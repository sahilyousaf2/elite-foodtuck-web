import React from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
export default function HomeHeader() {
    return (
        <>
            <main className='w-full  bg-black text-white'>
                <header className='md:max-w-[1170px] h-[87px] mx-auto'>
                    <div className="logo hidden md:block text-center text-2xl  pt-8 font-bold">
                        <h1><span className='text-[#FF9F0D]'>Food</span>tuck</h1>
                    </div>
                    <nav className=' hidden md:flex justify-between items-center'>
                        <ul className='flex gap-8'>
                            <Link href={"/"} className='hover:text-[#ff9f0d] duration-200'>
                                Home
                            </Link>
                            <Link href={"/Manu"} className='hover:text-[#ff9f0d] duration-200'>
                                Menu
                            </Link>
                            <Link href={"/blog"} className='hover:text-[#ff9f0d] duration-200'>
                                Blog
                            </Link>
                            <Link href={"/shop"} className='hover:text-[#ff9f0d] duration-200'>
                                Shop
                            </Link>
                            <Link href={"/about"} className='hover:text-[#ff9f0d] duration-200'>
                                About
                            </Link>
                            <Link href={"/contact"} className='hover:text-[#ff9f0d] duration-200'>
                                Contact
                            </Link>
                        </ul>
                        <div className='flex items-center'>
                            <div className=" flex justify-between items-center px-4 md:w-[374px] md:h-[54px] border-2 border-[#FF9F0D] rounded-full">
                                <h1>Search...</h1>
                                <img src="/Group.png" className='w-6 h-6' alt="" />
                            </div>
                            <img src="/Tote.png" className='w-6 h-6 ml-2' alt="" />
                        </div>
                    </nav>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <div className='flex mx-4 justify-between items-center'>

                                <div className="logo md:hidden block text-2xl pt-[45px]  font-bold">
                                    <h1><span className='text-[#FF9F0D]'>Food</span>tuck</h1>
                                </div>
                                <div className='pt-[45px]'>
                                    <SheetTrigger className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black text-white">
                                        <SheetHeader>
                                            <SheetTitle className="text-white"><span className="text-[#FF9F0D]">Food</span>tuck</SheetTitle>
                                        </SheetHeader>
                                        <div className="mt-10">
                                            <ul className='flex flex-col gap-8'>
                                                <Link href={"/"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>Home</li>
                                                </Link>
                                                <Link href={"/Manu"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>Menu</li>
                                                </Link>
                                                <Link href={"/blog"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>Blog</li>
                                                </Link>
                                                <Link href={"/about"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>About</li>
                                                </Link>
                                                <Link href={"/shop"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>Shop</li>
                                                </Link>
                                                <Link href={"/contact"} className='hover:text-[#FF9F0D] duration-300 block'>
                                                    <li>Contact</li>
                                                </Link>
                                            </ul>
                                        </div>
                                    </SheetContent>
                                </div>
                            </div>
                        </Sheet>
                    </div>
                </header>
            </main>
        </>
    )
}
