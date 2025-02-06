import React from 'react'
import Carts from '../components/Carts'
import { Poppins } from 'next/font/google'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
const Services = () => {
  return (
    <>
     <section id='services' className='h-[90vh] w-[100%]'>
    <p className='text-center text-green-600 font-bold text-[20px] pt-8'>Offering</p>
    <h1 className={`text-center ${robo.className} text-4xl pt-9`}>Our amazing services</h1>
   <div id='cart-container' className='flex gap-[3cm] justify-center mt-[2cm]'>
   <Carts img='/plate.png'h1='Excellent food'/>
   <Carts img='/piza.png' h1='Fast food'/>
   <Carts img='/ven.png' h1='Delivery'/>
   </div>
     </section>
    </>
  )
}

export default Services