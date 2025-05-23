import Link from "next/link";
import vectorhaine from "./obiecte/vectorhaine";
import { useState } from "react";
import Footer from "./footer";


export default function Clothing() {
    const [haine, setHaine] = useState(vectorhaine);

    function filterProduts(type) {
        if(!type) 
            setHaine(vectorhaine);
        else
            setHaine(vectorhaine.filter((item) => item.name === type));
    }


    return (
      <>
    <div className="lg:flex lg:flex-row flex-col p-5 space-x-5 mt-3">

      <div className="lg:flex lg:flex-col gap-5 lg:bg-gray-300 p-10 lg:rounded-2xl lg:shadow-lg lg:w-[20%] w-[100%] mb-10 lg:fixed top-36 left-5 z-10">
        <h1 className="lg:text-4xl text-2xl font-extrabold ml-2 mb-5 dark:text-white">Menu</h1>
        <button className="lg:text-xl text-l p-3 font-bold hover:text-white border-b-2 text-start border-black cursor-pointer  dark:hover:text-black dark:text-white dark:border-white" onClick={()=> filterProduts("T-shirt")}>T-shirts</button>
        <button className="lg:text-xl text-l p-3 font-bold hover:text-white border-b-2 text-start border-black cursor-pointer dark:hover:text-black dark:text-white dark:border-white" onClick={()=> filterProduts("Hoodies")}>Hoodies</button>
        <button className="lg:text-xl text-l p-3 font-bold hover:text-white border-b-2 text-start border-black cursor-pointer dark:hover:text-black dark:text-white dark:border-white" onClick={()=> filterProduts("Trousers")}>Trousers</button>

      </div>

      <div className="flex flex-wrap  p-5 lg:ml-[20%] w-full">
  {haine.map((item) => (

    <div className="flex flex-col items-start mb-10 w-full sm:w-1/2 xl:w-1/4 p-4 ">
        <Link href={`/obiecte/${item.id}`} passHref>
        <img src={item.image} className="w-[100%] rounded-2xl hover:scale-110" /></Link>
      <h2 className="text-2xl font-bold font-serif mt-5 mb-1">{item.name}</h2>
      <p className="text-xl mt-1 font-mono">{item.price}</p>
    </div>
  ))}
</div>

    </div>

    <Footer />
  </>);
}
