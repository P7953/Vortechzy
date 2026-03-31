"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, MapPin, ArrowRight, Instagram } from "lucide-react";
import { Cinzel, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const T = {
  bg: "transparent",
  text: "var(--text-light)",
  textMuted: "rgba(255, 255, 255, 0.6)",
  steel: "var(--pro)",
  glow: "var(--glow)",
  border: "rgba(255, 255, 255, 0.08)",
  borderHov: "rgba(255, 255, 255, 0.15)",
  card: "rgba(255, 255, 255, 0.03)",
};

const FOUNDERS = [
  {
    name: "Prathmesh Kadam",
    role: "CEO & Founder",
    socials: [
      { id: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/prathmeshskadam7953/" },
      { id: "twitter", icon: Github, href: "https://github.com/P7953" },
    ],
  },
  {
    name: "Aditya Pawar",
    role: "CTO & Co-Founder",
    socials: [
      { id: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/aditya-pawar18/" },
      { id: "github", icon: Github, href: "https://github.com/addy-18" },
    ],
  },
  {
    name: "Rohit Patil",
    role: "COO & Co-Founder",
    socials: [
      { id: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/rohit-patil214/" },
      { id: "instagram", icon: Instagram, href: "#" },
    ],
  },
];

const LINK_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact_us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Cloud Solutions", href: "#" },
      { label: "Consulting", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--bg)",
        borderTop: `1px solid ${T.border}`,
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "32px",
      }}
    >
      {/* Background Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(159, 176, 200, 0.08) 0%, rgba(15, 16, 19, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Intro (Cols: 1-4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start gap-6">
            <Link
              href="/"
              style={{
                fontFamily: cinzel.style.fontFamily,
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: T.text,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Image
                src="/logo.png"
                alt="vortechzy logo"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              vortechzy
            </Link>
            <p
              style={{
                fontFamily: inter.style.fontFamily,
                color: T.textMuted,
                fontSize: "14px",
                lineHeight: "1.6",
                maxWidth: "320px",
              }}
            >
              Pioneering the future of digital experiences with cutting-edge technology and sophisticated design. A new capability for your jobs-to-be-done.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:contact@vortechzy.com" className="flex items-center gap-3 text-sm group" style={{ color: T.textMuted, fontFamily: inter.style.fontFamily, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = T.text} onMouseLeave={(e) => e.currentTarget.style.color = T.textMuted}>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] group-hover:border-[rgba(255,255,255,0.2)] transition-colors">
                  <Mail size={14} />
                </span>
                vortechzy@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm group" style={{ color: T.textMuted, fontFamily: inter.style.fontFamily }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
                  <MapPin size={14} />
                </span>
                Global Remote
              </div>
            </div>
          </div>

          {/* Navigation Links (Cols: 5-8) */}
          <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8">
            {LINK_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h4
                  style={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: T.text,
                  }}
                >
                  {section.title}
                </h4>
                <div className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 w-fit"
                      style={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        color: T.textMuted,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = T.text;
                        e.currentTarget.querySelector('.arrow-icon').style.transform = 'translate(-2px, 0px)';
                        e.currentTarget.querySelector('.arrow-icon').style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = T.textMuted;
                        e.currentTarget.querySelector('.arrow-icon').style.transform = 'translate(-8px, 0px)';
                        e.currentTarget.querySelector('.arrow-icon').style.opacity = '0';
                      }}
                    >
                      <ArrowRight
                        size={12}
                        className="arrow-icon opacity-0 -translate-x-2 transition-all duration-300"
                      />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Founders Section (Cols: 9-12) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            <h4
              style={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: T.text,
              }}
            >
              Founding Team
            </h4>
            <div className="flex flex-col gap-4">
              {FOUNDERS.map((founder, idx) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300"
                >
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 600,
                        color: T.text,
                      }}
                    >
                      {founder.name}
                    </span>
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        color: T.textMuted,
                      }}
                    >
                      {founder.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {founder.socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[var(--pro)] hover:text-[var(--bg)] transition-colors duration-300"
                          style={{ color: T.textMuted }}
                          aria-label={`${founder.name} ${social.id}`}
                        >
                          <Icon size={14} />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-[rgba(255,255,255,0.05)]"
          style={{
            fontFamily: inter.style.fontFamily,
            fontSize: "13px",
            color: T.textMuted,
          }}
        >
          <p>© {new Date().getFullYear()} vortechzy. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--text-light)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--text-light)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
