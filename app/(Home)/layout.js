"use client"
import {useState} from "react"
import Link from "next/link"
import './Navbar.css'
export default function layout({children}){
// const [op, setop] = useState(1)
//         if(window.screen<700){
//           setop(0)          
//         }
const [order, setorder] = useState(true)

    return(
        
        <>
        <div className={`Navbar z-[1] hidden sm:flex px-20 justify-evenly bg-none h-[10%] w-full text-white text-[230%] pt-5`}>
            <Link href={"/"} >Home</Link>
            <Link href={"/products"} >Products</Link>
            <Link href={"/contact"} >Contact</Link>
            
        </div>

        <div className="Navbar2 " >
            <button className="fixed z-[2001] text-[30px] cursor-pointer" onClick={()=>{setorder(!order); console.log(order)}}><strong>☰</strong></button>
            <div className={` z-[100] h-full w-full text-[50px] backdrop-blur-md flex flex-col justify-center items-center fixed 
                    ${order ? "opacity-0 pointer-events-none" : "opacity-100"
                      } transition-opacity duration-300`}>

                <nav className={`Navbar  text-white z-[20] font-[serif]  `}>
                    <a href="/" className="block hover:underline">
                    Home
                    </a>
                    <a href="#" className="block hover:underline">
                    About
                    </a>
                    <a href="#" className="block hover:underline">
                    Contact
                    </a>
                </nav>
                    
        </div>
        </div>

          {children}
        </>
    )
}
