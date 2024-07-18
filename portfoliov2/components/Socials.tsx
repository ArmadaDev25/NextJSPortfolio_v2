
"use client";
import Image from "next/image";
import { socials } from "@/public/Data";
export const Socials = () =>{
    return(
        <div className="py-10 dark:bg-black-100 bg-white">
            <h1>
                My Socials
            </h1>
            <div>
                {socials.map ((socLnk, index) => (
                    <Image src={socLnk.icon} width={50} height= {40} alt='Social Link'/>
                    

                ))}
            </div>
            
        
        </div>
    )
}