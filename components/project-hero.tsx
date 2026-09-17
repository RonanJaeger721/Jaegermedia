"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { email } from "@/data/site";
import { liveProjects } from "@/data/liveProjects";

const projectMedia: Record<string, string> = {
  "Inner Living": "/projects/inner-living-hero.jpg",
  "Skin Essentials": "/projects/skin-essentials-hero.png",
  Smartview: "/projects/smartview-hero.png",
  "EM Nutrition": "/projects/em-nutrition-hero.png",
};

const projects = [
  "Inner Living",
  "Skin Essentials",
  "Smartview",
  "EM Nutrition",
].map((name) => ({
  ...liveProjects.find((project) => project.name === name)!,
  screenshot: projectMedia[name],
}));

export function ProjectHero() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();
  const project = projects[active];

  const move = useCallback((direction: number) => {
    setActive(
      (value) => (value + direction + projects.length) % projects.length,
    );
  }, []);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("jm-intro-seen");
    if (seen || reduce) {
      setLoading(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setLoading(false);
      window.sessionStorage.setItem("jm-intro-seen", "1");
    }, 850);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="jm-loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="loader-lock"
              role="status"
              aria-label="Jaeger Media loading"
            >
              <span className="loader-half left" />
              <span className="loader-half right" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className="project-hero-shell"
        aria-label="Jaeger Media featured work"
      >
        <nav className="canvas-nav" aria-label="Homepage navigation">
          <Link className="canvas-logo" href="/">
            <Image
              src="/jaeger-logo-transparent.png"
              alt="Jaeger Media"
              width={270}
              height={92}
              priority
            />
          </Link>
          <div className={`canvas-links ${menuOpen ? "open" : ""}`}>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="canvas-nav-actions">
            <Image
              className="canvas-mark"
              src="/jaeger-logo-secondary.jpg"
              alt=""
              width={34}
              height={34}
            />
            <a className="canvas-start" href={`mailto:${email}`}>
              Start a project
            </a>
            <button
              className="canvas-menu"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </nav>

        <div className="project-hero-body">
          <div className="project-hero-copy">
            <p className="canvas-eyebrow">Jaeger Media · Zimbabwe</p>
            <h1>
              We build digital
              <br />
              <em>presence that</em>
              <br />
              gets noticed.
            </h1>
            <p className="canvas-lead">
              Websites, advertising and content built to make businesses look
              sharper, reach further and turn attention into opportunity.
            </p>
            <div className="canvas-actions">
              <Link href="/work">
                View our work <span>→</span>
              </Link>
              <a href={`mailto:${email}`}>Start a project</a>
            </div>
            <div className="canvas-meta">
              <span>Web · Ads · Social · Brand</span>
              <span>Where Vision Meets Results.</span>
            </div>
          </div>

          <motion.div
            className="project-stage"
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -55) move(1);
              if (info.offset.x > 55) move(-1);
            }}
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-screen"
                initial={
                  reduce
                    ? false
                    : { opacity: 0, x: 35, clipPath: "inset(0 0 0 18%)" }
                }
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.screenshot}
                  alt={`${project.name} live website`}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 900px) 92vw, 58vw"
                />
              </motion.a>
            </AnimatePresence>
            <span className="stage-pill category">Web design</span>
            <a
              className="stage-pill live"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live project ↗
            </a>
            <span className="stage-pill location">Harare, Zimbabwe</span>
            <span className="stage-pill build">Responsive / Custom build</span>
            <div className="stage-project-name">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={125}
                  height={52}
                />
              ) : null}
              <strong>{project.name}</strong>
            </div>
          </motion.div>
        </div>

        <div className="project-selector">
          <div className="project-count">
            <b>{String(active + 1).padStart(2, "0")}</b>
            <span>/ {liveProjects.length}</span>
            <button onClick={() => move(-1)} aria-label="Previous project">
              ←
            </button>
            <button onClick={() => move(1)} aria-label="Next project">
              →
            </button>
          </div>
          <div className="project-thumbs">
            {projects.map((item, index) => (
              <button
                key={item.name}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-pressed={index === active}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Image src={item.screenshot} alt="" fill sizes="150px" />
                <b>{item.name}</b>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
