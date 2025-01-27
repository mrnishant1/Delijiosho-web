"use client"; // For client-side rendering in Next.js

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import FeedbackForm from "./feedback.jsx";


gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const pastaImg = useRef();
  const pastaImg2 = useRef();
  const section2 = useRef();
  let mm = gsap.matchMedia();
 // Pasta animation
 useEffect(() => {
    gsap.to(pastaImg.current, {
      scale: 1.5,
      duration: 1,
      rotate: "130deg",
      ease: "power1.out",
      
    });
  
      gsap.to(pastaImg2.current, {
        scale: 1.5,
        rotate: "-40deg",
        top: "30%",
        left:'17%',
        duration: 1,
        ease: "power1.out",
      });


}, []);
  
  // Section2 animation
  useEffect(() => {
    gsap.to(section2.current, {
      borderRadius: "50 50 0 0",
      boxShadow: "#d6a15c 0 -3px 16px",
      duration: 0.7,
      ease: "power1.out",
      scrollTrigger: {
        trigger: section2.current,
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
<div className="bg-gradient-to-br from-black to-gray-900">
<div className="mainDiv sticky top-0 w-[100vw] bg-gradient-to-br from-black to-gray-900 h-[100vh]">
  {/* Background Macaroni images */}
  <div className="back-wrapper gp fixed z-[1] top-0 left-0 w-full flex justify-center items-center h-[100%] pointer-events-none">
    <Image
      ref={pastaImg}
      src="/gp1.png"
      alt="Pasta"
      style={{right: "17%", bottom: "3%", rotate: "110deg"}}
      className="absolute h-auto"
      width={400}
      height={100}
    />
    <Image
      ref={pastaImg2}
      src="/gp1.png"
      alt="Pasta 2"
      className="absolute h-auto"
      style={{left: "20%", top: "20%", rotate: "-20deg"}}
      width={400}
      height={100}
    />
  </div>

  {/* Pack Images */}
  <div className="image-wrapper flex z-[100] w-[10%] top-0 justify-center items-center h-[100%]">
    <Image
      src="/pastapng.png"
      alt="Pasta PNG"
      className="absolute"
      style={{ zIndex: 100 }}
      width={400}
      height={300}
    />
    <Image
      src="/vermicilli.png"
      alt="Vermicelli"
      className="absolute"
      style={{ zIndex: 99, left: "27%" }}
      width={300}
      height={200}
    />
    <Image
      src="/macaronipack.png"
      alt="Macaroni Pack"
      className="absolute"
      style={{ zIndex: 98, right: "27%" }}
      width={300}
      height={200}
    />
  </div>
</div>


    <div className="" >
      {/* Section2 */}
      <div ref={section2} className="secondDiv z-[2] relative w-full bg-gradient-to-br from-black to-gray-900 h-[100%] overflow-hidden ">
          <Section2 />

       {/* Section3 */}
      <div className="section3 relative h-[100vh] w-full flex flex-col items-center">
          <>
          <div className="text-4xl max-w-[70%] sm:text-5xl font-bold text-purple-700 pt-10">
            Our Products
          </div>
          <div className="text-[20px] max-w-[70%] sm:text-[25px] self-center text-[white] font-serif">
            Delivering unmatched taste and texture in every bite
          </div>
          {/* Horizontal scroll */}
          <div className="scroll-container h-[30%] w-[80%] relative top-[20%] flex gap-3">
            <Section3 />
          </div>
          </>
      </div> 

        {/* Section4 */}
                <div className="section4 h-[100vh] relative w-full">
                  <Section4 />
                </div>

        {/* Section5 */}
                <div className="section5 relative h-[100vh] w-full flex flex-col justify-center items-center">
                  <div className="w-[70%] mb-10 text-center">
                    <Section5 />
                  </div>

                  <div className="flex w-full text-lg justify-between font-serif text-gray-300 items-start px-10">
                    {/* Quick Links */}
                    <div className="w-[30%] flex flex-col gap-4 pl-5">
                  <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">Quick Links</h1>
              <Link href="/" className="hover:underline hover:text-[#ffaa4f]">Home</Link>
              <Link href="/combo" className="hover:underline hover:text-[#ffaa4f]">Combo Offers</Link>
              <Link href="/hygiene" className="hover:underline hover:text-[#ffaa4f]">Our Hygiene Standards</Link>
              <Link href="/contact" className="hover:underline hover:text-[#ffaa4f]">Contact Us</Link>
              <Link href="/privacy" className="hover:underline hover:text-[#ffaa4f]">Privacy Policy</Link>
            </div>

            {/* About Us */}
            <div className="w-[40%] pr-5 text-justify">
              <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">About Us</h1>
              <p>
                At <strong>Delijiosho Foods</strong>, we are committed to delivering the finest quality
                macaroni, pasta, and vermicelli to your table. With a focus on health and taste,
                we prioritize natural ingredients, modern manufacturing processes, and strict hygiene
                standards. From nutritious options to indulgent treats, our products are crafted to 
                satisfy every palate while maintaining top-tier quality.
              </p>
            </div>

            {/* Newsletter & Feedback */}
            <div className="w-[30%] flex flex-col gap-6 pl-5">
              {/* Newsletter Section */}
             
              {/* Business Contact */}
              <div>
                <h1 className="text-xl text-[#ffaa4f] font-bold uppercase">Contact Us</h1>
                <p>
                  Business Email: <a href="mailto:jogeshchahar@gmail.com" className="text-[#ffaa4f] underline">jogeshchahar@gmail.com</a>
                </p>
              </div>

              {/* Feedback Section */}
              <FeedbackForm/>
            </div>
          </div>
                </div>
      </div>

    </div>
</div>
  
  );
};

export  {Navbar};
