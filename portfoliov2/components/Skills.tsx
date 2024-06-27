"use client";
import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import SkillIconProvider from "./sub/SkillIconProvider";
import { skills_Icons } from "@/public/Data";

const Skills = () =>{
  
    
  return(
      <div>
        <div className="flex justify-center dark:bg-black-100 bg-white">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full relative max-w-screen-md">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
  
            <h1 className="font-bold md:text-3xl lg:text-4xl text-white mb-4 relative z-50">
              Languages and Frameworks
            </h1>
  
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
              {skills_Icons.map((image, index) => (
                <SkillIconProvider 
                key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}

            </div>
            
  
            
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
          </div>
        </div>
      </div>
  )
}
export default Skills