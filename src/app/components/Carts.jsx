import React from 'react'

const Carts = (props) => {
  return (
    <>
     <div className='h-[315px] w-[245px]' id='men'>
        <img src={props.img} className='w-[90px] h-[100px] ml-[2cm] pt-5'/>
        <h1 className='text-center text-[25px] font-bold pt-5 text-green-600'>{props.h1}</h1>
        <p className='text-justify text-[18px] pt-5 leading-[.7cm]'>We offer our clients excellent <br/>
           quality services for many years,<br/>
           with the best and delicious food <br/>
           in the city.</p>
     </div>
    </>
  )
}

export default Carts