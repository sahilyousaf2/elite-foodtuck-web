
import { menuItems } from '@/constant/Menu'
import { Coffee } from 'lucide-react'
import Heading from './Heading'
import Image from 'next/image'
export default function Dessert() {
  return (
    <section className="w-[1170px] mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        {/* Image Section */}
        <div className="w-[450px] ml-4 md:ml-0 md:w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image 
            src="/dessert.png" 
            alt="Dessert dish" 
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Items Section */}
        <div className="md:w-1/2 ml-6 md:ml-0 md:pl-8">
            <Coffee className="text-[#FF9F0D]" size={24} />
          <div className="flex items-center mb-6">
            <Heading text="Dessert" />
          </div>

          <div className="space-y-8 md:w-auto w-[400px]">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}