import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image'
// import VideoContent from './video.js';

export const Section4 = () => {
    useEffect(() => {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Smooth animations for the video container
        gsap.to(".videoContainer", {
            scale: 0.6,
            top: '-7%',
            right: '15%',
            borderRadius: '50px',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.videoContainer',
                markers: false,
                scrub: 1, // Smooth scrub for better scroll effect
                start: 'top 80%',
                end: 'top 30%',
            },
        });

        // Smooth animations for the ProductTalks container
        gsap.to(".ProductTalks", {
            right: '10%',
            
            borderRadius: '50px',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.videoContainer',
                markers: false,
                scrub: 1,
                start: 'top 60%',
                end: 'top 20%',
            },
        });
    }, []);

    return (
        <div className="sm:h-full h-[75%] w-full relative">
            {/* Video Container */}
            <div className="videoContainer h-[auto] max-w-[100%] bg-red-400 relative flex text-black text-xl font-bold justify-center items-center">
                {/* <VideoContent/> */}
                <Image
                   
                   src={"/promo.png"}
                   loading="lazy"
                   alt="Macaroni"
                   width={700}
                   height={100}
                   className='rounded-md'
                 />
                Promotion Ad. video! working on it.
            </div>

            {/* ProductTalks Container */}
            <div className="ProductTalks p-8 h-[auto] max-w-[100%] sm:max-w-[30%] bg-[#ff8400] absolute bottom-[5%] right-[0%] sm:right-[-30%] shadow-xl ">
                <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold">Healthy!</h1>
                <h1 className="md:text-2xl sm:text-lg text-1xl font-bold">&</h1>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Tasty!</h1>
                <br />
                <h1 className="lg:text-6xl sm:text-3xl text-3xl font-bold">Why Choose Us?</h1>
                <h1 className="lg:text-xl sm:text-lg text-base text-white">
                    <strong>Because you deserve the best!</strong> <br /> <br />
                    <strong>No Maida:</strong> Made with semolina for a wholesome experience. <br />
                    <strong>Quick to Cook:</strong> Saves time while delivering authentic taste. <br />
                    <strong>Kid-Friendly:</strong> Loved by kids for its shape and smooth texture.
                </h1>
            </div>
        </div>
    );
};

export default Section4;
