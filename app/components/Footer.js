import React from "react";
import footerlogo from "@/public/footerlogo.png";
import { footerLinks, socialMedia } from "../api/Data";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#161616] ">

   
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-start md:flex-row flex-col w-full  px-20 pt-16 pr-[300px]">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Link href="/">
            <Image src={footerlogo} width={204} height={44} alt="logo" />
          </Link>

          <p className="font-poppins font-medium  text-white text-sm mt-4 max-w-[410px]">
            <span className="text-primary">Email Address: </span>
            info@contractingplus.com
          </p>
          <p className="font-poppins font-medium  text-white text-sm mt-3 max-w-[410px]">
            <span>Telephone: </span>+234 905 6161 616
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap ">
          {footerLinks.map((item,index) => (
            <div className="flex flex-col  min-w-[150px]" key={index}>
              <h4 className="font-poppins font-medium text-[14px] uppercase text-primary">
                {item.title}
              </h4>
              <ul className="mt-4">
                {item.links.map((item,index) => {
                  return (
                    <li className="font-poppins font-medium text-[16px] text-white max-w-[310px] " key={index}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <div className="flex gap-3 justify-end px-32">
          {socialMedia.map((item)=>{
            return(
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full  mb-8 border border-[#ffff]">
                <Image width={16} height={16} src={item.icon} alt="social media" />
              </div>
            )
          })}
        </div>
      <div className="pt-6 border-t-[1px] border-t-[#3F3E45] mx-20 ">
        <p className="font-poppins text-sm leading-[27px] text-white text-center">Construction Plus Service Limited © 2023 All rights reserved.</p>
       
      </div>
    </div>
  );
}

export default Footer;
