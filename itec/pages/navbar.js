import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navbar() {  

    return (
        <>
          <div className="flex bg-[#363636] p-5 lg:w-full w-full  justify-center items-center ">
            <nav className="hidden lg:flex lg:justify-center lg:items-center gap-x-80 ">

                <div className='flex items-center justify-center gap-10'>
              <Link href="/" className="font-mono text-white hover:text-[#795458] text-xl hover:underline decoration-3">Home</Link>
              <Link href="/clothing" className="font-mono text-white hover:text-[#795458] text-xl hover:underline decoration-3">Clothing</Link>
              <Link href="/services" className="font-mono text-white hover:text-[#795458] text-xl hover:underline decoration-3">Jewellery</Link>

              </div>

<div> <h2 className='text-3xl text-center font-bold text-white'>CultureDrop</h2></div>

              <div className='flex items-center justify-center gap-10'>
              <Link href="/about" className="font-mono text-white hover:text-[#795458] text-xl hover:underline decoration-3">Music</Link>
              <Link href="/contact" className="font-mono text-white  hover:text-[#795458] text-xl hover:underline decoration-3">Contact</Link>
              </div>
            </nav>
    
            <div className="lg:hidden flex items-end justify-between w-full">
                <h2 className='text-white font-bold'>RetroVibes</h2>
              <button className="text-black" onClick={() => toggleMenu()}>☰</button>
            </div>
          </div>
    
          <div id="mobile-menu" className="hidden lg:hidden bg-black p-6 "> 
            <Link href="/" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Home</Link>
            <Link href="/about" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Clothing</Link>
            <Link href="/services" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Music</Link>
            <Link href="/contact" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Contact</Link>
          </div>
        </>
    );
    
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    }
}
