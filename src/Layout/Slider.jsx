import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa6";


import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import SliderItems from '../Components/SliderItems';


function Slider() {
  return (
   <section className="relative max-w-330 mx-auto 
   px-4 md:px-0">

  {/* Left Arrow */}
  <button className="custom-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-success/20 w-10 h-9 rounded-2xl justify-center items-center hover:bg-success/30 duration-300">
   <FaArrowLeft className='text-success'/>

  </button>

  {/* Right Arrow */}
  <button className="custom-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-success/20 w-10 h-9 rounded-2xl justify-center items-center hover:bg-success/30 duration-300">
  <FaArrowRight className='text-success'/>


  </button>

  <div className=" !text-center">
    <Swiper
    className='slider'
     pagination={{
          clickable: true,
        }}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    modules={[Navigation,Pagination]}
  >
    <SwiperSlide>
        <div className="">
            <SliderItems tittle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." name="John Doe" status="Chief Strategy Officer @ Company"/>
            
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="">
            <SliderItems tittle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." name="Shifa Islam Srity" status="Graphics Designer and Model"/>
            
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="">
            <SliderItems tittle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." name="Salman Farshi" status="Mern Stack Developer"/>
            
        </div>
    </SwiperSlide>
   
  </Swiper>
  </div>

</section>
  )
}

export default Slider