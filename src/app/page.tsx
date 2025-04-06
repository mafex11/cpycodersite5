"use client";

import  BlurText  from "@/blocks/TextAnimations/BlurText/BlurText";
import  DecryptedText  from "@/blocks/TextAnimations/DecryptedText/DecryptedText";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Feature";
import { Github } from "lucide-react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollVelocity 
          texts={['I F*cking Hate Cursor']} 
          velocity={100} 
          className="custom-scroll-text mt-4"
        />

      {/* Compact Hero Section */}
      <div className="relative w-full mt-10 flex items-center justify-center p-4">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
      <HeroHighlight >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-black font-bold italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6">
              <DecryptedText
                text="CpyCoder"
                animateOn="view"
                revealDirection="start"
                sequential={true}
                speed={100}
              />
            </div>
            
            <BlurText
              text="One Click Context for Your AI Tools!"
              delay={80}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center px-4 mb-6 sm:mb-8"
            />
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href="https://marketplace.visualstudio.com/items/?itemName=Mafex.cpycoder" target="_blank">
                  <VscVscodeInsiders className="mr-2" />
                  Marketplace
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black">
                <Link href="https://github.com/mafex11/cpycoder2" target="_blank">
                  <Github className="mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </HeroHighlight>
</motion.div>
        
      </div>

      {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            Video here
            </motion.div> */}

      {/* Features Section */}
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <section className="relative z-10  py-12 w-[70rem]">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-8 text-center text-black">Key Features</h2>
          <Features />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-12 px-4 w-full ">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border mb-10 w-[40rem]">
          <h2 className="text-6xl font-bold text-black mb-6 text-center">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
      
          </motion.div>
      

      
    </div>
  );
}