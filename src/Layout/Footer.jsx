import React from 'react'
import Logo from '../assets/Logo.png'

function Footer() {
  return (
   <section className='bg-background mt-24'>
    <div className=" py-11 px-4 md:px-0 flex flex-col md:flex-row gap-4 justify-between items-center max-w-330 mx-auto">
        <img src={Logo} alt="" />
        <p className='text-secondary text-sm md:text-[16px] font-light '>Copyright © 2023 Wizia. All rights reserved.</p>


    </div>

   </section>
  )
}

export default Footer