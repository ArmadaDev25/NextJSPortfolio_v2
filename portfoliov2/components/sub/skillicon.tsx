"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion';
import Image from "next/image";

interface Props {
    src: string;

}

const skillicon = ({src} : Props) => {
    return(
        <div>
            <Image src={src}
                width={width}
                height={height}

            
            />
            

        </div>
    )
}
export default skillicon