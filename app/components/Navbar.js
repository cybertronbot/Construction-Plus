"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import send from "@/public/send.png";

import { Button } from "./buttons/Button";
import { navLinks } from "../api/Data";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="w-full flex justify-between items-center py-5 bg-white sm:px-20 px-5">
        <Link href="/" className="sm:flex hidden">
          <div className="relative w-[213px]  h-[67px]">
            <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
          </div>
        </Link>
        <div className="w-[50px] h-[40px]" />
        <nav className="sm:flex hidden">
          <ul className="flex text-[18px] gap-8 font-bold font-Agency  ">
            {navLinks.map((navlink, index) => {
              return <li key={index}>{navlink.title}</li>;
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="primary" imgSrc={send} imgAlt="send">
            Get A Quote
          </Button>
          <div
            className="sm:hidden flex"
            onClick={() => setToggle(!toggle)}
            
          >
            {toggle ? <IoClose /> : <RiMenu3Fill />}
            
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
