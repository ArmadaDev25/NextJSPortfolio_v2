"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion';
import Image from "next/image";
import { Tooltip } from "flowbite-react";

interface Props {
    name: string;
    src: string;
    width: number;
    height: number;
    index: number;

}

const SkillIconProvider = ({name, src, width, height, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.2

    return(
        <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index * animationDelay}}
        >
            <Tooltip content={name}>
            <Image src={src}
                width={width}
                height={height}
                alt='Skill Logo'

            
            />
            </Tooltip>
            

        </motion.div>
    )
}
export default SkillIconProvider