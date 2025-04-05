import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import vectorhaine from './vectorhaine';

export default function VectorId() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    const obiect = vectorhaine.find(m => m.id == id);

    if (!obiect) {
        return <div>Misterul nu a fost găsit!</div>;
    }

//   const poze=["https://domno-vintage.com/cdn/shop/files/1a_ecbe5e51-6ad2-47a6-9898-71f215de65f0.jpg?v=1742406964&width=5000","https://domno-vintage.com/cdn/shop/files/1b_031aae54-9131-4fe2-a175-6ac50881ac09.jpg?v=1742402723&width=5000","https://domno-vintage.com/cdn/shop/files/2d_e85a6202-a2a7-42f8-8272-0faf3e9b9a7c.jpg?v=1742402723&width=980"]

  const [currentIndex, setCurrentIndex] = useState(0);

  const inainte = () => {
    setCurrentIndex(currentIndex + 1)
    if(currentIndex === obiect.vt.length - 1){
        setCurrentIndex(0)
      }
  }

    const inapoi = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0){
            setCurrentIndex(2)
          }

          if(currentIndex === 2){
            setCurrentIndex(1)
          }

          if(currentIndex === 1){
            setCurrentIndex(0)
          }
    }


    const type1 = () => {
        setCurrentIndex(0)
    }

    const type2 = () => {
        setCurrentIndex(1)
    }

    const type3 = () => {
        setCurrentIndex(2)
    }
    return (
        <>

        <div className='flex lg:justify-center lg:items-center lg:flex-row flex-col justify-center items-center gap-10 lg:mt-20 p-2 ' >
            
 <div className="flex justify-center items-center relative p-5">
  <div className="relative">
    <img src={obiect.vt[currentIndex]} className="lg:h-[800px] h-[450px] lg:w-[750px] w-[380px]"/>
    
    <button onClick={inapoi} className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
      <img  src="/left.png"    className="lg:w-12  lg:p-2 p-1 rounded-full hover:scale-150 w-6 filter invert"   />
    </button>

    <button  onClick={inainte}   className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" >
      <img  src="/right.png" className="lg:w-12  lg:p-2 p-1 rounded-full hover:scale-150 w-6 filter invert"  />
    </button>
  </div>
</div>


<div className=' lg:h-[800px] h-[450px] lg:w-[750px] w-[330px] '>
    <h1 className='text-4xl mb-14 font-extrabold'>{obiect.name}</h1>
    <p className='text-xl font-serif'>{obiect.description}</p>
    <div>
        <h1 className='text-3xl mt-12 mb-8'>You have the option to choose</h1>
        <div className='flex gap-5'>
        <button className='cursor-pointer bg-black text-xl p-3 rounded-lg font-serif text-white border-2 hover:border-white hover:bg-gray-700' onClick={type1}>type 1</button>
        <button className='cursor-pointer bg-black text-xl p-3 rounded-lg font-serif text-white border-2 hover:border-white hover:bg-gray-700' onClick={type2}>type 2</button>
        <button className='cursor-pointer bg-black text-xl p-3 rounded-lg font-serif text-white border-2 hover:border-white hover:bg-gray-700' onClick={type3}>type 3</button>
        </div>
        <p className='text-3xl font-serif mt-10'>Price:{obiect.price}</p>
        <button className='bg-black lg:w-2xl w-40 text-xl p-3 rounded-lg font-serif cursor-pointer text-white border-2 hover:border-white hover:bg-gray-700 mt-10'><Link href="/about">Buy</Link></button>
    </div>
    </div>

</div>

</>);
}
