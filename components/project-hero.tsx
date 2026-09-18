"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsapp } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const capabilities = [
  ["01", "Social media", "#social-media", "/services/social-media.jpg"],
  ["02", "Paid advertising", "#paid-ads", "/services/content-creation.jpg"],
  ["03", "Lead generation", "#lead-generation", null],
  ["04", "Content", "#content", "/services/promo-video.jpg"],
  ["05", "Websites", "#websites", "/projects/inner-living-hero.jpg"],
  ["06", "Branding", "/services", "/clients/cablesting.png"],
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
    }, seen || reduce ? 0 : 760);
    return () => clearTimeout(timer);
  }, [reduce]);

  return <>
    <AnimatePresence>{loading && <motion.div className="jm-loader" exit={{ opacity: 0 }} transition={{ duration: .2 }}><div className="loader-lock" role="status" aria-label="Jaeger Media loading"><span className="loader-half left"/><span className="loader-half right"/></div></motion.div>}</AnimatePresence>
    <section className="agency-hero" aria-label="Jaeger Media social media marketing agency">
      <motion.nav className="agency-nav" aria-label="Homepage navigation" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .55, ease }}>
        <Link className="agency-logo" href="/" aria-label="Jaeger Media home"><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={270} height={92} priority/></Link>
        <div className={`agency-links ${menuOpen ? "open" : ""}`}><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link></div>
        <a className="agency-talk" href={whatsapp}>Let&apos;s talk <ArrowRight size={14}/></a>
        <button className="agency-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button>
      </motion.nav>

      <div className="agency-hero-main">
        <div className="agency-copy">
          <motion.p className="agency-eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .5, ease }}>Hey, we&apos;re Jaeger Media.</motion.p>
          <h1 aria-label="We turn attention into action">{["We turn", "attention", "into action."].map((line, index) => <motion.span key={line} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .27 + index * .09, duration: .62, ease }}>{line}</motion.span>)}</h1>
          <motion.p className="agency-lead" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .58, duration: .52, ease }}>A social media marketing agency in Harare, helping businesses grow through content, advertising, lead generation, branding and digital experiences that turn attention into real enquiries.</motion.p>
          <motion.div className="agency-actions" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72, duration: .52, ease }}><a href={whatsapp}>Start a project <ArrowRight size={15}/></a><Link href="/work">See our work</Link></motion.div>
          <p className="agency-tagline">Where Vision Meets Results.</p>
        </div>

        <motion.div className="founder-stage" initial={reduce ? false : { opacity: 0, clipPath: "inset(8% 0 0 0 round 30px)" }} animate={{ opacity: 1, clipPath: "inset(0% 0 0 0 round 30px)" }} transition={{ delay: .35, duration: .75, ease }}>
          <span className="founder-watermark">JM</span>
          <Image className="founder-image" src="/team/ronan.jpg" alt="Ronan, founder and creative lead at Jaeger Media" fill priority sizes="(max-width: 820px) 92vw, 35vw"/>
          <span className="founder-label">Ronan · Creative / Strategy / Growth</span>
          <div className="asset asset-content"><Play size={13} fill="currentColor"/><span>Content ready</span></div>
          <div className="asset asset-ads"><i/><span>Campaign live</span></div>
          <div className="asset asset-lead"><MessageCircle size={16}/><span>New enquiry</span></div>
        </motion.div>

        <motion.aside className="agency-side-copy" initial={reduce ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .62, duration: .55, ease }}>
          <span>What we handle</span>
          <h2>We build the digital side of your business.</h2>
          <p>From the content people see to the ads that reach them and the systems that turn them into enquiries.</p>
          <div><b>Social</b><b>Ads</b><b>Leads</b><b>Web</b><b>Brand</b></div>
        </motion.aside>
      </div>

      <motion.div className="hero-capability-rail" aria-label="Jaeger Media capabilities" initial={reduce ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72, duration: .65, ease }}>
        {capabilities.map(([number, title, href, image], index) => <Link className={`capability-card card-${index} ${image ? "" : "type-card"}`} href={href} key={title}>{image ? <Image src={image} alt="" fill sizes="180px"/> : <strong>Attention<br/>→<br/>Enquiry</strong>}<span>#{number}</span><b>{title}</b><i>↗</i></Link>)}
      </motion.div>
    </section>
  </>;
}
