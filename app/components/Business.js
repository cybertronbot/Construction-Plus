import React from "react";
import Image from "next/image";
import construction from "@/public/construction 1.png";
import property from "@/public/property 1.png";
import infrastructure from "@/public/infrastructure 1.png";
import { businesslines } from "../api/Data";

const Business = () => {
  const elementStyles = [
    { width: "30%", height: "20%", padding: "10px 40px", },
    {
      width: "30%",
      height: "20%",
      padding: "10px 40px",
      borderLeft: "1px solid #E4E4E7",
    },
    {
      width: "30%",
      height: "20%",
      padding: "10px 40px",
      borderLeft: "1px solid #E4E4E7",
    },
  ];
  return (
    <div className="bg-[#F7F7F7] py-20 px-20">
      <h2 className="font-Agency font-bold text-[62px] text-center">
        BUSINESS LINE
      </h2>
      <p className="text-center text-[#52525B] px-[380px]  font-poppins">
        At Contracting Plus, we pride ourselves on our profound capacity to not
        only meet but consistently surpass the expectations of our clients,
        regardless of the scope or complexity of the project.
      </p>
      <div>
        <ul className="flex justify-between  mt-20">
          {businesslines.map((businessline, index) => {
            const listItemStyle = elementStyles[index] || {};

            return (
              <li
                style={listItemStyle}
                key={index}
                
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
    </div>
  );
};

export default Business;
