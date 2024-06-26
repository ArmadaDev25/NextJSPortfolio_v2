"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion';
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;

}

const skillicon = ({src, width, height} : Props) => {
    return(
        <div>
            <Image src={src}
                width={width}
                height={height}
                alt='Skill Logo'

            
            />
            

        </div>
    )
}
export default skillicon