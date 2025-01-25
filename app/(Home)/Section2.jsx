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

        gsap.to('.macaroniBack',{
            right:'-33%',
            duration: '0.3',
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
          
          
        },[])

        return (
            <>
            {/* left text side */}
            <div  className='textside flex flex-col gap-12'>
                    {/*main Headings*/}
                    <h1 className='onlytext relative pl-[4rem] pr-{4rem} pt-[4rem] flex flex-col gap-2 text-[80px] left-[-100%]'>
                        <span className='md:text-6xl text-5xl '>Twist</span> 
                        {/* <br /> */}
                        <span className='md:text-6xl text-4xl '>Taste</span> 
                        {/* <br /> */}
                        <span className='md:text-6xl text-2xl text-[#ffe500] '>
                            <span className=''>Your Delicious Heaven!</span>     
                        </span>
                    </h1>
                    {/* short para */}
                    <div className='onlytext relative text-[25px] pl-[4rem] left-[-100%]'>
                        <span className='font-serif'>"Pure pasta perfection in every bite!</span> <br /> 
                         <span className='text-yellow-200'>Delicious, wholesome, unforgettable!"</span> <br />
                         <span className='font-serif '>Crafted with the finest ingredients, <br />
                         our macaroni brings authentic flavors and irresistible taste to your plate.</span> 
                    </div>
                    <button className='onlytext ml-14 md:h-[7%] w-[23%] p-0 shopTopBtn relative left-[-100%] flex justify-center items-center md:top-[-10px] gap-2 bg-[#FFE500] text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600  z-50 font-serif'><strong>Get Now</strong></button>
                   

                </div>
            <div className="macaroniBack absolute h-[120%] bg-[#ff8400] w-[70%] rotate-[45deg] right-[-100%] rounded-[40px] ] "> </div>

                {/* Right side  */}
                <div className='rightside absolute w-[45%] h-[90%] right-0'>
                    <div className=' w-[100%] h-[100vh]'>
                    <Image
                        id="macaroniImg"
                        src={"/macaroni.png"}
                        loading="lazy"
                        alt="Macaroni"
                        width={700}
                        height={100}
                        className='absolute h-[80%] top-[0%] left-[100%] w-[100%] opacity-[1] rotate-[-10deg]'
                    />
                    </div>
                </div> 
                    
            </>
        );
    }
    
    export default Section2;
    