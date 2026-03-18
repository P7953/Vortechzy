"use client";

import { motion } from "framer-motion";

export default function Hero({ isReady = true }) {
  const headlineLines = [
    "Architected for scale.",
    "Built for impact."
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "120%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--glow)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="max-w-2xl"
        >
          <div className="overflow-hidden mb-8">
            <motion.div variants={lineVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm text-[var(--pro)]">
              <span className="text-[var(--glow)]">✦</span>
              End-to-End Engineering Studio
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-[var(--text-light)] flex flex-col gap-2">
            {headlineLines.map((line, i) => (
              <span key={i} className="overflow-hidden block pb-2">
                <motion.span variants={lineVariants} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          
          <div className="overflow-hidden mb-10">
            <motion.p variants={lineVariants} className="text-lg md:text-xl text-[var(--pro)] font-light leading-relaxed max-w-xl">
              We engineer robust, distributed systems from initial concept to final deployment. Whether you are launching a dynamic web platform or a high-performance app, we deliver solutions designed to grow seamlessly with your business.
            </motion.p>
          </div>
          
          <div className="overflow-hidden mb-12">
            <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-6">
              <button className="px-8 py-4 rounded-lg bg-[var(--cta-1)] text-[var(--text-dark)] font-medium transition-all duration-300 hover:bg-[var(--cta-2)] hover:shadow-[0_0_20px_rgba(221,233,255,0.15)]">
                Start Your Project
              </button>
              <button className="px-8 py-4 rounded-lg text-[var(--text-light)] font-medium transition-colors hover:text-[var(--glow)]">
                Explore Our Services
              </button>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div variants={lineVariants} className="flex items-center gap-4 text-sm text-[var(--pro)] opacity-80">
              <div className="h-[1px] w-12 bg-[var(--pro)] opacity-30" />
              <p>Expertise in High-Availability Web & Mobile Ecosystems.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 3D Element Placeholder / Abstract Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-[500px] w-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 glass-card rounded-2xl flex items-center justify-center overflow-hidden"
               style={{ transform: "rotateY(-10deg) rotateX(5deg)" }}>
            {/* Abstract geometric shapes representing data nodes */}
            <div className="absolute w-64 h-64 border border-[var(--pro)] opacity-20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-48 h-48 border border-[var(--glow)] opacity-30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-32 h-32 bg-gradient-to-br from-[var(--pro)] to-transparent opacity-10 rounded-full blur-xl" />
            
            {/* Mock Interface Elements */}
            <div className="absolute top-8 left-8 right-8 h-12 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 h-32 bg-white/5 rounded-lg border border-white/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
