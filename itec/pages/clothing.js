import Link from "next/link";
import vectorhaine from "./obiecte/vectorhaine";

export default function Clothing() {
  return (
    <div className="lg:flex lg:flex-row flex-col p-5 space-x-5 mt-3">

      <div className="flex flex-col gap-5 bg-gray-300 p-10 rounded-2xl shadow-lg lg:w-[20%] w-[100%] mb-10 lg:fixed top-36 left-5 z-10">
        <h1 className="lg:text-4xl text-2xl font-bold ml-2 mb-5">Menu</h1>
        <Link href="/clothing/tshirts"className="lg:text-xl text-l p-3 font-bold hover:text-[#795458] border-b-2 border-black"> T-Shirts </Link>
        <Link href="/clothing/hoodies"  className="lg:text-xl text-l p-3 font-bold hover:text-[#795458] border-b-2 border-black" >Hoodies</Link>
        <Link href="/clothing/pants"className="lg:text-xl text-l p-3 font-bold hover:text-[#795458] border-b-2 border-black" >  Pants </Link>
      </div>

      <div className="flex flex-wrap  p-5 lg:ml-[20%] w-full">
  {vectorhaine.map((item) => (

    <div className="flex flex-col items-start mb-10 w-full sm:w-1/2 xl:w-1/4 p-4 ">

        <Link href={`/obiecte/${item.id}`} passHref>
        <img src={item.image} className="w-[100%] rounded-2xl" /></Link>

      <h2 className="text-2xl font-bold font-serif mt-5 mb-1">{item.name}</h2>
      <p className="text-xl mt-1 font-mono">{item.price}</p>
    </div>
  ))}
</div>

    </div>
  );
}
