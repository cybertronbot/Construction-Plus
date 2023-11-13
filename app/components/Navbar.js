"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import send from "@/public/send.png";

import { Button } from "./buttons/Button";
import { navLinks } from "../api/Data";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="w-full flex justify-between items-center xl:py-5 py-2 bg-white xl:px-20 lg:px-10 px-5">
        <Link href="/" className="">
          <div className="">
            <Image src={logo} alt="logo" className="xl:w-[213px] lg:w-[150px] w-[120px] h-[50px] object-contain lg:h-[67px]" />
          </div>
        </Link>
     
        <nav className="sm:flex hidden">
          <ul className="flex xl:text-[18px] lg:text-base gap-8 font-bold font-Agency  ">
            {navLinks.map((navlink, index) => {
              return <li key={index}>{navlink.title}</li>;
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" imgSrc={send} imgAlt="send">
            Get A Quote
          </Button>
      
            <div className="sm:hidden flex" onClick={() => setToggle(!toggle)}>
              {toggle ? <IoClose className="text-white text-[25px]"/> : <RiMenu3Fill className="text-white text-[25px]"/>}
            </div>
      
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
          >
            <ul className="list-none flex flex-col  justify-end items-center flex-1">
              {navLinks.map((navlink) => {
                return (
                  <li className="text-[16px] text-black mb-4" key={navlink.id}>
                    {navlink.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
 
      </div>
    </div>
  );
};
export default Navbar;
