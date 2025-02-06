import Link from 'next/link';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
const Menucarts = (props) => {
  return (
    <>
       <div className="relative h-[330px] w-[230px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105" id='con'>
      <img src={props.img} className="w-[160px] pt-5 ml-7" />
      <h1 className="ml-5 pt-4 font-bold text-green-600 text-[20px]">{props.h1}</h1>
      <p className="ml-5 pt-1 text-[16px]">Delicious dish</p>
      <h4 className="ml-5 pt-3 font-bold">{props.h4}</h4>
     <Link href='#hero'><FiShoppingCart className="absolute bottom-0 right-0 text-white w-12 h-12 bg-green-600 p-3" /></Link>
    </div>
    </>
  )
}

export default Menucarts