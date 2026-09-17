"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { email } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const tileMotion = (x: number, y: number, delay: number) => ({
  initial: { opacity: 0, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { delay, duration: 0.66, ease },
});

export function ProjectHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("jm-intro-seen");
    const timer = setTimeout(() => {
      setLoading(false);
      if (!seen) sessionStorage.setItem("jm-intro-seen", "1");
    }, seen || reduce ? 0 : 760);
    return () => clearTimeout(timer);
  }, [reduce]);

  return <>
    <AnimatePresence>{loading && <motion.div className="jm-loader" exit={{ opacity: 0 }} transition={{ duration: .2 }}><div className="loader-lock" role="status" aria-label="Jaeger Media loading"><span className="loader-half left"/><span className="loader-half right"/></div></motion.div>}</AnimatePresence>
    <section className="marketing-hero" aria-label="Jaeger Media social media marketing agency">
      <motion.nav className="marketing-nav" aria-label="Homepage navigation" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .55, ease }}>
        <Link className="marketing-logo" href="/" aria-label="Jaeger Media home"><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={270} height={92} priority/></Link>
        <div className={`marketing-links ${menuOpen ? "open" : ""}`}><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link></div>
        <div className="marketing-nav-actions"><Link href="/contact">Contact</Link><a className="marketing-start" href={`mailto:${email}`}>Start a project <ArrowRight size={14}/></a><button className="marketing-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button></div>
      </motion.nav>

      <div className="marketing-hero-body">
        <div className="marketing-copy">
          <motion.p className="marketing-eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .5, ease }}>Social Media Marketing · Harare, Zimbabwe</motion.p>
          <h1 aria-label="We help businesses get seen, get leads and grow">{["We help businesses", "get seen,", "get leads", "and grow."].map((line, index) => <motion.span className={index === 2 ? "soft" : ""} key={line} initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 + index * .08, duration: .6, ease }}>{line}</motion.span>)}</h1>
          <motion.p className="marketing-lead" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62, duration: .52, ease }}>We build the content, campaigns and digital systems businesses need to attract attention, generate leads and turn online visibility into real opportunities.</motion.p>
          <motion.div className="marketing-actions" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .76, duration: .52, ease }}><a href={`mailto:${email}`}>Start a project <ArrowRight size={15}/></a><Link href="/work">See our work</Link></motion.div>
          <motion.div className="marketing-services" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .92 }}><span>Social</span><span>Ads</span><span>Leads</span><span>Web</span><span>Brand</span></motion.div>
          <p className="marketing-tagline">Where Vision Meets Results.</p>
        </div>

        <div className="marketing-stage" aria-label="Jaeger Media digital marketing capabilities">
          <motion.div className="stage-label" {...(reduce ? {} : tileMotion(0, -10, .38))}><Image src="/jaeger-logo-secondary.jpg" alt="" width={42} height={42}/><div><span>Jaeger Media</span><b>Digital presence, connected.</b></div></motion.div>
          <motion.div className="content-phone" {...(reduce ? {} : tileMotion(0, 28, .48))}><div className="phone-top"><span>CONTENT / 01</span><Play size={13} fill="currentColor"/></div><Image src="/services/content-creation.jpg" alt="Editorial content production scene" fill priority sizes="(max-width: 820px) 70vw, 25vw"/><div className="phone-caption"><b>Social content</b><span>Plan · Shoot · Publish</span></div></motion.div>
          <motion.div className="campaign-tile" {...(reduce ? {} : tileMotion(-22, 6, .58))}><Image src="/services/social-media.jpg" alt="Campaign moodboard creative" fill sizes="(max-width: 820px) 42vw, 16vw"/><span>Campaign creative</span></motion.div>
          <motion.div className="brand-tile" {...(reduce ? {} : tileMotion(24, 8, .68))}><Image src="/services/branding-design.jpg" alt="Editorial branding composition" fill sizes="(max-width: 820px) 40vw, 15vw"/><span>Brand design</span></motion.div>
          <motion.div className="web-proof" {...(reduce ? {} : tileMotion(20, 18, .78))}><div className="mini-browser"><i/><i/><i/><span>Website live</span></div><Image src="/projects/inner-living-hero.jpg" alt="Compact preview of a live website project" fill sizes="(max-width: 820px) 48vw, 19vw"/><b>Web / Technical</b></motion.div>
          <motion.div className="enquiry-card" {...(reduce ? {} : tileMotion(-18, 16, .86))}><span className="enquiry-icon"><MessageCircle size={18}/></span><div><small>Conversion system</small><b>New enquiry</b><span><Check size={11}/> Path connected</span></div></motion.div>
          <motion.div className="campaign-status" {...(reduce ? {} : tileMotion(15, -8, .94))}><i/><div><small>Paid advertising</small><b>Campaign live</b></div></motion.div>
        </div>
      </div>
    </section>
  </>;
}
