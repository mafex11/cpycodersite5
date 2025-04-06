"use client";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText";
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
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Scroll Velocity Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center pt-8 md:pt-12"
      >
        <ScrollVelocity 
          texts={['I F*cking Hate Cursor']} 
          velocity={100} 
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-black"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center px-4 py-8 md:py-12">
        <HeroHighlight className="w-full max-w-4xl rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-6 md:p-8"
          >
            <div className="text-black font-bold italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-center">
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
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-md">
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
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full px-4 py-12"
      >
        <section className="relative z-10 w-full max-w-6xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center text-black">
            Key Features
          </h2>
          <Features />
        </section>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full px-4 pb-16"
      >
        <section className="relative z-10 w-full max-w-2xl md:max-w-3xl">
          <div className="mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 text-center">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </motion.div>
    </div>
  );
}