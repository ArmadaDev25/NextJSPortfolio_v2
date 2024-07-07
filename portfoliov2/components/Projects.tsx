"use client";
import React from "react";
import { myWebProjects } from "@/public/Data";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
import ShimmerButton from './ui/ShimmerButton'

export const Projects = () =>{
    return(
        <div className="py-10 dark:bg-black-100 bg-white">
            <h1 className="flex justify-center font-bold md:text-3xl sm:text-xl lg:text-4xl text-white mb-4 relative z-50">
                My Projects
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {myWebProjects.map(({name, livelnk, githublnk, png, gitlogo }, index) => (
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6" key={index}>
                        <div>
                            <Image src={png} width={290} height= {290} alt='Page Picture'/>
                            {name}
                            <div>
                            <Image src={gitlogo} width={40} height= {40} alt='Repo Link'/>
                            <ShimmerButton
                                title="Live Site"
                            />
                            </div>
                        </div>
                        
                    </GlareCard>


                )
                
                
                )}

            </div>

        </div>
    )

}