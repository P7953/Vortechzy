"use client";

import React, { useRef, useEffect } from "react";
import { Cinzel, Inter } from "next/font/google";
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

const orbitData = [
  {
    ring: 1,
    size: 280,
    duration: 25,
    category: "Frontend & User Experience",
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" }
    ]
  },
  {
    ring: 2,
    size: 420,
    duration: 35,
    reverse: true,
    category: "Backend & Microservices",
    techs: [
      { name: "Java", Icon: FaJava, color: "#5382a1" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Go", Icon: SiGo, color: "#00ADD8" }
    ]
  },
  {
    ring: 3,
    size: 560,
    duration: 45,
    category: "Database Management",
    techs: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" }
    ]
  },
  {
    ring: 4,
    size: 700,
    duration: 55,
    reverse: true,
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" }
    ]
  }
];

const OrbitNode = ({ tech, category, angle, radius, ringDuration, reverse }) => {
  const x = (Math.cos((angle * Math.PI) / 180) * radius).toFixed(2);
  const y = (Math.sin((angle * Math.PI) / 180) * radius).toFixed(2);

  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
    >
      {/* Node Icon wrapper with reverse animation */}
      <div 
        className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full glass-card hover:bg-cyan-900/40 hover:border-cyan-400 border border-white/10 transition-all duration-300 cursor-pointer shadow-lg node-icon ${reverse ? 'orbit-reverse-cw' : 'orbit-reverse-ccw'}`}
        style={{ animationDuration: `${ringDuration}s` }}
      >
         <tech.Icon 
           className="w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 drop-shadow-md text-[var(--pro)] group-hover:text-cyan-300" 
         />
         
         {/* Tooltip */}
         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 lg:mt-0 lg:left-full lg:translate-x-0 lg:ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 flex flex-col items-center lg:items-start whitespace-nowrap">
            <div className="bg-[#0f1013]/95 backdrop-blur-xl border border-[rgba(0,229,255,0.3)] px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <p className={`${cinzel.className} text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1`}>{category}</p>
              <p className={`${inter.className} text-white font-medium text-xs md:text-sm`}>{tech.name}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        ".tech-node",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.5, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-[120vh] bg-[var(--bg)] overflow-hidden py-24"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[var(--bg)] to-[var(--bg)] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 md:mb-24 px-6 tech-title">
        <h2 className={`${cinzel.className} text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-light)] mb-6`}>
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span>
        </h2>
        <p className={`${inter.className} text-sm md:text-lg text-[var(--pro)] max-w-2xl mx-auto leading-relaxed`}>
          We build distributed systems. From the front-end experience to global infrastructure, our stack is engineered for uncapped scale.
        </p>
      </div>

      {/* Orbit System */}
      <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center scale-75 sm:scale-90 md:scale-100 lg:scale-100 mt-10 md:mt-20">
        
        {/* Central Logo Focal Point */}
        <div className="absolute z-20 w-24 h-24 md:w-32 md:h-32 rounded-full glass-card border border-cyan-500/40 flex items-center justify-center shadow-[0_0_80px_rgba(0,229,255,0.2)] bg-[#0f1013]/60 tech-node">
           <img src="/logo.png" alt="Vortechzy Core" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]" />
        </div>

        {/* Orbit Rings */}
        {orbitData.map((ringInfo, idx) => (
          <div 
            key={idx}
            className={`absolute top-1/2 left-1/2 rounded-full border border-white/5 shadow-[inset_0_0_30px_rgba(255,255,255,0.015)]
              ${ringInfo.reverse ? 'orbit-cw' : 'orbit-ccw'} 
              hover-pause-group pointer-events-none tech-node`}
            style={{
              width: `${ringInfo.size}px`,
              height: `${ringInfo.size}px`,
              transform: `translate(-50%, -50%)`,
              animationDuration: `${ringInfo.duration}s`,
            }}
          >
             {ringInfo.techs.map((tech, i) => {
               const angle = (i * 360) / ringInfo.techs.length;
               return (
                 <OrbitNode 
                   key={tech.name} 
                   tech={tech} 
                   category={ringInfo.category} 
                   angle={angle} 
                   radius={ringInfo.size / 2} 
                   ringDuration={ringInfo.duration}
                   reverse={ringInfo.reverse}
                 />
               );
             })}
          </div>
        ))}
      </div>

      {/* Global styles for the orbit animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-ccw {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orbit-cw {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes reverse-orbit-ccw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes reverse-orbit-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .orbit-ccw { animation: orbit-ccw linear infinite; }
        .orbit-cw { animation: orbit-cw linear infinite; }
        
        .orbit-reverse-ccw { animation: reverse-orbit-ccw linear infinite; }
        .orbit-reverse-cw { animation: reverse-orbit-cw linear infinite; }

        /* The magic pause-on-hover trick */
        .hover-pause-group:hover, .hover-pause-group:hover .node-icon {
          animation-play-state: paused !important;
        }

        .glass-card {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(20, 22, 26, 0.4);
        }
      `}} />
    </section>
  );
}
