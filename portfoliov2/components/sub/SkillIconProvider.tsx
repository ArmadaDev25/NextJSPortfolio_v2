"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion';
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;

}

const SkillIconProvider = ({src, width, height, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    return(
        <motion.div>
            <Image src={src}
                width={width}
                height={height}
                alt='Skill Logo'

            
            />
            

        </motion.div>
    )
}
export default SkillIconProvider