"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn,slideIn } from "../api/Motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center w-full "
        style={{
          backgroundImage: `url("/background.png")`,
        }}
      >
        <div className="px-5 xl:px-20 lg:px-10">
          <motion.h4
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="font-Agency relative v flex items-center sm:pl-20 pl-14 text-base font-bold text-primary"
          >
            C O N S T R U C T I O N B U S I N E S S
          </motion.h4>
          <motion.h2
            className="xl:text-6xl lg:text-[54px] text-5xl xl:leading-[72px] lg:leading-[64px] font-Agency -translate-x-[2px] font-bold text-white"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            Crafting Excellence, One <br className="sm:flex hidden" />
            Project at a Time. Your <br className="sm:flex hidden" />
            Trusted Construction Partner.
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
