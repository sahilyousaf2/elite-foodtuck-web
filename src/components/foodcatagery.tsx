
import React from 'react';
import Image from 'next/image';

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/food2.png" },
    { id: 3, img: "/food3.png" },
    { id: 4, img: "/food4.png" },
  ];

  return (
    <section className="bg-black text-white py-8 md:py-16 px-4 md:px-8 md:-mt-[5] lg:px-16">
      <div className="container mx-auto max-w-screen-xl text-center">
        {/* Title */}
        <h1 className='about text-[#FF9F0D] text-lg md:text-xl mb-2'>Food Category</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg">
              {/* Image of the food item */}
              <div className="relative w-full pt-[107%]"> {/* Maintain aspect ratio */}
                <Image
                  src={item.img}
                  alt={"Food Item"}
                  fill
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay label */}
              {item.label && (
                <>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className='text-[#FF9F0D] text-xs md:text-base font-bold flex justify-center items-center w-[80px] md:w-[125px] h-6 md:h-10 bg-white rounded-md'>
                      <h1>Save 30%</h1>
                    </div>
                  </div>
                  <div className='w-full md:w-[206px] h-[30px] md:h-[46px] bg-[#FF9F0D] flex justify-center items-center font-bold absolute top-[185px] rounded-md bottom-0 left-0 right-0 text-xs md:text-xl text-white px-2 py-1 md:px-4 md:py-2'>
                    <h1>Fast Food Dish</h1>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;