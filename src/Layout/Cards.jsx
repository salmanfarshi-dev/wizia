import React from "react";
import Card from "../Components/Card";
import { LuWandSparkles } from "react-icons/lu";
import { LuShare2 } from "react-icons/lu";
import { LuMove } from "react-icons/lu";

function Cards() {
  return (
    <section className="max-w-330 mx-auto mt-10 mb-10 md:mt-30 md:mb-30 px-4 md:px-0 ">
      <div className="flex justify-between md:flex-row flex-col gap-y-12">
        <Card
          icon={
            <LuWandSparkles className="text-success text-2xl md:text-4xl" />
          }
          subhead="You’re in Control"
          pera="aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        />
        <Card
          icon={
           <LuShare2 className="text-success text-2xl md:text-4xl" />

          }
          subhead="Infinitely Scalablel"
          pera="Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        />
        <Card
          icon={
           <LuMove className="text-success text-2xl md:text-4xl" />

          }
          subhead="Incredibly Flexible"
          pera="Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        />
      </div>
    </section>
  );
}

export default Cards;
