"use client";
import React from "react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../api/Data";
const Projects = () => {
  const [width, setWidth] = useState(0);
  const container = useRef();

  useEffect(() => {
    setWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, []);

  return (
    <div className="sm:p-20 px:5 "id='projects' >
      <h2 className="font-Agency font-bold sm:text-[62px] text-[36px] text-center py-5">
        VIEW OUR LATEST PROJECTS
      </h2>
      
      <div>
        <motion.div className="px-5 sm:px-0">
          <motion.div
            ref={container}
            className="w-[100%] flex lg:justify-center lg:items-center cursor-grab overflow-hidden   "
          >
            <motion.div
              className="inline-flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
            >
              <ul className="flex gap-10">
                {projects.map((project, index) => (
                  <li
                    className="w-[294px]"
                    key={index}
                   
                  >
                   
                   <Image
                        src={project.img}
                        alt="project-one"
                        width={294}
                        height={397}
                        className="pointer-events-none"
                      />
                      <h5 className="font-Agency text-2xl text-[#161616] pb-3">
                        {project.title}
                      </h5>
                     
                   
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;