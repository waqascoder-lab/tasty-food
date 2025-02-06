import React from 'react'
import { Poppins } from 'next/font/google'
import Menucarts from '../components/Menucarts'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
const Menu = () => {
  return (
    <>
    <section id='menu' className='h-[90vh] w-[100%]'>
   <p className='text-center text-green-600 font-bold text-[20px] pt-8'>Special</p>
   <h1 className={`text-center ${robo.className} text-4xl pt-9`}>Menu of the week</h1>
  <div className='flex justify-center gap-[3cm] mt-[1.2cm] flex-wrap'id='menuc'>
  <Menucarts img='/plate1.png' h1='Barbecue Salad'h4='$22.00'/>
  <Menucarts img='/plate2.png' h1='Salad with fish'h4='$12.00'/>
  <Menucarts img='/plate3.png' h1='Spiach Salad'h4='$9.50'/>
  </div>
    </section>
   </>
  )
}

export default Menu