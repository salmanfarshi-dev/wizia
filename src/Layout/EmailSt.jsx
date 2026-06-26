import React from "react";
import Emailstimage from "../assets/bgs.png";
import { FaRegCheckCircle } from "react-icons/fa";

function EmailSt() {
  return (
    <section className="max-w-330 mx-auto mb-10 md:mb-24 px-4 md:px-0">
      <div className="bg-[#0D292F] overflow-hidden rounded-[24px] flex flex-col-reverse md:flex-row items-center gap-x-30 px-4 md:px-0 pt-8  pb-8 md:pb-0  relative">
        <div className="">
          <img src={Emailstimage} alt="" className="md:-scale-x-100 w-50 md:w-full md:static absolute bottom-0" />
        </div>
        <div className="z-10">
          <h3 className="text-white text-[28px] md:text-[40px] font-semibold tracking-[-1%] w-[259px] md:w-full flex-wrap">
            Train your aiDR on your...
          </h3>
          <p className="text-[28px] md:text-[40px] font-medium italic tracking-[-1%] text-success ">
            prefered email st|
          </p>
          <p className="text-[18px] md:text-[24px] font-light font-sans leading-[130%] tracking-[-1%] md:w-[450px] w-[259px] flex-wrap md:mt-8 mt-6 text-secondary">
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </p>

          <div className="mt-8 md:mt-16 ">
            <div className="flex gap-y-2 md:gap-y-0  md:gap-12  flex-col md:flex-row">
              <div className="flex  gap-x-2 items-center">
                <FaRegCheckCircle className="text-[#14BCB2] bg-[#14BCB2]/30 rounded-full"/>
                <p className="text-[16px] md:text-xl text-[#14BCB2] font-medium tracking-[-1%]">Quick to ramp</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCheckCircle className="text-[#14BCB2] bg-[#14BCB2]/30 rounded-full"/>
                <p className="text-[16px] md:text-xl text-[#14BCB2] font-medium tracking-[-1%]">Easy to optimize</p>
              </div>
            </div>
            <div className="flex gap-y-2 md:gap-y-0  md:gap-12 mt-2 md:mt-6 flex-col md:flex-row">
              <div className="flex  gap-x-2 items-center">
                <FaRegCheckCircle className="text-[#14BCB2] bg-[#14BCB2]/30 rounded-full"/>
                <p className="text-[16px] md:text-xl text-[#14BCB2] font-medium tracking-[-1%]">Quick to scale up</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCheckCircle className="text-[#14BCB2] bg-[#14BCB2]/30 rounded-full"/>
                <p className="text-[16px] md:text-xl text-[#14BCB2] font-medium tracking-[-1%]">Works with all your existing tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailSt;
