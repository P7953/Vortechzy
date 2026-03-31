"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const T = {
  bg: "#0F1013",
  bg2: "#0c0e12",
  text: "#EFF1F3",
  textMuted: "rgba(239,241,243,0.48)",
  textDim: "rgba(239,241,243,0.20)",
  steel: "#9FB0C8",
  cta1: "#D9DDE2",
  cta2: "#A6B1C6",
  glow: "#DDE9FF",
  border: "rgba(255,255,255,0.055)",
  borderHov: "rgba(221,233,255,0.16)",
  card: "rgba(255,255,255,0.022)",
  cardHov: "rgba(255,255,255,0.042)",
};

/* ─── Projects Data ─────────────────────────────────────── */
const PROJECTS = [
  {
    num: "01",
    title: "Digiability Community App",
    description:
      "A community platform built for people with disabilities, enabling resource sharing, peer support, and accessible event discovery. Designed with inclusive UX principles at its core.",
    category: "Community Platform",
    emoji: "♿",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    status: "in-progress",
    liveUrl: null,
    githubUrl: "https://github.com/vortechzy",
    accent: T.glow,
  },
  {
    num: "02",
    title: "Relief Foundation Website",
    description:
      "A full-featured NGO website for a charitable foundation, showcasing donation campaigns, impact stories, volunteer sign-up, and an admin dashboard for managing relief operations.",
    category: "NGO / Non-profit",
    emoji: "🤝",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    status: "deployed",
    liveUrl: "https://relieffoundation.org",
    githubUrl: null,
    accent: T.cta2,
  },
  {
    num: "03",
    title: "Saptrishi Foundation Website",
    description:
      "Corporate branding website for the Saptrishi Foundation, featuring project portfolios, team profiles, blog, and donation integration — built for speed and modern aesthetics.",
    category: "Foundation / Branding",
    emoji: "🌿",
    stack: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
    status: "deployed",
    liveUrl: "https://saptrishifoundation.org",
    githubUrl: null,
    accent: T.steel,
  },
  {
    num: "04",
    title: "CodeEra — Nextgen Coding Platform",
    description:
      "An interactive ed-tech platform for learning programming. Features guided learning paths, live code execution, challenges, leaderboards, and AI-powered code review.",
    category: "EdTech / SaaS",
    emoji: "💡",
    stack: ["Next.js", "TypeScript", "Python", "OpenAI API", "PostgreSQL"],
    status: "in-progress",
    liveUrl: null,
    githubUrl: "https://github.com/vortechzy/codeera",
    accent: T.glow,
  },
  {
    num: "05",
    title: "Sportify",
    description:
      "A sports management and discovery app — connecting athletes, coaches, and teams. Includes booking, scheduling, live match tracking, and player statistics dashboards.",
    category: "Sports Tech",
    emoji: "⚽",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mapbox"],
    status: "in-progress",
    liveUrl: null,
    githubUrl: "https://github.com/vortechzy/sportify",
    accent: T.cta2,
  },
];

/* ─── Status Badge ──────────────────────────────────────── */
function StatusBadge({ status }) {
  const isLive = status === "deployed";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: "4px 12px",
      background: isLive ? "rgba(74,222,128,0.08)" : "rgba(251,191,36,0.08)",
      border: `1px solid ${isLive ? "rgba(74,222,128,0.22)" : "rgba(251,191,36,0.22)"}`,
      borderRadius: "100px",
    }}>
      <span style={{
        width: "5px", height: "5px", borderRadius: "50%",
        background: isLive ? "#4ade80" : "#fbbf24",
        boxShadow: isLive ? "0 0 6px #4ade80" : "0 0 6px #fbbf24",
        animation: "statusPulse 2.4s ease infinite",
        display: "block",
      }} />
      <span style={{
        fontFamily: inter.style.fontFamily,
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: isLive ? "#4ade80" : "#fbbf24",
      }}>
        {isLive ? "Deployed" : "In Progress"}
      </span>
    </div>
  );
}

/* ─── Tech Stack Pill ───────────────────────────────────── */
function TechPill({ name, hov }) {
  return (
    <span style={{
      fontFamily: inter.style.fontFamily,
      fontSize: "11px", fontWeight: 500,
      letterSpacing: "0.04em",
      color: hov ? T.cta1 : T.steel,
      background: hov ? "rgba(221,233,255,0.06)" : "rgba(159,176,200,0.05)",
      border: `1px solid ${hov ? "rgba(221,233,255,0.14)" : T.border}`,
      padding: "3px 10px", borderRadius: "100px",
      transition: "all 0.3s",
      whiteSpace: "nowrap",
    }}>
      {name}
    </span>
  );
}

/* ─── Link Button ───────────────────────────────────────── */
function LinkButton({ href, icon, label, hov }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        fontFamily: inter.style.fontFamily,
        fontSize: "12px", fontWeight: 600,
        letterSpacing: "0.05em",
        color: hov ? T.cta1 : T.textMuted,
        textDecoration: "none",
        padding: "7px 14px",
        border: `1px solid ${hov ? T.borderHov : T.border}`,
        borderRadius: "100px",
        background: hov ? "rgba(221,233,255,0.04)" : "transparent",
        transition: "all 0.25s",
      }}
    >
      {icon}
      {label}
    </a>
  );
}

