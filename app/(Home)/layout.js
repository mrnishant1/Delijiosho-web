import Link from "next/link"
import './Navbar.css'
export default function layout({children}){
    return(
        <>
        <div className="Navbar flex justify-center gap-20 h-[10%] w-full text-stone-200 text-4xl px-10 pt-5">
            <Link href={"/"} >Home</Link>
            <Link href={"/products"} >Products</Link>
            <Link href={"/contact"} >Contact</Link>
        </div>

          {children}
        </>
    )
}