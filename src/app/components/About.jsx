import React from 'react'
import { Poppins } from 'next/font/google'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
const About = () => {
  return (
    <>
      <section id='about' className='h-[90vh] w-[100%] bg-white'>
        <div id='leftt' className='pt-[2cm] ml-[5cm]'>
            <img src='/about.jpg' alt='about.jpg' className='w-[370px] h-[410px] rounded-md'/>
        </div>
        <div id='rightt' className='ml-[20cm] mt-[-10cm]'>
            <p className='text-green-600 text-[20px] font-bold' id='ptg'>About us</p>
            <h2 className={`text-5xl ${robo.className} leading-[1.8cm]`}>We cook the best<br/>
            tasty food</h2>
            <p id='p2'className={`text-1xl ${robo.className} mt-6 tracking-wide font-medium`}>We cook the best food in the entire city, with <br/>
            excellent customer service, the best meals and at<br/>
             the best price, visit us.</p>
             <button  className='h-[1.5cm] w-[3.9cm] bg-green-600 text-white text-[16px] rounded-md mt-[1cm] hover:bg-green-500'>Explore History</button>
        </div>
      </section>
    </>
  )
}

export default About