/* ─── Single Project Card ───────────────────────────────── */
function ProjectCard({ project, index, isLarge }) {
  const [hov, setHov] = useState(false);
  const cardRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  /* ── 3-D magnetic tilt ── */
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 130, damping: 20 });
  const sRotY = useSpring(rotY, { stiffness: 130, damping: 20 });

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotX.set(-dy * 8);
    rotY.set(dx * 8);
  };
  const onMouseLeave = () => {
    setHov(false);
    rotX.set(0);
    rotY.set(0);
  };

  return (
    /* scroll-in wrapper */
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.78, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: isLarge ? "span 2" : "span 1", perspective: "1000px" }}
    >
      {/* 3-D tilt card */}
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: sRotX,
          rotateY: sRotY,
          transformStyle: "preserve-3d",
          background: hov ? T.cardHov : T.card,
          border: `1px solid ${hov ? T.borderHov : T.border}`,
          borderRadius: "24px",
          padding: "40px",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.35s, border-color 0.35s",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          height: "100%",
        }}
      >
        {/* Glow orb */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "300px", height: "300px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(221,233,255,${hov ? 0.055 : 0.018}) 0%, transparent 65%)`,
          transform: "translate(30%, -30%)",
          pointerEvents: "none",
          transition: "opacity 0.5s",
        }} />

        {/* Top row: num + status + emoji */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: T.textDim,
            }}>{project.num}</span>
            <span style={{ width: "24px", height: "1px", background: T.border }} />
            <span style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "10.5px", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: hov ? T.cta2 : T.textDim,
              transition: "color 0.3s",
            }}>{project.category}</span>
          </div>
          <StatusBadge status={project.status} />
        </div>

        {/* Title row with emoji */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{
            width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
            background: hov ? "rgba(221,233,255,0.07)" : "rgba(159,176,200,0.05)",
            border: `1px solid ${hov ? T.borderHov : T.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px",
            transition: "all 0.3s",
          }}>
            {project.emoji}
          </div>
          <h3 style={{
            fontFamily: cinzel.style.fontFamily,
            fontSize: isLarge ? "clamp(20px, 2.2vw, 28px)" : "clamp(17px, 1.8vw, 22px)",
            fontWeight: 700, letterSpacing: "-0.025em",
            color: T.text, margin: 0, lineHeight: 1.15,
            paddingTop: "4px",
          }}>
            {project.title}
          </h3>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: T.border }} />

        {/* Description */}
        <p style={{
          fontFamily: inter.style.fontFamily,
          fontSize: "14px", fontWeight: 300,
          color: T.textMuted, lineHeight: 1.78,
          margin: 0, flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <div style={{
            fontFamily: inter.style.fontFamily,
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: T.textDim, marginBottom: "10px",
          }}>
            Tech Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.stack.map((tech) => (
              <TechPill key={tech} name={tech} hov={hov} />
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <LinkButton
            href={project.liveUrl}
            hov={hov}
            label="Live Site"
            icon={
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <LinkButton
            href={project.githubUrl}
            hov={hov}
            label="GitHub"
            icon={
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            }
          />
        </div>

        {/* Bottom shimmer */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0, opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute", bottom: 0, left: "6%", right: "6%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${T.steel}, ${T.glow}, ${T.steel}, transparent)`,
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{
      position: "relative",
      background: T.bg,
      padding: "130px 0 150px",
      overflow: "hidden",
    }}>

      {/* Dot grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: "absolute", top: "5%", right: "6%",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(159,176,200,0.04) 0%, transparent 65%)",
        pointerEvents: "none", animation: "projDrift1 22s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "3%",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(221,233,255,0.025) 0%, transparent 65%)",
        pointerEvents: "none", animation: "projDrift2 28s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}>

        {/* Section Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "80px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
            <span style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase", color: T.steel,
            }}>Our Work</span>
            <span style={{ width: "48px", height: "1px", background: `linear-gradient(90deg, ${T.steel}, transparent)` }} />
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>
            <h2 style={{
              fontFamily: cinzel.style.fontFamily,
              fontSize: "clamp(32px, 5vw, 66px)",
              fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.04,
              color: T.text, margin: 0, maxWidth: "560px",
            }}>
              Projects we've{" "}
              <span style={{
                background: `linear-gradient(95deg, ${T.cta1} 0%, ${T.steel} 50%, ${T.glow} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                shipped.
              </span>
            </h2>

            <p style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "15px", fontWeight: 300,
              color: T.textMuted, lineHeight: 1.75,
              margin: 0, maxWidth: "320px",
            }}>
              Real products. Real impact. From community apps to SaaS platforms — here's what we've been building.
            </p>
          </div>
        </motion.div>

        {/* Project Grid — 2 columns, first card is large */}
        <div className="proj-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "18px",
        }}>
          {/* Card 01 — large (spans 2 cols) */}
          <ProjectCard project={PROJECTS[0]} index={0} isLarge={true} />

          {/* Cards 02 & 03 — normal side by side */}
          <ProjectCard project={PROJECTS[1]} index={1} isLarge={false} />
          <ProjectCard project={PROJECTS[2]} index={2} isLarge={false} />

          {/* Cards 04 & 05 — normal side by side */}
          <ProjectCard project={PROJECTS[3]} index={3} isLarge={false} />
          <ProjectCard project={PROJECTS[4]} index={4} isLarge={false} />
        </div>
      </div>

      <style>{`
        @keyframes projDrift1 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-22px, 16px); }
        }
        @keyframes projDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(16px, -20px); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.65); }
        }
        @media (max-width: 900px) {
          .proj-grid {
            grid-template-columns: 1fr !important;
          }
          .proj-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .proj-grid > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
