"use client";
import React from "react";
import { myWebProjects } from "@/public/Data";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";

export const Projects = () =>{
    return(
        <div className="py-10 dark:bg-black-100 bg-white">
            <h1 className="flex justify-center font-bold md:text-3xl sm:text-xl lg:text-4xl text-white mb-4 relative z-50">
                My Projects
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {myWebProjects.map(({name, livelnk, githublnk, png}) => (
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                        <div>
                            <Image src={png} width={100} height= {100} alt='Skill Logo'/>
                            {name}
                        </div>
                    </GlareCard>


                )
                
                
                )}

            </div>

        </div>
    )

}