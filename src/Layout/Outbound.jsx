import React from 'react'
import Button from "@mui/material/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Outbound() {
  return (
    <section  className='max-w-330 mx-auto px-4 md:px-0'>
        <div className="flex flex-col justify-center items-center">

             <span className="text-success md:text-start text-center text-[16px] md:text-[24px] tracking-[5%]">
            GET STARTED
          </span>
          <h1 className=" text-[36px] text-white font-bold tracing-[-1%] md:leading-normal leading-[110%]  mx-auto my-2 md:my-0 flex-wrap   md:mx-0 text-center  ">
           <span className='italic  font-medium'>Embrace</span> the new era of .
    <span className='italic font-medium'>outbound</span>      </h1>
          <p className=" mt-3 text-xl font-light font-sans text-secondary leading-[130%] tracking-[-1%] md:w-[50%] text-center w-81.75">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>

          <div className="mt-6 w-full md:w-fit ">
             <Button
             className="w-full md:w-fit! flex gap-x-2 items-center"
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
    </section>
  )
}

export default Outbound