import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import send from "@/public/send.png";
import { Button } from "./buttons/Button";
import { navLinks } from "../api/Data";
const Navbar = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center py-5 bg-white px-20">
        <Link href="/">
          <Image src={logo} width={204} height={44} alt="logo" />
        </Link>

        <nav>
          <ul className="flex text-[18px] gap-8 font-bold font-Agency  ">
            {navLinks.map((navlink, index) => {
              return <li key={index}>{navlink.title}</li>;
            })}
          </ul>
        </nav>
        <div className="pr-12">
          <Button variant="primary" imgSrc={send} imgAlt="send">
            Get A Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
