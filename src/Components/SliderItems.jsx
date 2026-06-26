import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";


function SliderItems({tittle, name,status}) {
  return (
    <div className='flex justify-center flex-col items-center text-center'>
        <div className="w-14 h-14 md:w-18.5 md:h-18.5  rounded-full flex justify-center items-center bg-success/20 ">
        <RiDoubleQuotesL className='text-success md:text-3xl text-2xl'/>

        </div>

        <h3 className='text-secondary text-[24px] md:text-[32px] max-w-230 flex-wrap font-sans leading-[130%] tracking-[-2%] font-light my-10'>{tittle}</h3>
        <span className='text-success font-semibold font-sans text-[18px] md:text-[24px] '>{name}</span>
        <p className='text-[16px] md:text-xl text-secondary font-sans font-normal mt-1'>{status}</p>
       
    </div>
  )
}

export default SliderItems