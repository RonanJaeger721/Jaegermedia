"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { whatsapp } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="official-hero" aria-label="Jaeger Media social media marketing agency">
      <motion.nav className="official-nav" aria-label="Homepage navigation" initial={reduce ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1, ease }}>
        <Link className="official-logo" href="/" aria-label="Jaeger Media home"><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={270} height={92} priority/></Link>
        <div className={`official-links ${menuOpen ? "open" : ""}`}><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div>
        <a className="official-start" href={whatsapp}>Start a project <ArrowRight size={14}/></a>
        <button className="official-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button>
      </motion.nav>

      <div className="official-hero-grid">
        <div className="official-copy">
          <motion.p className="official-eyebrow" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .45, ease }}>Social Media Marketing Agency · Harare, Zimbabwe</motion.p>
          <h1>{["Marketing built", "around your business."].map((line, index) => <motion.span key={line} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 + index * .08, duration: .58, ease }}>{line}</motion.span>)}</h1>
          <motion.p className="official-description" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .5, ease }}>We combine strategy, advertising, content, lead generation, web and branding to help businesses grow, attract the right audience and turn attention into results.</motion.p>
          <motion.div className="official-actions" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .58, duration: .5, ease }}><a href={whatsapp}>Start a project <ArrowRight size={15}/></a><Link href="/work">View our work</Link></motion.div>
          <p className="official-service-line">Social Media · Advertising · Content · Leads · Web · Branding</p>
        </div>

        <motion.figure className="official-visual" initial={reduce ? false : { opacity: 0, clipPath: "inset(0 12% 0 0 round 30px)" }} animate={{ opacity: 1, clipPath: "inset(0 0% 0 0 round 30px)" }} transition={{ delay: .25, duration: .72, ease }}>
          <Image src="/hero-studio-v2.png" alt="Professional camera and lighting equipment in a daylight content studio" fill priority sizes="(max-width: 820px) 100vw, 52vw"/>
          <figcaption><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={112} height={38}/><span>Creative · Digital · Growth</span></figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
