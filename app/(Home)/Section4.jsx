import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image'

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
        <div className="h-full w-full relative">
            {/* Video Container */}
            <div className="videoContainer h-[100%] w-[100%] bg-red-400 p-[10%] relative">
                <h1 className="text-white text-4xl font-bold">Promotion Video</h1>
            </div>

            {/* ProductTalks Container */}
            <div className="ProductTalks p-8 h-[75%] w-[30%] bg-[#ff8400] absolute bottom-[5%] right-[-30%] shadow-xl">
                <h1 className="text-4xl font-bold">Healthy!</h1>
                <h1 className="text-2xl font-bold">&</h1>
                <h1 className="text-4xl font-bold">Tasty!</h1>
                <br />
                <h1 className="text-6xl font-bold">Why Choose Us?</h1>
                <h1 className="text-xl text-white">
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
