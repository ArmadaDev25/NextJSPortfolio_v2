"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import { Meteors } from "./ui/meteors";

const Skills = () =>{
    return(
      <div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
        </LampContainer>
        <div className="flex justify-center">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full relative max-w-screen-md">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
  
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Languages and Frameworks
            </h1>
  
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>
  
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
          </div>
        </div>
      </div>
    )
}
export default Skills