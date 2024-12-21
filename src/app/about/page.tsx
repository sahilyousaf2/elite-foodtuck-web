import Navbar from "@/components/Navbar";
import OurFoodMenu from "@/components/ourFoodMenu";
import TeamMember from "@/components/teamMember";
import TestimorialBgWhite from "@/components/testimorialBgWhite";
import Image from "next/image";
import Link from "next/link";
import { IoPlayOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-auto bg-[url('/heropic.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Our About
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link
                href="/"
                className="text-white hover:text-[#FF9F0D] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/about" className="text-[#FF9F0D]">
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="text-white body-font">
        <div className="container mx-auto px-4 py-8 lg:py-24 max-w-[1170px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[536px] sm:h-[600px] lg:h-[536px]">
                <Image
                  className="object-cover object-center w-full h-full rounded-lg"
                  alt="hero"
                  src="/aboutus.png"
                  layout="fill"
                  priority
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {/* Image Grid */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-1/2">
                  <div className="relative w-full h-[271px]">
                    <Image
                      className="object-cover object-center w-full h-full rounded-lg"
                      alt="image2"
                      src="/about4.png"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="relative w-full h-[271px] sm:h-[382px]">
                    <Image
                      className="object-cover object-center w-full h-full rounded-lg"
                      alt="image3"
                      src="/about3.png"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:pl-16">
                <h1 className="text-sm mb-4 font-medium text-yellow-400 italic flex items-center gap-2">
                  About us <span className="text-yellow-400 inline-block w-12 h-[2px] bg-yellow-400"></span>
                </h1>
                <p className="text-black text-2xl lg:text-3xl font-bold">
                  Food is an important part of a balanced Diet
                </p>
                <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat fringilla bibendum.
                  Urna, elit augue urna, vitae feugiat pretium donec id
                  elementum. Ultrices mattis vitae mus risus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="w-full sm:w-auto text-white bg-orange-400 hover:bg-orange-500 transition-colors py-2 px-6 rounded text-lg">
                    Show More
                  </button>
                  <button className="w-full sm:w-auto text-black border border-gray-200 hover:bg-gray-50 transition-colors py-2 px-6 rounded text-lg flex items-center justify-center">
                    <IoPlayOutline className="mr-2" />
                    Watch video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-[1170px]">
          <h2 className="text-black text-2xl lg:text-3xl font-bold mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-black text-center mb-8 leading-relaxed max-w-lg px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[386px]">
            <Image
              className="object-cover object-center w-full h-full rounded-lg shadow-lg"
              alt="hero"
              src="/about.png"
              layout="fill"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-[1170px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src="/student.png"
                    alt="Best Chef"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2 text-center font-bold">
                  BEST CHEF
                </h3>
                <p className="text-center text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src="/coffee.png"
                    alt="120 Item food"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2 text-center font-bold">
                  120 Item food
                </h3>
                <p className="text-center text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src="/man.png"
                    alt="Clean Environment"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2 text-center font-bold">
                  Clean Environment
                </h3>
                <p className="text-center text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamMember />
      <TestimorialBgWhite />
      <OurFoodMenu />
    </div>
  );
};

export default About;