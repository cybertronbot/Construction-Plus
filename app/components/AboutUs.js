"use client";
import React from "react";
import about from "@/public/about.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer,textVariant,slideIn } from "../api/Motion";

function AboutUs() {
  return (
    <div className="relative w-[100%]">
              <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >

      <div className=" flex lg:flex-row flex-col-reverse xl:gap-20 gap-10 py-12 sm:py-32 px-5 xl:px-20 lg:px-10 ">
        <div className="flex flex-1">
          <Image src={about} className="lg:w-[400px] xl:w-[565px] xl:h-[524px]  object-contain"  alt="about-us" />
        </div>
        <div className=" flex-1 flex flex-col  ">
          <h3 className="font-Agency sm:text-lg text-base font-bold uppercase relative a b ">
            A B O U T U S
          </h3>
          <motion.h2 className="font-Agency lg:text-[40px] xl:text-[52px] text-[30px]  font-bold xl:leading-[62px] leading-[42px] "
             variants={slideIn("right", "tween", 0.1, 1)}
          >
            At Contracting Plus, we are a forward-thinking force in Sub-Saharan
            Africa, dedicated to unlocking boundless possibilities.
          </motion.h2>
          <motion.p 
                      variants={textVariant(1.1)}

          className="font-poppins xl:text-base text-sm text-[#52525B] w-[100%] xl:w-[631px] pt-6">
            Our expertise spans development, design, and construction, and our
            passion lies in delivering tailored, top-tier solutions that shape a
            collective future of excellence. With a track record of turning
            ideas into reality, we are your trusted partner in the journey of
            progress.
          </motion.p>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-10"></div>
        </div>
      </div>
      <div className="absolute right-12 bottom-[10%] w-[75%] h-[40%]  bg-[#f7f7f7] -z-10 rounded-[12px]"/>
      </motion.div>
    </div>
  );
}

export default AboutUs;
