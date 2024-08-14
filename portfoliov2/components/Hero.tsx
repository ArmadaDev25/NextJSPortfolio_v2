import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LitUpBordersButton from './ui/LitUpBordersButton'
import ShimmerButton from './ui/ShimmerButton'

const Hero = () => {
    return(
        <div className="pb-20 pt-36">
        <div className="pb-20">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            

            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Expressing Creativity and Ingenuity Through Programming And Development'
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi Im John and I am a Software Engineer based in the United States.

                    </p>
                    <div>
                    <a className='px-3' href='#projects'>
                        <LitUpBordersButton
                           title="My Work"
                        />
                    </a>
                    <a className='px-3' href='https://github.com/ArmadaDev25'>
                        <ShimmerButton
                           title="My Github"
                        />
                    </a>
                    </div>

                </div>

            </div>
            
        
        </div>
        </div>
    )

}

export default Hero