"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Preloader({ onComplete }) {
  const ctrls = useAnimation();
  const textCtrls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // 0 - 100ms: subtle backdrop fade-in (handled by initial render)
      await new Promise((r) => setTimeout(r, 100));

      // Logo entrance (bounces and settles)
      ctrls.start("logoIn");

      // Wait for the main bounce to happen before starting text
      await new Promise((r) => setTimeout(r, 1000));

      // Text reveal
      textCtrls.start("textIn");

      // Wait for text reveal to finish and hold
      await new Promise((r) => setTimeout(r, 1200));

      // Trigger completion (which will unmount preloader and mount navbar)
      onComplete();
    };

    sequence();
  }, [ctrls, textCtrls, onComplete]);

  const word = "vortechzy";

  const textContainer = {
    hidden: { opacity: 1 },
    textIn: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const textChild = {
    hidden: { opacity: 0, y: 10, clipPath: "inset(0 100% 0 0)" },
    textIn: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 -20% 0 0)",
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]"
      exit={{ opacity: 0, pointerEvents: "none", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div 
        className="flex items-center gap-2 relative z-10"
      >
        {/* Logo Container */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          variants={{
            logoIn: {
              x: 0,
              opacity: 1,
              transition: {
                x: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 0.4, ease: "linear" }
              },
            },
          }}
          animate={ctrls}
          className="relative flex items-center justify-center"
        >
          {/* Bouncing Logo Image */}
          <motion.div
            initial={{ y: -100 }}
            variants={{
              logoIn: {
                y: [-100, 0, -40, 0, -15, 0],
                transition: {
                  duration: 1.2,
                  times: [0, 0.35, 0.6, 0.8, 0.9, 1],
                  ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn"]
                }
              }
            }}
            className="relative w-36 h-36 md:w-48 md:h-48 rounded-full z-10"
          >
            <Image
              src="/logo.png"
              alt="Vortechzy Logo"
              width={192}
              height={192}
              priority
              className="w-full h-full object-contain relative z-10"
            />
          </motion.div>

          {/* Micro-shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            variants={{
              logoIn: {
                opacity: [0, 0.15, 0.05, 0.15, 0.08, 0.15],
                scale: [0.5, 1, 0.7, 1, 0.85, 1],
                transition: {
                  duration: 1.2,
                  times: [0, 0.35, 0.6, 0.8, 0.9, 1],
                  ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn"]
                },
              },
            }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/20 rounded-full blur-[4px] z-0"
          />
        </motion.div>

        {/* Text Reveal */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate={textCtrls}
          className={`flex overflow-hidden pb-2 pt-2 ${cinzel.className}`}
        >
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={textChild}
              className="text-5xl md:text-7xl text-[var(--text-light)] font-semibold tracking-wide"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
