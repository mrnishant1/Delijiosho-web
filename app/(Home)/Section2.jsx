import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css"
import Image from "next/image"
    const Section2 = () => {
     useEffect(()=>{
        
        //main text animation
        gsap.to((".onlytext"),{
            stagger: '0.5',
            left: '0px',
            duration: '0.5',
            ease: "power1.out",
            scrollTrigger:{
                trigger: '.onlytext',
                // markers: true,
                start: 'top 60%',
                end: 'top -75%',
                toggleActions: 'play reverse play reverse'
            }
        })
        
        // macaroni image animation
        gsap.to(("#macaroniImg"),{
            rotate: '-10deg',
            left:'10%',
            duration: '0.5',
            ease: "power1.out",
            scrollTrigger:{
                trigger: '.onlytext',
                // markers: true,
                start: 'top 60%',
                end: 'top -75%',
                toggleActions: 'play reverse play reverse'
            }
        })

        gsap.to('.orangeBack',{
            duration: '0.3',
            left: '74%',
            ease: "power1.out",
            scrollTrigger:{
                trigger: '.onlytext',
                // markers: true,
                start: 'top 60%',
                end: 'top -75%',
                toggleActions: 'play reverse play reverse'
            }
        })
        //triplet promoPic animation remain to be done here
        // left: 42%;
        // top: -53%;
        // rotate: 169deg;
        // scale: 1.7;
      
          
        },[])

        return (
            <>
            <div className="section2 h-[100vh] w-full grid grid-cols-1 md:grid-cols-2 relative">            
            {/* Left text side */}
            <div className="textside flex flex-col gap-12 p-6 md:p-12">
              {/* Main Headings */}
              <h1 className="onlytext flex flex-col gap-2 text-[50px] md:text-[80px] left-[-100%] relative">
                <span className="text-4xl md:text-6xl">Twist</span> 
                <span className="text-3xl md:text-6xl">Taste</span> 
                <span className="text-3xl md:text-6xl text-[#ffe500]">
                  Your Delicious Heaven!
                </span>
              </h1>
          
              {/* Short paragraph */}
              <div className="onlytext max-w-[100%] text-[14px] md:text-[20px] left-[-200%] relative">
                <span className="font-serif">"Pure pasta perfection in every bite!</span><br /> 
                <span className="text-yellow-200">Delicious, wholesome, unforgettable!"</span><br />
                <span className="font-serif">
                  Crafted with the finest ingredients,<br />
                  our macaroni brings authentic flavors and irresistible taste to your plate.
                </span>
              </div>
          
              {/* Button */}
              <button className="onlytext left-[-100%] relative md:h-[7%] w-[50%] md:w-[30%] bg-[#FFE500] text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 z-50">
                <strong>Get Now</strong>
              </button>
            </div>
          
            {/* Right side */}
            <div className="rightside relative z-10 flex justify-center items-center md:w-[100%] h-[90%]">
              <Image
                id="macaroniImg"
                src={"/macaroni.png"}
                loading="lazy"
                alt="Macaroni"
                width={700}
                height={100}
                className="h-auto w-[70%] md:w-[100%] rotate-[-10deg]"
              />
            </div>
                {/* <div class="orangeBack absolute right-[10%] scale-[5] lg:scale-[15] duration-1000  rotate-[92deg] rounded-[50%] z-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-orange-500"></div> */}
          </div>
            </>
        
          
            
        );
    }
    
    export default Section2;
    