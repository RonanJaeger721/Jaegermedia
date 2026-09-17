"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { email } from "@/data/site";
import { liveProjects } from "@/data/liveProjects";

const names = ["Inner Living", "Skin Essentials", "Smartview"];
const projects = names.map((name) => {
  const item = liveProjects.find((project) => project.name === name);
  if (!item?.screenshot) throw new Error(`Missing featured project: ${name}`);
  return item;
});
const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectHero() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();
  const project = projects[active];
  const px = useMotionValue(0), py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 22 });
  const sy = useSpring(py, { stiffness: 90, damping: 22 });
  const stageX = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const stageY = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const move = useCallback((by: number) => setActive((value) => (value + by + projects.length) % projects.length), []);

  useEffect(() => {
    const seen = sessionStorage.getItem("jm-intro-seen");
    if (seen || reduce) {
      const immediate = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(immediate);
    }
    const timer = setTimeout(() => { setLoading(false); sessionStorage.setItem("jm-intro-seen", "1"); }, 780);
    return () => clearTimeout(timer);
  }, [reduce]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); };
    addEventListener("keydown", onKey); return () => removeEventListener("keydown", onKey);
  }, [move]);

  return <>
    <AnimatePresence>{loading && <motion.div className="jm-loader" exit={{ opacity: 0 }} transition={{ duration: .2 }}><div className="loader-lock" role="status" aria-label="Jaeger Media loading"><span className="loader-half left"/><span className="loader-half right"/></div></motion.div>}</AnimatePresence>
    <motion.section className="project-hero-shell" aria-label="Jaeger Media agency introduction" initial={reduce ? false : { opacity: 0, scale: .99 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, ease }}>
      <motion.nav className="canvas-nav" aria-label="Homepage navigation" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .55, ease }}>
        <Link className="canvas-logo" href="/" aria-label="Jaeger Media home"><Image src="/jaeger-logo-transparent.png" alt="Jaeger Media" width={270} height={92} priority/></Link>
        <div className={`canvas-links ${menuOpen ? "open" : ""}`}><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link></div>
        <div className="canvas-nav-actions"><Link className="canvas-contact" href="/contact">Contact</Link><a className="canvas-start" href={`mailto:${email}`}>Start a project <span>→</span></a><button className="canvas-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "≡"}</button></div>
      </motion.nav>

      <div className="project-hero-body">
        <div className="project-hero-copy">
          <motion.p className="canvas-eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24, duration: .55, ease }}>Jaeger Media · Zimbabwe</motion.p>
          <h1 aria-label="Digital work built to get noticed">{["Digital work", "built to", "get noticed."].map((line, index) => <motion.span key={line} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + index * .08, duration: .62, ease }}>{line}</motion.span>)}</h1>
          <motion.p className="canvas-lead" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .58, duration: .55, ease }}>Websites, advertising and content built to help businesses look sharper, reach further and turn attention into opportunity.</motion.p>
          <motion.div className="canvas-actions" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .68, duration: .55, ease }}><Link href="/work">View our work <span>→</span></Link><a href={`mailto:${email}`}>Start a project</a></motion.div>
          <motion.div className="canvas-meta" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .82 }}><span>Web</span><span>Ads</span><span>Social</span><span>Branding</span></motion.div>
          <p className="canvas-tagline">Where Vision Meets Results.</p>
        </div>

        <motion.div className="project-stage" style={reduce ? undefined : { x: stageX, y: stageY }} initial={reduce ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .7, ease }} onPointerMove={(event) => { if (reduce || event.pointerType === "touch") return; const box = event.currentTarget.getBoundingClientRect(); px.set((event.clientX - box.left) / box.width - .5); py.set((event.clientY - box.top) / box.height - .5); }} onPointerLeave={() => { px.set(0); py.set(0); }} drag={reduce ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={.08} onDragEnd={(_, info) => { if (info.offset.x < -55) move(1); if (info.offset.x > 55) move(-1); }}>
          <div className="stage-heading"><div><span>Featured build</span><strong>{project.name}</strong></div><Image src="/jaeger-logo-secondary.jpg" alt="" width={54} height={54} aria-hidden="true"/></div>
          <div className="project-browser"><div className="browser-bar"><i/><i/><i/><span>{project.url.replace(/^https?:\/\/(www\.)?/, "")}</span></div><AnimatePresence mode="wait"><motion.a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="project-screen" initial={reduce ? false : { opacity: 0, x: 28, clipPath: "inset(0 0 0 14%)" }} animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .56, ease }}><Image src={project.screenshot!} alt={`${project.name} website preview`} fill priority sizes="(max-width: 820px) 92vw, 54vw"/></motion.a></AnimatePresence></div>
          <div className="stage-footer"><div><span>{project.industry}</span><strong>{project.service}</strong></div><a href={project.url} target="_blank" rel="noopener noreferrer">View live <span>↗</span></a></div>
        </motion.div>
      </div>

      <motion.div className="project-selector" initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .76, duration: .58, ease }}>
        <div className="project-count"><b>{String(active + 1).padStart(2, "0")}</b><span>/ {String(liveProjects.length).padStart(2, "0")}</span><button onClick={() => move(-1)} aria-label="Previous featured project">←</button><button onClick={() => move(1)} aria-label="Next featured project">→</button></div>
        <div className="project-thumbs" aria-label="Choose a featured project">{projects.map((item, index) => <button key={item.name} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-pressed={index === active}><Image src={item.screenshot!} alt="" fill sizes="150px"/><span>0{index + 1}</span><b>{item.name}</b></button>)}</div>
      </motion.div>
    </motion.section>
  </>;
}
