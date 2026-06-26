import React from "react";
import BGImage from "../assets/bgs.png";

function Alocate() {
  return (
    <section className="max-w-330 mx-auto px-4 md:px-0 my-20">
      <div className="bg-background rounded-[24px] overflow-hidden ">
        <div className="pt-8 pl-4 pb-10 md:pt-17.5 md:pl-17.5 md:pb-23 ">
          <h3 className="text-white text-[28px] md:text-[32px] font-semibold tracking-[-1%] w-64.75 md:w-144.75 flex-wrap">
            Allocate effort where your reps make an inpact.
          </h3>
          <p className="text-[28px] md:text-[32px] font-medium italic tracking-[-1%] text-success ">
            Let us handle the rest.
          </p>
          <p className="text-[18px] md:text-[20px] font-light font-sans leading-[130%] tracking-[-1%] md:w-145.5 w-64.75 flex-wrap md:mt-4 mt-6 text-secondary">
            Keep your reps “in the air” -- out in the field and on the phone
            where they can build relationships.
          </p>

          <div className="mt-10 md:mt-23 flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-y-3">
              <h4 className="font-bold md:text-[40px] text-success text-[32px] tracking-[-1%]">
                32%
              </h4>
              <p className="font-medium text-[18px] w-full md:w-43.5 md:text-xl text-secondary tracking-[-1%] ">
                Improvement in Open Rates
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="font-bold md:text-[40px] text-success text-[32px] tracking-[-1%]">
                75%
              </h4>
              <p className="font-medium text-[18px] w-full md:w-43.5 md:text-xl text-secondary tracking-[-1%] ">
                Improvement in Ramp Time
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h4 className="font-bold md:text-[40px] text-success text-[32px] tracking-[-1%]">
                35%
              </h4>
              <p className="font-medium text-[18px] w-full md:w-46 md:text-xl text-secondary tracking-[-1%] ">
                Improvement in Meetings Booked
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={BGImage}
            alt=""
            className="absolute right-0 bottom-0 h-50  md:h-150"
          />
        </div>
      </div>
    </section>
  );
}

export default Alocate;
