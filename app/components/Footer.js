import React from "react";
import footerlogo from "@/public/footerlogo.png";
import { footerLinks, socialMedia } from "../api/Data";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#161616] ">
      <div className="flex justify-center items-center flex-col ">
        <div className="flex justify-center items-start md:flex-row flex-col w-full  sm:px-20 px-5 pt-16 sm:pr-[300px]">
          <div className="flex-1 flex flex-col justify-start mr-10">
            <Link href="/">
              <Image src={footerlogo} width={204} height={44} alt="logo" />
            </Link>

            <p className="font-poppins font-medium  text-white text-sm mt-4 sm:max-w-[410px]">
              <span className="text-primary">Email Address: </span>
              info@contractingplus.com
            </p>
            <p className="font-poppins font-medium  text-white text-sm mt-3 sm:max-w-[410px] w-[100%]">
              <span>Telephone: </span>+234 905 6161 616
            </p>
          </div>
          <ul className="flex-[1.5] w-full flex flex-row justify-between flex-wrap ">
            {footerLinks.map((footerLink, index) => (
              <li className="flex flex-col  sm:min-w-[150px]" key={index}>
                <h4 className="font-poppins font-medium text-[14px] uppercase text-primary">
                  {footerLink.title}
                </h4>
                <ul className="mt-4">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        className="font-poppins font-medium text-[16px] text-white sm:max-w-[310px] "
                        key={index}
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex gap-3 justify-end px-5 sm:px-32">
        {socialMedia.map((social, index) => {
          return (
            <li
            key={index} // Add a unique "key" prop
            className="w-[50px] h-[50px] flex justify-center items-center rounded-full  mb-8 border border-[#ffff]"
          >
              <Image
                width={16}
                height={16}
                src={social.icon}
                alt="social media"
              />
            </li>
          );
        })}
      </ul>
      <div className="pt-6 border-t-[1px] border-t-[#3F3E45] mx-5 sm:mx-20 ">
        <p className="font-poppins text-sm leading-[27px] text-white text-center px-5">
          Construction Plus Service Limited © 2023 All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
