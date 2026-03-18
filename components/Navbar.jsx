"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // Disable layoutId after the initial handoff animation finishes
    // This prevents layout projection glitches when scrolling
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Add glass background when scrolled down a bit
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest < 0) return; // Ignore bounce at the top

    // Hide navbar on scroll down, show on scroll up (with threshold to fix glitch)
    if (latest > 150 && latest > previous + 10) {
      setHidden(true);
    } else if (latest < previous - 10 || latest <= 150) {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-4 z-40 flex items-center justify-between px-6 py-2 transition-all duration-500 md:px-8 rounded-2xl left-1/2 -translate-x-1/2 w-[95%] md:w-[75%] 
        bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]
      `}
    >
      {/* Logo */}
      <motion.div 
        layoutId={isTransitioning ? "brand-container" : undefined}
        className="flex items-center gap-1.5 cursor-pointer"
      >
        <motion.div 
          layoutId={isTransitioning ? "brand-icon" : undefined}
          className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full flex-shrink-0"
        >
          <img
            src="/logo.png"
            alt="Vortechzy Logo"
            className="absolute inset-0 w-full h-full object-contain relative z-10 scale-[1.35]"
          />
        </motion.div>
        
        <motion.div 
          layoutId={isTransitioning ? "brand-text" : undefined}
          className={`flex overflow-hidden ${cinzel.className}`}
        >
          <span className="text-xl md:text-2xl text-gray-900 font-semibold tracking-wide">
            vortechzy
          </span>
        </motion.div>
      </motion.div>

      {/* Links */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600"
      >
        <a href="#" className="hover:text-gray-900 transition-colors">Products</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Solutions</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Resources</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="hidden md:flex items-center gap-4"
      >
        <button className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium transition-all hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Get Started
        </button>
      </motion.div>
    </motion.nav>
  );
}
