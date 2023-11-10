"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn} from "../api/Motion";
import { businesslines } from "../api/Data";

const Business = () => {
  const elementStyles = [
    {
      borderLeft: "1px solid #52525b00",
    },
    {
      borderLeft: "1px solid #E4E4E7",
    },
    {
      borderLeft: "1px solid #E4E4E7",
    },
  ];
  return (
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    

    className="bg-[#F7F7F7] sm:py-20 sm:px-20 px-5">
      <motion.h2
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="font-Agency font-bold sm:text-[62px] text-[36px] text-center"
      >
        BUSINESS LINE
      </motion.h2>
      <p className="text-center sm:text-base text-sm text-[#52525B] sm:px-[380px]  font-poppins">
        At Contracting Plus, we pride ourselves on our profound capacity to not
        only meet but consistently surpass the expectations of our clients,
        regardless of the scope or complexity of the project.
      </p>
      <div>
        <ul className="flex justify-between sm:flex-row flex-col mt-20">
          {businesslines.map((businessline, index) => {
            const listItemStyle = elementStyles[index] || {};

            return (
              <li
                style={listItemStyle}
                key={index}
                className="sm:w-[30%] w-[100%] h-[20%] sm:px-[40px] py-[10px]"
              >
                <Image
                  src={businessline.img}
                  width={62}
                  height={62}
                  alt="construction"
                />
                <h3 className="font-Agency text-2xl font-bold">
                  {businessline.title}
                </h3>
                <p className="font-poppins text-[#52525B] mt-3 ">
                  {businessline.content}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Business;
