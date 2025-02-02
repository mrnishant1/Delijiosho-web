"use client"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "./Navbar.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'

export default function Section3(){
  return (
    <>
    <Swiper
     breakpoints={{
      // Breakpoint for screen width ≥ 400px
    300: {
        slidesPerView: 1,
      },
      // Breakpoint for screen width ≥ 768px
      700: {
        slidesPerView: 2,
      },
      // Breakpoint for screen width ≥ 1024px
      1024: {
        slidesPerView: 3,
      },
    }}
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides= {true}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    //   watchOverflow = {true}

      onSlideChangeTransitionStart={(swiper) => {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
          slide.style.transition = "transform 0.5s"; // Smooth transition
          if (index === swiper.activeIndex ) {
            
            slide.style.transform = "scale(1.3)"; // Scale center card
            slide.style.zIndex = '10';
        } else {
            slide.style.transform = "scale(1)"; // Reset others
            slide.style.zIndex = '0';
          }
        });
      }}
      
    >
      <SwiperSlide>
        <div className='card flex bg-[#ff8000] h-[100%] w-[100%] p-2 shadow-[#1c1c1c] shadow-2xl rounded-md '>
            <div className='flex flex-col gap-1 font-serif text-[13px] pl-[13%] md:pl-[0%]'>
                <h2 className="text-lg font-bold uppercase">Delijiosho Pasta</h2>
                <p className='max-w-[120%] z-10'>
                  <strong>Delijiosho Pasta!</strong> Made with the finest ingredients, it’s a guilt-free indulgence designed to bring joy to every bite. Perfect for your family meals, celebrations, or quick snacks!
                </p>
                <div className="flex gap-1 items-center mt-2">
                  <span className="text-lg font-bold">₹120</span>
                  <button className="bg-white text-[#ff8000] px-4 py-1 rounded-md shadow-md hover:bg-[#ffb347] hover:text-white transition-all">
                  <Image src="/buycart.png" alt="Buy Now" className="h-6 inline" width={30} height={40} /> Buy Now
                  </button>
              </div>
            </div>

            <div className='w-[100%] hidden md:block'><Image src="/pastapng.png" alt="" className='relative top-[-22%] left-[-10%] z-0 h-[130%] max-w-[150%] w-[110%]'width={1000} height={1000}/></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='card flex bg-[#ff8000] h-[100%] w-[100%] p-2 shadow-[#1c1c1c] shadow-2xl rounded-md '>
            <div className='flex flex-col gap-1 font-serif text-[13px] pl-[13%] md:pl-[0%]'>
                <h2 className="text-lg font-bold uppercase">Delijiosho Pasta</h2>
                <p className='max-w-[120%] z-10'>
                  <strong>Delijiosho Pasta!</strong> Made with the finest ingredients, it’s a guilt-free indulgence designed to bring joy to every bite. Perfect for your family meals, celebrations, or quick snacks!
                </p>
                <div className="flex gap-1 items-center mt-2">
                  <span className="text-lg font-bold">₹120</span>
                  <button className="bg-white text-[#ff8000] px-4 py-1 rounded-md shadow-md hover:bg-[#ffb347] hover:text-white transition-all">
                  <Image src="/buycart.png" alt="Buy Now" className="h-6 inline" width={30} height={40} /> Buy Now
                  </button>
              </div>
            </div>

            <div className='w-[100%] hidden md:block'><Image src="/pastapng.png" alt="" className='relative top-[-22%] left-[-10%] z-0 h-[130%] max-w-[150%] w-[110%]'width={1000} height={1000}/></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='card flex bg-[#ff8000] h-[100%] w-[100%] p-2 shadow-[#1c1c1c] shadow-2xl rounded-md '>
            <div className='flex flex-col gap-1 font-serif text-[13px] pl-[13%] md:pl-[0%]'>
                <h2 className="text-lg font-bold uppercase">Delijiosho Pasta</h2>
                <p className='max-w-[120%] z-10'>
                  <strong>Delijiosho Pasta!</strong> Made with the finest ingredients, it’s a guilt-free indulgence designed to bring joy to every bite. Perfect for your family meals, celebrations, or quick snacks!
                </p>
                <div className="flex gap-1 items-center mt-2">
                  <span className="text-lg font-bold">₹120</span>
                  <button className="bg-white text-[#ff8000] px-4 py-1 rounded-md shadow-md hover:bg-[#ffb347] hover:text-white transition-all">
                  <Image src="/buycart.png" alt="Buy Now" className="h-6 inline" width={30} height={40} /> Buy Now
                  </button>
              </div>
            </div>

            <div className='w-[100%] hidden md:block'><Image src="/pastapng.png" alt="" className='relative top-[-22%] left-[-10%] z-0 h-[130%] max-w-[150%] w-[110%]'width={1000} height={1000}/></div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className='card flex bg-[#ff8000] h-[100%] w-[100%] p-2 shadow-[#1c1c1c] shadow-2xl rounded-md '>
            <div className='flex flex-col gap-1 font-serif text-[13px] pl-[13%] md:pl-[0%]'>
                <h2 className="text-lg font-bold uppercase">Delijiosho Pasta</h2>
                <p className='max-w-[120%] z-10'>
                  <strong>Delijiosho Pasta!</strong> Made with the finest ingredients, it’s a guilt-free indulgence designed to bring joy to every bite. Perfect for your family meals, celebrations, or quick snacks!
                </p>
                <div className="flex gap-1 items-center mt-2">
                  <span className="text-lg font-bold">₹120</span>
                  <button className="bg-white text-[#ff8000] px-4 py-1 rounded-md shadow-md hover:bg-[#ffb347] hover:text-white transition-all">
                  <Image src="/buycart.png" alt="Buy Now" className="h-6 inline" width={30} height={40} /> Buy Now
                  </button>
              </div>
            </div>

            <div className='w-[100%] hidden md:block'><Image src="/pastapng.png" alt="" className='relative top-[-22%] left-[-10%] z-0 h-[130%] max-w-[150%] w-[110%]'width={1000} height={1000}/></div>
        </div>
      </SwiperSlide>


    </Swiper>
    </>
  );
};