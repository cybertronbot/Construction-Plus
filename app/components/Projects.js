"use client";
import React from "react";
import Image from "next/image";


import { projects } from "../api/Data";
const Projects = () => {
  

  return (
    <div className=" py-10  xl:mx-20 lg:mx-10 mx-5  ">
      <h2
        className="font-Agency font-bold lg:text-[54px] xl:text-[62px] text-[36px] text-center pb-10"
      >
        VIEW OUR LATEST PROJECTS
      </h2>

      <div>
        <div className="">
          <div className="w-[100%] h-[100%] flex cursor-pointer overflow-hidden   ">
            <div>
              <div className="slider">
                <ul className="slide-track">
                  {projects.map((project, index) => (
                    <li className="slide flex flex-col" key={index}>
                      <Image
                        src={project.img}
                        className="full transition-transform duration-1000 hover:translate-z-[20px]"
                        alt="project-one"
                      />
                      <h5 className="font-Agency text-2xl text-[#161616]">
                        {project.title}
                      </h5>
                      <p>{project.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
