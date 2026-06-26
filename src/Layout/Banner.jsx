import React from "react";
import Bannerimage from '../assets/bannerimages.png'
import Button from "@mui/material/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Banner() {
  return (
    <section className=" bg-[#02242A]">
     <div className="max-w-330 w-full px-4 md:px-0 mx-auto">
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="py-27.5 z-20 md:text-start text-center ">
          <span className="text-success md:text-start text-center text-[16px] md:text-[24px] tracking-[5%]">
            AI SDRs (aiDRs)
          </span>
          <h1 className=" text-[40px] text-white font-bold tracing-[-1%] md:leading-normal leading-[110%] w-80 mx-auto my-2 md:my-0 md:w-97.75 md:text-[64px] md:mx-0">
            More <span className="italic font-medium">leads</span>, less{" "}
            <span className="italic font-medium">people</span>
          </h1>
          <p className="text-xl font-light font-sans text-secondary leading-[130%] tracking-[-1%] md:w-112.5">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>

          <div className="mt-6">
             <Button
             className="!w-full md:!w-fit flex gap-x-2 items-center"
              variant="contained"
              sx={{
                padding: "10px 16px",
                backgroundColor: "#0FF1F6",
                borderRadius: "100px",
                fontFamily: "'Work Sans', sans-serif",
                color: "#002228",
                fontSize: "14px",
                font: "bold",
                letterSpacing: "-1%",
                textTransform: "capitalize",
                
              }}
            >
             Sign Up for the Beta
            <BsArrowUpRightSquare />


            </Button>
          </div>
        </div>

        <div className="">
            <img src={Bannerimage} alt="" className="absolute  right-0 w-fit h-fit z-0 bottom-[175px]  w-full left-0  md:rotate-0 md:left-0 md:bottom-0" />
        </div>
      </div>
     </div>
    </section>
  );
}

export default Banner;
