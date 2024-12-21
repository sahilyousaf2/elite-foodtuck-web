
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
export default function Navbar() {
  return (
    <main className="w-full text-white bg-black">
      <nav className="max-w-[1170px] px-4 flex justify-between items-center mx-auto h-[87px]">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-[24px] hover:text-[#FF9F0D] duration-300 leading-[32px] font-bold text-white font-[helvetica] z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className='flex gap-8'>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/Manu"}>
              <li>Menu</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>

          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { src: "/Group.png", alt: "search", href: "/" },
            { src: "/user.png", alt: "user", href: "/signup" },
            { src: "/tote.png", alt: "cart", href: "/" }
          ].map((icon) => (
            <Link key={icon.alt} href={icon.href} className="text-white hover:text-[#FF9F0D] transition-colors">
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}

        <div className="md:hidden">
         
          <Sheet>
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
          </Sheet>
        </div>
      </nav>
    </main>
  )
}
