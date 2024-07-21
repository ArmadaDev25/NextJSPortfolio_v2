
"use client";
import Image from "next/image";
import { socials } from "@/public/Data";
export const Socials = () =>{
    return(
        <div className="py-10 dark:bg-black-100 bg-white">
            <h1>
                My Socials
            </h1>
            <div className="flex">
                {socials.map ((socLnk, index) => (
                    <div>
                    <Image src={socLnk.icon} width={60} height= {60} alt='Social Link'/>
                    </div>
                    

                ))}
            </div>
            
        
        </div>
    )
}