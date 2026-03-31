"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

/* ─── Palette ───────────────────────────────────────────── */
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

/* ─── Service Data ──────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    emoji: "💻",
    title: "Software Development",
    tag: "Core Engineering",
    accent: T.glow,
    example: "Building a job portal, e-commerce platform, or dashboard system",
    items: [
      "Web Application Development",
      "Mobile App Development (Android / iOS)",
      "Custom Software Solutions",
      "SaaS Product Development",
    ],
  },
  {
    num: "02",
    emoji: "🎨",
    title: "Website Design & Development",
    tag: "Design",
    accent: T.cta2,
    example: "Fast, user-friendly, and visually stunning digital experiences",
    items: [
      "UI/UX Design",
      "Responsive Website Development",
      "Landing Pages for Businesses",
      "Website Maintenance",
    ],
  },
  {
    num: "03",
    emoji: "🤖",
    title: "Data & AI Services",
    tag: "Intelligence",
    accent: T.steel,
    example: "AI medical diagnosis systems, recommendation engines, BI dashboards",
    items: [
      "Data Analysis & Visualization",
      "Machine Learning Models",
      "AI Solutions (Chatbots, Recommendations)",
      "Business Intelligence Dashboards",
    ],
  },
  {
    num: "04",
    emoji: "🔧",
    title: "Maintenance & Support",
    tag: "Reliability",
    accent: T.cta1,
    example: "Keeping your product fast, secure, and always up to date",
    items: [
      "Bug Fixing",
      "Software Updates",
      "Technical Support",
      "Performance Optimization",
    ],
  },
  {
    num: "05",
    emoji: "🚀",
    title: "Product Development",
    tag: "Startup Core",
    accent: T.glow,
    example: "From idea to launch — MVPs built to scale and attract users",
    items: [
      "Building Own Tech Products",
      "MVP Development",
      "Scaling Products",
      "User Testing & Feedback",
    ],
  },
];

/* ─── Single Service Card ───────────────────────────────── */
function ServiceCard({ service, index }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? T.cardHov : T.card,
        border: `1px solid ${hov ? T.borderHov : T.border}`,
        borderRadius: "24px",
        padding: "36px 40px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s, border-color 0.35s",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "280px", height: "280px", borderRadius: "50%",
        background: `radial-gradient(circle, rgba(221,233,255,${hov ? 0.06 : 0.02}) 0%, transparent 65%)`,
        transform: "translate(35%, -35%)",
        pointerEvents: "none",
        transition: "opacity 0.5s",
      }} />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Emoji icon box */}
          <div style={{
            width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
            background: hov ? "rgba(221,233,255,0.07)" : "rgba(159,176,200,0.05)",
            border: `1px solid ${hov ? T.borderHov : T.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "22px",
            transition: "all 0.3s",
          }}>
            {service.emoji}
          </div>
          <div>
            <div style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "10.5px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: T.textDim, marginBottom: "4px",
            }}>
              {service.num} — {service.tag}
            </div>
            <h3 style={{
              fontFamily: cinzel.style.fontFamily,
              fontSize: "clamp(17px, 1.9vw, 22px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              color: T.text, margin: 0, lineHeight: 1.15,
            }}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Arrow — appears on hover */}
        <motion.div
          animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : -6 }}
          transition={{ duration: 0.22 }}
          style={{ flexShrink: 0, paddingTop: "4px" }}
        >
          <div style={{
            width: "34px", height: "34px", borderRadius: "50%",
            border: `1px solid ${T.borderHov}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(221,233,255,0.05)",
          }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3L11.5 7l-4 4" stroke={T.cta1}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: T.border }} />

      {/* Items list */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {service.items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.steel}, ${T.glow})`,
              flexShrink: 0, marginTop: "7px",
            }} />
            <span style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14px", fontWeight: 300,
              color: hov ? T.cta1 : T.textMuted,
              lineHeight: 1.6,
              transition: "color 0.3s",
            }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Example callout */}
      <div style={{
        background: hov ? "rgba(221,233,255,0.04)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${hov ? "rgba(221,233,255,0.1)" : T.border}`,
        borderRadius: "12px",
        padding: "12px 16px",
        display: "flex", alignItems: "flex-start", gap: "10px",
        transition: "all 0.35s",
      }}>
        <span style={{ fontSize: "12px", lineHeight: 1.2, flexShrink: 0 }}>👉</span>
        <span style={{
          fontFamily: inter.style.fontFamily,
          fontSize: "12.5px", fontWeight: 400,
          color: hov ? T.steel : T.textDim,
          lineHeight: 1.6,
          transition: "color 0.35s",
          fontStyle: "italic",
        }}>
          {service.example}
        </span>
      </div>

      {/* Bottom shimmer on hover */}
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
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="services" style={{
      position: "relative",
      background: T.bg2,
      padding: "130px 0 150px",
      overflow: "hidden",
    }}>

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, transparent 100%)",
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(159,176,200,0.045) 0%, transparent 65%)",
        pointerEvents: "none", animation: "svcDrift1 20s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "8%", right: "4%",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(221,233,255,0.03) 0%, transparent 65%)",
        pointerEvents: "none", animation: "svcDrift2 26s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}>

        {/* Section header */}
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
            }}>What We Offer</span>
            <span style={{ width: "48px", height: "1px", background: `linear-gradient(90deg, ${T.steel}, transparent)` }} />
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>
            <h2 style={{
              fontFamily: cinzel.style.fontFamily,
              fontSize: "clamp(32px, 5vw, 66px)",
              fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.04,
              color: T.text, margin: 0, maxWidth: "600px",
            }}>
              Built for every{" "}
              <span style={{
                background: `linear-gradient(95deg, ${T.cta1} 0%, ${T.steel} 50%, ${T.glow} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                stage of growth.
              </span>
            </h2>

            <p style={{
              fontFamily: inter.style.fontFamily,
              fontSize: "15px", fontWeight: 300,
              color: T.textMuted, lineHeight: 1.75,
              margin: 0, maxWidth: "320px",
            }}>
              From your first MVP to enterprise-scale systems — we deliver complete digital solutions that grow with you.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="svc-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
        }}>
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes svcDrift1 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(20px, 24px); }
        }
        @keyframes svcDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-18px, -20px); }
        }
        @media (max-width: 960px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          section > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
