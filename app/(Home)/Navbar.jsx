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

  // Pasta animation
  useEffect(() => {
    gsap.to(pastaImg.current, {
      right: "10%",
      bottom: "10%",
      height: "50%",
      duration: 1,
      rotate: "180",
      ease: "power1.out",
    });

    gsap.to(pastaImg2.current, {
      left: "10%",
      top: "10%",
      height: "60%",
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  // Section2 animation
  useEffect(() => {
    gsap.to(section2.current, {
      borderRadius: "100 100 0 0",
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
    <div className='mainDiv sticky top-0 w-full bg-gradient-to-br from-black to-gray-900 h-[100vh] flex justify-center items-center'>
        {/* Background Macaroni images */}
        <Image
          ref={pastaImg}
          src="/gp1.png"
          alt="Pasta"
          style={{ height: "0%", position: "absolute" }}
          width={600}
          height={100}
        />
        <Image
          ref={pastaImg2}
          src="/gp1.png"
          alt="Pasta 2"
          style={{ height: "0%", position: "absolute" }}
          width={700}
          height={100}
        />
        <Image
          src="/pastapng.png"
          alt="Pasta PNG"
          style={{ height: "85%", position: "absolute", zIndex: 100 }}
          width={400}
          height={200}
        />
        <Image
          src="/vermicilli.png"
          alt="Vermicelli"
          style={{ height: "67%", position: "absolute", zIndex: 99, left: "23%" }}
          width={400}
          height={200}
        />
        <Image
          src="/macaronipack.png"
          alt="Macaroni Pack"
          style={{ height: "67%", position: "absolute", zIndex: 99, right: "23%" }}
          width={400}
          height={200}
        />
      </div>

    <div className="overflow-x-hidden" >
      {/* Section2 */}
      <div ref={section2} className="secondDiv z-[2] relative w-full bg-gradient-to-br from-black to-gray-900 h-[100%] overflow-hidden ">
        <div className="section2 h-[100vh] w-full flex flex-row relative">
          <Section2 />
        </div>

       {/* Section3 */}
      <div className="section3 relative h-[100vh] w-full flex flex-col items-center">
          <>
          <div className="text-5xl px-16 font-bold text-purple-700 pt-10">
            Our Products
          </div>
          <div className="text-[25px] self-center text-[white] font-semibold">
            Delivering unmatched taste and texture in every bite
          </div>
          {/* Horizontal scroll */}
          <div className="scroll-container h-[50%] w-[80%] relative top-[20%] flex gap-3">
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
