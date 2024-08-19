import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Socials } from "@/components/Socials";

export default function Home() {
  return (
    <div>
    
    <main className= "relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

      <div className="max-w-7xl w-full">
        <Hero />
        

      </div>
      
    
    
    
    
    </main>
    <Skills />
    <Projects />
    
    <Navbar />
    <Socials/>
    </div>
  );
}
