import React from "react";
import Image from "next/image";

const Navbar = () => {
    return(
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <h1>
                    John K Portfolio
                </h1>
                <div className="flex flex-row">
                <h1>
                    Skills
                </h1>
                <h1>
                    Projects
                </h1>
                <h1>
                    Socials
                </h1>
                </div>



            </div>


        </div>
    )

}

export default Navbar