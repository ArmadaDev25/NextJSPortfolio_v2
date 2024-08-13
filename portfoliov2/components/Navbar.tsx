import React from "react";
import Image from "next/image";

const Navbar = () => {
    return(
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <h1>
                    John K Portfolio
                </h1>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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


        </div>
    )

}

export default Navbar