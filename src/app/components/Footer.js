import React from 'react'
import { Poppins } from 'next/font/google'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
  return (
   <>
     <section className='h-[70vh] w-[100%] bg-white' id='footer'>
        <div id='footer-cont' className='flex gap-[5cm] pt-[1.4cm]'>
        <div>
            <h1 className={`font-bold text-green-600 text-[30px] ml-[2cm] ${robo.className}`}>Tasty Food</h1>
            <p className='ml-[2.1cm] text-[18px] font-medium'>resturent</p>
            <div className="flex gap-4 ml-[1.8cm] mt-6">
      <div className="bg-white text-red-600 text-2xl p-3 rounded-full hover:bg-green-200">
        <Link href='https://www.youtube.com/@Code-Craft-c8s' target='blank'><FaYoutube /></Link>
      </div>
      <div className="bg-white text-blue-600 text-2xl p-3 rounded-full hover:bg-green-200">
        <Link target='blank' href='https://web.facebook.com/profile.php?id=100064524279965'><FaFacebook /></Link>
      </div>
      <div className="bg-white text-blue-600 text-2xl p-3 rounded-full hover:bg-green-200">
       <Link target='blank' href='https://www.linkedin.com/in/waqas-ali-87b779346/'> <FaLinkedin /></Link>
      </div>
    </div>
        </div>
        <div>
        <h1 className='text-[30px] font-semibold'>Services</h1>
         <p className='leading-9 text-[20px]'>Delivery</p>
          <p className='text-[20px]'>Pricing</p>
          <p className='text-[20px]'>Fast food</p>
          <p className='text-[20px]'>Reserve your spot</p>
        </div>
        <div>
        <h1 className='text-[30px] font-semibold'>Information</h1>
         <p className='leading-9 text-[20px]'>Event</p>
          <p className='text-[20px]'>Contact Us</p>
          <p className='text-[20px]'>privacy policy</p>
          <p className='text-[20px]'>Term of services</p>
        </div>
        <div>
        <h1 className='text-[30px] font-semibold'>Address</h1>
         <p className='leading-9 text-[20px]'>pakistan</p>
          <p className='text-[20px]'>Islamabad</p>
          <p className='text-[20px]'>mw4061085@gmail.com</p>
        </div>
        </div>
        <p className='text-center text-[18px] mt-[6cm] p-[1cm] text-white bg-green-600'>© 2025 Muhammad Waqas. All right reserved</p>
     </section>
   </>
  )
}

export default Footer