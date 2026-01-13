import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_CONFIG = {
  GREETING_DURATION: 180,
  EXIT_DURATION: 1.1,
  TEXT_ANIMATION_DURATION: 0.4,
};

const GREETINGS = [
  "Hello", "नमस्ते", "Hola", "Bonjour",
  "こんにちは", "안녕하세요", "你好", "Hallo", "Salam",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "नमस्ते", "Let's Go..."
];

const IntroAnimation = ({ onFinish }) => {
  const greetings = useMemo(() => GREETINGS, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (currentIndex < greetings.length - 1) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, ANIMATION_CONFIG.GREETING_DURATION);
    } else {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        onFinish();
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [currentIndex, greetings.length, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-100 overflow-hidden bg-[#030303] select-none touch-none"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: ANIMATION_CONFIG.EXIT_DURATION,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Background Textures & Glows */}
          <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, #001a0d 0%, #000000 100%)" }} />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-[#00FF88] rounded-full blur-[80px] md:blur-[160px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full px-4">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
              transition={{ 
                duration: ANIMATION_CONFIG.TEXT_ANIMATION_DURATION,
                ease: "easeOut"
              }}
              // Added padding-bottom to prevent descender clipping (like in 'g')
              className="text-center pb-4 md:pb-6"
            >
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight lowercase leading-[1.2]">
                <span
                  className={
                    currentIndex === greetings.length - 1
                      ? "bg-linear-to-r from-[#00FF88] via-white to-[#00FF88] bg-clip-text text-transparent bg-size-[200%_auto] animate-shimmer inline-block py-2"
                      : "text-[#00FF88] drop-shadow-[0_0_15px_rgba(0,255,136,0.3)] inline-block py-2"
                  }
                >
                  {greetings[currentIndex]}
                </span>
              </h1>
            </motion.div>
            
            {/* Progress Indicator */}
            <div className="absolute -bottom-16 md:-bottom-24 flex gap-1.5 max-w-[80vw] overflow-hidden">
              {greetings.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-0.5 transition-all duration-300 rounded-full ${
                    i === currentIndex 
                      ? 'w-6 sm:w-10 bg-[#00FF88]' 
                      : 'w-1 sm:w-2 bg-white/10'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Bottom Liquid Border */}
          <svg 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute -bottom-px left-0 w-full fill-[#030303] pointer-events-none h-[12vh] md:h-[150px]"
          >
            <path d="M0,160 C480,320 960,320 1440,160 L1440,320 L0,320 Z" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;