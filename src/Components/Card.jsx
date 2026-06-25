import React from 'react'

function Card({icon,className, subhead, pera}) {
  return (
    <div className='flex flex-col '>
        <div className={`${className}`}>{icon}</div>
        <h3 className='text-[24px] md:text-[28px] text-white font-semibold mt-6 mb-4'>{subhead}</h3>
        <p className='text-secondary font-sans font-light tracking-[-1%] leading-[130%] text-[18px] md:text-[22px] md:w-[384px] w-full flex-wrap'>{pera}</p>

    </div>
  )
}

export default Card