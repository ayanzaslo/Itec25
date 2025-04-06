import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navbar() {  

    return (
        <>
          <div className="flex bg-black p-5 lg:w-full w-full  justify-center items-center dark:bg-white ">
            <nav className="hidden lg:flex lg:justify-center lg:items-center gap-x-80 ">

                <div className='flex items-center justify-center gap-10'>
              <Link href="/" className="font-serif text-white dark:text-black hover:text-gray-400 text-xl hover:scale-110">Home</Link>

              <Link
      href="/clothing"
      className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
    >
      Go to some page
    </Link>
              {/* <Link href="/clothing" className="font-serif text-white  dark:text-black hover:text-gray-400 text-xl hover:scale-110">Clothing</Link> */}
              <Link href="/jewellery" className="font-serif text-white  dark:text-black hover:text-gray-400 text-xl hover:scale-110">Jewellery</Link>

              </div>

<div> <img src='/cd2ss.png' className='w-40 h-12 dark:invert'></img></div>

              <div className='flex items-center justify-center gap-10 '>
              <Link href="/music" className="font-serif text-white hover:text-gray-400 text-xl hover:scale-110  dark:text-black">Music</Link>
              <Link href="/contact" className="font-serif text-white  hover:text-gray-400 text-xl hover:scale-110   dark:text-black">Contact</Link>
              </div>
            </nav>
    
            <div className="lg:hidden flex items-end justify-between w-full">
                <h2 className='text-white font-bold  dark:text-black'>CultureDrop</h2>
              <button className="text-white dark:text-black" onClick={() => toggleMenu()}>☰</button>
            </div>
          </div>
    
          <div id="mobile-menu" className="hidden lg:hidden bg-gray-800 p-6 dark:bg-gray-300"> 
            <Link href="/" className="block font-mono text-white hover:text-gray-300 text-xl mb-2 dark:text-black" onClick={() => toggleMenu()}>Home</Link>
            <Link href="/clothing" className="block font-mono text-white hover:text-gray-300 text-xl mb-2 dark:text-black" onClick={() => toggleMenu()}>Clothing</Link>
            <Link href="/jewellery" className="block font-mono text-white hover:text-gray-300 text-xl mb-2 dark:text-black" onClick={() => toggleMenu()}>Jewellery</Link>
            <Link href="/music" className="block font-mono text-white hover:text-gray-300 text-xl mb-2 dark:text-black" onClick={() => toggleMenu()}>Music</Link>
            <Link href="/contact" className="block font-mono text-white hover:text-gray-300 text-xl mb-2 dark:text-black" onClick={() => toggleMenu()}>Contact</Link>
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
