import Image from "next/image";
import Link from "next/link";
import vectorMistery from "./mistery/vectormistery";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div>
        <img src="hero1.jpg" className="w-full" />
       <div className="lg:absolute lg:top-3/5 left-36 right-0 bottom-0 flex items-center justify-center lg:bg-neutral-400 lg:rounded-2xl lg:w-[30%] lg:h-[30%] flex-col">
        
          <div className="flex flex-col items-start justify-center lg:gap-10 gap-5 lg:p-12 p-5">
            
            <h1 className="text-black lg:text-4xl text-2xl font-bold font-serif dark:text-white">Lumea Rock-ului Clasic</h1>
            <p className="text-black lg:text-xl text-l font-serif dark:text-white">
            Feel the authentic energy of the '80s and '90s with a perfect blend of legendary music and retro fashion.            </p>
            <Link href="/clothing" className="bg-black hover:scale-110  text-white dark:bg-white dark:text-black lg:text-l text-l font-semibold  hover:bg-white hover:text-black lg:p-4 p-3 rounded-lg">
              Shop now
            </Link>
            
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center lg:flex-row flex-col lg:gap-20 gap-10 mt-10  p-2">
        {vectorMistery.map((e) => (
            <Link href={`/mistery/${e.id}`} passHref className="hover:scale-105 transition-transform duration-300 ease-in-out" key={e.id}>
              <img src={e.img} className="rounded-t-2xl" width={800} height={600} />
            </Link>
         
        ))}
      </div>
      <Footer />
    </>
  );
}
