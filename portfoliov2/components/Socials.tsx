
"use client";
import Image from "next/image";
import { socials } from "@/public/Data";
import { Tooltip } from "flowbite-react";
export const Socials = () =>{
    return(
        <div className="pt-40 pb-60 dark:bg-black-100 bg-white" >
            <div className="flex md:flex-row flex-col justify-between items-center px-20 mt-40 w-full z-[20]">
            <div className="flex flex-col items-center justify-around ">
                <h1 className="font-bold md:text-3xl sm:text-xl lg:text-4xl text-white mb-4 relative z-50" id="socials" >
                    My Socials
                </h1>
                <h1>
                    Click the Icons To View My Socials
                </h1>
                
                <div className="flex gap-10 py-5">
                    {socials.map ((socLnk, index) => (
                        <div>
                        <Image src={socLnk.icon} width={60} height= {60} alt='Social Link'/>
                        </div>
                        

                    ))}
                
                </div>
            </div>
            <Image src="/socialmediaimage.png" width={460} height= {460} alt='Social Link'/>
            </div>

            
        
        </div>
    )
}