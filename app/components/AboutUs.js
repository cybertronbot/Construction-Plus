import React from "react";
import about from "@/public/about.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="relative w-[100%]">
      <div className=" flex sm:flex-row flex-col-reverse gap-20 py-12 sm:py-32 px-5 sm:px-20 ">
        <div className="  flex-1 flex relative">
          <Image src={about} width={565} height={524} alt="about-us" />
        </div>
        <div className="flex flex-1  flex-col  ">
          <h3 className="font-Agency sm:text-lg text-base font-bold uppercase relative a b ">
            A B O U T U S
          </h3>
          <h2 className="font-Agency sm:text-[52px] text-[30px] font-bold sm:leading-[62px] leading-[42px]">
            At Contracting Plus, we are a forward-thinking force in Sub-Saharan
            Africa, dedicated to unlocking boundless possibilities.
          </h2>
          <p className="font-poppins sm:text-base text-sm text-[#52525B] w-[100%] sm:w-[631px] pt-6">
            Our expertise spans development, design, and construction, and our
            passion lies in delivering tailored, top-tier solutions that shape a
            collective future of excellence. With a track record of turning
            ideas into reality, we are your trusted partner in the journey of
            progress.
          </p>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-10"></div>
        </div>
      </div>
      <div className="absolute right-12 bottom-[10%] w-[75%] h-[40%]  bg-[#f7f7f7] -z-10 rounded-[12px]"/>
    </div>
  );
}

export default AboutUs;
