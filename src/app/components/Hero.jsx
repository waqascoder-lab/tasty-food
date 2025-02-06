import React from 'react'
import { Poppins } from 'next/font/google'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
const Hero = () => {
  return (
   <>
     <section id='hero' className='h-[100vh] w-[100%] bg-white'>
         <div id='left' className='pt-[5cm]'>
            <span id='hed'className={`text-7xl ${robo.className} tracking-wide ml-[5.7cm] text-green-600`}>Tasty food</span>
            <h3 id='hed3' className={`text-[30px] ${robo.className} tracking-wide ml-[5.7cm] mt-6 leading-[1.1cm]`}>Try the best food of<br/>
            the week.</h3>
            <button className='h-[1.5cm] w-[3.4cm] bg-green-600 text-white ml-[5.7cm] text-[17px] rounded-md mt-[1cm] hover:bg-green-500'>View Menu</button>
         </div>
         <div id='right'>
           <img src="/home.png" alt="home img" className='ml-[20cm] w-[510px] mt-[-9.5cm]'/>
         </div>
     </section>
   </>
  )
}

export default Hero

