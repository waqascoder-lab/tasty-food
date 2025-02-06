import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const robo = Poppins({
    weight:"600",
    subsets:['latin']
})
const Mobile = () => {
  return (
    <div>
        <>
         <section className='h-[100vh] w-[100%] bg-white' id='mob'>
            <div>
                <img src='/movil-app.png' className='w-[400px] ml-[5cm] pt-[1.3cm]'/>
            </div>
            <div className='ml-[20cm] mt-[-12cm]'>
                <p className='text-[24px] text-green-600 font-bold ml-2'>App</p>
                <h1 className={`text-green-600 text-5xl pt-4 ${robo.className}`}>App is available</h1>
                <p className='pt-9 text-[23px] leading-[.7cm] tracking-wide'>Find our application and download it, you can make <br/>
                   reservations, food orders, see your deliveries on <br/>
                   the way and much more.</p>
                   <div className='mt-[1cm] flex gap-3'>
                    <Link href='#hero'><img src='/app1.png' className='w-[4cm]'/></Link>
                    <Link href='#hero'><img src='/app2.png' className='w-[4cm]'/></Link>
                   </div>
            </div>
         </section>
        </>
    </div>
  )
}

export default Mobile