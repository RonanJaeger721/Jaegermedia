"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsapp } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const services = [
  ["01", "Social media management", "Strategy, content and day-to-day management"],
  ["02", "Paid advertising", "Meta, Instagram and TikTok campaigns"],
  ["03", "Lead generation", "Clear paths from attention to enquiry"],
  ["04", "Websites", "Credible, conversion-focused digital homes"],
  ["05", "Branding & design", "Logos, identity and campaign creative"],
  ["06", "Content production", "Reels, filming, editing and social assets"],
] as const;

export function ProjectHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("jm-intro-seen");
    const timer = setTimeout(() => {
      setLoading(false);
      if (!seen) sessionStorage.setItem("jm-intro-seen", "1");
    }, seen || reduce ? 0 : 600);
    return () => clearTimeout(timer);
  }, [reduce]);

  return <>
    <AnimatePresence>{loading && <motion.div className="jm-loader" exit={{ opacity: 0 }} transition={{ duration: .2 }}><div className="loader-lock" role="status" aria-label="Jaeger Media loading"><span className="loader-half left"/><span className="loader-half right"/></div></motion.div>}</AnimatePresence>
    <section className="agency-hero agency-hero-clear" aria-label="Jaeger Media social media marketing agency">
      <motion.nav className="agency-nav" aria-label="Homepage navigation" initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease }}>
        <Link className="agency-logo" href="/" aria-label="Jaeger Media home"><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={270} height={92} priority/></Link>
        <div className={`agency-links ${menuOpen ? "open" : ""}`}><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div>
        <a className="agency-talk" href={whatsapp}>Let&apos;s talk <ArrowRight size={14}/></a>
        <button className="agency-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button>
      </motion.nav>

      <div className="clear-hero-grid">
        <div className="clear-hero-copy">
          <motion.p className="agency-eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .5, ease }}>Social media marketing agency · Harare, Zimbabwe</motion.p>
          <h1>{["We build your", "digital presence.", "Then help it grow."].map((line, index) => <motion.span key={line} initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22 + index * .08, duration: .58, ease }}>{line}</motion.span>)}</h1>
          <motion.p className="clear-hero-lead" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52, duration: .5, ease }}>Jaeger Media handles the content, advertising, lead generation, branding and websites businesses need to get noticed—and turn attention into real enquiries.</motion.p>
          <motion.div className="agency-actions" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62, duration: .5, ease }}><a href={whatsapp}>Start a project <ArrowRight size={15}/></a><Link href="/work">See our work</Link></motion.div>
          <p className="agency-tagline">Where Vision Meets Results.</p>
        </div>

        <motion.div className="clear-service-board" initial={reduce ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3, duration: .65, ease }}>
          <div className="clear-board-head"><span>What we handle</span><b>One team. The full digital picture.</b></div>
          <div className="clear-service-list">{services.map(([number,title,detail])=><Link href="/services" key={title}><span>{number}</span><div><b>{title}</b><small>{detail}</small></div><i>↗</i></Link>)}</div>
          <div className="clear-founders"><span>Founded and led by two brothers</span><div><b>Ronan</b><small>Co-Founder · Creative & Growth</small></div><div><b>Michael “Mikey”</b><small>Co-Founder · Development & Systems</small></div></div>
        </motion.div>
      </div>
    </section>
  </>;
}
