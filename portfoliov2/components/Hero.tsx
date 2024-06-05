import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
    return(
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
            </div>
        
        </div>
    )

}

export default Hero