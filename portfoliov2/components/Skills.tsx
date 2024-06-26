"use client";
import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import skillicon from './sub/skillicon';
import { skills_Icons } from "@/public/Data";

const Skills = () =>{
  
    
  return(
      <div>
        <div className="flex justify-center dark:bg-black-100 bg-white">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full relative max-w-screen-md">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
  
            <h1 className="font-bold md:text-3xl lg:text-4xl text-white mb-4 relative z-50">
              Languages and Frameworks
            </h1>
  
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>
            <div>

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