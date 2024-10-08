"use client";
import React from "react";
import { myWebProjects } from "@/public/Data";
import Image from "next/image";
import ShimmerButton from './ui/ShimmerButton'
import { Tooltip } from "flowbite-react";

export const Projects = () =>{
    return(
        <div className="pt-20 dark:bg-black-100 bg-white" id="projects">
        <div className="py-20" >
            <h1 className="flex justify-center font-bold md:text-3xl sm:text-xl lg:text-4xl text-white mb-4 relative z-50">
                My Projects
            </h1>
            <div className=" py-10 flex flex-wrap gap-10  justify-center">
                {myWebProjects.map(({name, livelnk, des, githublnk, png, gitlogo }, index) => (
                    
                    <div className="" key={index}>
                        <div className=" w-full relative max-w-xs">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div>
                            <h1 className="md:text-2xl text-base font-bold py-2">{name}</h1>
                            <Image src={png} width={290} height= {290} alt='Page Picture'/>
                            
                            <p className=" md:text-base text-sm py-2">
                                {des}

                            </p>
                            <div className="flex flex-wrap gap-3 justify-end items-center py-2">
                            <Tooltip content="Project Source Code">
                                <a href={githublnk}>
                                <Image src={gitlogo} width={50} height= {40} alt='Repo Link'/>
                                </a>
                                

                            </Tooltip>
                            <a href={livelnk}>
                            <ShimmerButton
                                title="Live Site"
                            />
                            </a>
                            </div>
                            </div> 
                        </div>
                        </div>
                    </div>
            
                    
                    


                )
                
                
                )}

            </div>

        </div>
        </div>
    )

}