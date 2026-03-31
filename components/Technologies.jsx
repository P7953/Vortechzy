"use client";

import React, { useRef, useEffect } from "react";
import { Cinzel, Inter } from "next/font/google";
import Image from "next/image";
import { 
  SiReact, SiTypescript, SiNextdotjs, 
  SiSpringboot, SiNodedotjs, SiGo, 
  SiMongodb, SiMysql, SiRedis, 
  SiDocker, SiGithubactions
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const techCategories = [
  {
    category: "Frontend & User Experience",
    description: "Lightning-fast, reactive interfaces.",
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" }
    ]
  },
  {
    category: "Backend & Microservices",
    description: "Robust, highly-available core logic.",
    techs: [
      { name: "Java", Icon: FaJava, color: "#5382a1" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Go", Icon: SiGo, color: "#00ADD8" }
    ]
  },
  {
    category: "Database Management",
    description: "Scalable, secure, and fast data storage.",
    techs: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Automated pipelines and global hosting.",
    techs: [
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" }
    ]
  }
];

export default function Technologies() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
      
      tl.fromTo(
        ".tech-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        ".tech-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section 
      id="technologies"
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[var(--bg)] overflow-hidden py-24 px-6"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/10 via-[var(--bg)] to-[var(--bg)] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 md:mb-24 tech-title max-w-3xl">
        <h2 className={`${cinzel.className} text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-light)] mb-6`}>
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span>
        </h2>
        <p className={`${inter.className} text-base md:text-lg text-[var(--pro)] leading-relaxed`}>
          We build distributed systems. From the front-end experience to global infrastructure, our stack is engineered for uncapped scale and absolute reliability.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl">
        {techCategories.map((cat, idx) => (
          <div 
            key={idx}
            className="tech-card group relative flex flex-col p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:border-cyan-500/30 overflow-hidden"
          >
             {/* Subtle Glow on hover */}
             <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transition-opacity duration-500 rounded-3xl pointer-events-none" />
             
             <h3 className={`${cinzel.className} text-xl md:text-2xl font-bold text-[var(--text-light)] mb-2`}>{cat.category}</h3>
             <p className={`${inter.className} text-sm text-[var(--pro)] mb-8`}>{cat.description}</p>
             
             <div className="mt-auto flex flex-wrap gap-4">
               {cat.techs.map((tech) => (
                 <div key={tech.name} className="flex flex-col items-center gap-2 group/tech cursor-pointer">
                   <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/tech:border-cyan-500/50 group-hover/tech:-translate-y-1 shadow-lg">
                     <tech.Icon 
                       className="w-6 h-6 text-white/50 transition-all duration-300 drop-shadow-none group-hover/tech:drop-shadow-[0_0_8px_currentColor]"
                       style={{ color: "var(--pro)" }}
                       onMouseEnter={(e) => e.currentTarget.style.color = tech.color}
                       onMouseLeave={(e) => e.currentTarget.style.color = "var(--pro)"}
                     />
                   </div>
                   <span className={`${inter.className} text-[10px] md:text-xs font-medium text-white/40 transition-colors duration-300 group-hover/tech:text-white/80`}>{tech.name}</span>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
