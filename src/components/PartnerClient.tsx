
import React from 'react'

const partners = [
  { name: 'Restaurant', logo: '/bakery1.png' },
  { name: 'Bakery', logo: '/bakery2.png' },
  { name: 'Fork & Spoon', logo: '/bakery3.png' },
  { name: 'Wolf Coffee', logo: '/bakery4.png' },
  { name: 'Bistro', logo: '/bakery5.png' },
  { name: 'Bakery', logo: '/bakery6.png' },
]
import Image from 'next/image'
export default function PartnersAndClients() {
  return (
    <section className="py-[120px] px-4 max-w-[1170px] mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-lg sm:text-xl text-gray-700 mb-2">Partners & Clients</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          We work with the best people
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={partner.logo}
              height={96}
              width={100}
              alt={`${partner.name}
               logo`}
              className="max-h-24 sm:max-h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}