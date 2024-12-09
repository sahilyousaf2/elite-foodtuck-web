
'use client';
// resopnsive
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {


  return (
    <>
      <main className="w-full text-white bg-black mx-auto h-[87px]">
        <nav className="w-[1170px] flex justify-between items-center mx-auto h-[87px] bg-red-00">
        <div>
        <Link
          href="/"
          className="text-[24px] hover:text-[#FF9F0D] duration-300 leading-[32px] font-bold text-white font-[helvetica] z-10">
          Food<span className="text-[#FF9F0D] ">tuck</span>
        </Link>
        </div>
       <div>
       <ul className='flex gap-8'>
          <Link href={"/"} className='hover:text-[#FF9F0D] duration-300'>
          <li>Home</li>
          </Link>
          <Link href={"/Manu"} className='hover:text-[#FF9F0D] duration-300'>
          <li>Menu</li>
          </Link>
          <Link href={"/blog"} className='hover:text-[#FF9F0D] duration-300'>
          <li>Blog</li>
          </Link>
          <Link href={"/about"} className='hover:text-[#FF9F0D] duration-300'>
          <li>About</li>
          </Link>
          <Link href={"/shop"} className='hover:text-[#FF9F0D] duration-300'>
          <li>Shop</li>
          </Link>
          <Link href={"/contact"} className='hover:text-[#FF9F0D] duration-300'>
          <li>Contact</li>
          </Link>

        </ul>
       </div>
       <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/search.png" alt="search" width={24} height={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/user.png" alt="user" width={24} height={24} />
          </Link>
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/tote.png" alt="cart" width={24} height={24} />
          </Link>
        </div>
           </nav>
      </main>
    </>
  )
}


// <nav className="flex items-center justify-between">
//         {/* Logo */}
        


//         {/* Navigation Links */}
        

//         {/* Icons */}
        
//       </nav>