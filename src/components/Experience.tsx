import { ExperienceItem } from '@/constant/Experience';
import Image from 'next/image';
import React from 'react';

export default function Experience() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-cover bg-center bg-[url('/menu.png')]">
      <div className="container mx-auto px-4"> 
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>

        <div className="relative">
          <div className="flex flex-wrap justify-center items-center">
            {ExperienceItem.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center"
              >
                <div>
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={120}
                    height={120}
                    className="mb-6 sm:mb-8 lg:mb-10"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6">
                  {item.value}
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}