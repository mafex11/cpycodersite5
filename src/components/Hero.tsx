import React from 'react';
import { motion } from 'framer-motion'; // Optional for animations

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.4,
}) => {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[32rem] max-h-[48rem] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </div>
      )}

      {/* Content */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium border border-white rounded-lg transition-colors duration-300"
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;