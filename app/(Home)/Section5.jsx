import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
// import "../components/Navbar.css"
import SwiperCore from "swiper";
import { Autoplay } from 'swiper/modules';
SwiperCore.use([Autoplay]);
{/* <div className='text-2xl text-[#ff8000]'>CATCH US HERE</div> */}


const Section5 = () => {
    return (
        <>
            <Swiper
        spaceBetween={2} // Spacing between slides
        slidesPerView={3} // Auto fit slides
        loop={true} // Infinite loop
        speed={2000} // Animation speed
        
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false, // Keep autoplay active after interactions
          
        }}
        allowTouchMove={false} // Disable user dragging
      >
        <SwiperSlide style={{width: '25%'}}>
          <div style={{ width: "200px", height: "200px", adding: '10px' }}>
            <img src="/zepto.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '25%'}}>
          <div style={{ width: "200px", height: "200px", padding: '10px' }}>
            <img src="/flipkart.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '25%'}}>
          <div style={{ width: "200px", height: "200px", padding: '10px' }}>
            <img src="/amazonwhitelogo.png" alt="" />
          </div>
        </SwiperSlide >
        <SwiperSlide style={{width: '25%'}}>
          <div style={{ width: "200px", height: "200px", padding: '10px' }}>
            <img src="/blinkit.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '25%'}}>
          <div style={{ width: "200px", height: "200px", padding: '10px' }}>
            <img src="/jiomart.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
        </>
    );
}

export default Section5;
