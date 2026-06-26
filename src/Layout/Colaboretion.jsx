import React from "react";
import Backhub from "../assets/backhub.png";
import dbs from "../assets/dbs.png";
import easy from "../assets/eadyeuro.png";
import cablelap from "../assets/cablelabs.png";
import amd from "../assets/amd.png";

function Colaboretion() {
  return (
    <section className="bg-background ">
      <div className="max-w-330 mx-auto px-4 md:px-0">
        <div className="pt-8 pb-10">
          <p className="text-success text-[16px]  font-normal tracking-[5%] mt-8 text-center">
            our trusted partners
          </p>
          <div className="mt-6 flex flex-wrap md:flex gap-8 mx-auto justify-center">
            <img src={Backhub} alt="" className="object-contain"/>
            <img src={cablelap} alt="" className="object-contain"/>

            <img src={dbs} alt="" className="object-contain"/>
            <img src={easy} alt="" className="object-contain"/>

            <img src={amd} alt="" className="object-contain"/>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Colaboretion;
