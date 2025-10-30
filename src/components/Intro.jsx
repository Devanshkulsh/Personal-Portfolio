import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_CONFIG = {
  GREETING_DURATION: 200,
  FINAL_DELAY: 1200,
  EXIT_DURATION: 1.2,
  TEXT_ANIMATION_DURATION: 0.35,
};

const GREETINGS = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Hallo",
  "Salam",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "नमस्कार",
  "Let's Begin...",
];

const Intro = ({ onFinish }) => {
  const greetings = useMemo(() => GREETINGS, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [particles, setParticles] = useState([]);

  // Floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  // Greeting transitions
  useEffect(() => {
    let timeoutId;
    if (currentIndex < greetings.length - 1) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, ANIMATION_CONFIG.GREETING_DURATION);
    } else {
      timeoutId = setTimeout(() => {
        // Start fade-out instead of removing immediately
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          onFinish?.();
        }, ANIMATION_CONFIG.EXIT_DURATION * 1000);
      }, ANIMATION_CONFIG.FINAL_DELAY);
    }
    return () => clearTimeout(timeoutId);
  }, [currentIndex, greetings.length, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-[#000000] via-[#001a0d] to-[#003320] z-9999 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isFadingOut ? 0 : 1,
            scale: isFadingOut ? 1.05 : 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: ANIMATION_CONFIG.EXIT_DURATION,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: ANIMATION_CONFIG.EXIT_DURATION,
            ease: "easeInOut",
          }}
          style={{
            // Ensure the background matches your portfolio's background
            background:
              "linear-linear(135deg, #000000 0%, #001a0d 40%, #003320 100%)",
          }}
        >
          {/* BACKGROUND EFFECTS */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Glows */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#00FF88] rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#00CC6A] rounded-full blur-[100px] opacity-15"
              animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute bg-[#00FF88] rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-linear(#00FF88 1px, transparent 1px),
                    linear-linear(90deg, #00FF88 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 1.1 }}
                transition={{
                  duration: ANIMATION_CONFIG.TEXT_ANIMATION_DURATION,
                  ease: "easeOut",
                }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-bold bg-linear-to-r from-[#00FF88] via-[#00CC6A] to-[#00FF88] bg-clip-text text-transparent mb-6"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  {greetings[currentIndex]}
                </motion.h1>

                {/* Progress Dots */}
                <div className="flex justify-center gap-1 mb-6">
                  {greetings.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-1 rounded-full ${
                        i <= currentIndex ? "bg-[#00FF88]" : "bg-gray-700"
                      }`}
                      animate={{
                        width: i === currentIndex ? 24 : 8,
                        scale: i === currentIndex ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>

                {/* Final Line */}
                {currentIndex === greetings.length - 1 && (
                  <>
                    <motion.p
                      className="text-gray-400 text-lg md:text-xl mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Welcome to my portfolio
                    </motion.p>
                    <motion.div
                      className="mt-8 mx-auto max-w-md bg-gray-800 rounded-full h-1 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="h-full bg-linear-to-r from-[#00FF88] to-[#00CC6A] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: ANIMATION_CONFIG.FINAL_DELAY / 1000,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#00FF88]/40" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#00FF88]/40" />
          <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#00FF88]/40" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#00FF88]/40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
