"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { email, nav, whatsapp } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="/jaeger-logo-transparent.png"
            alt="Jaeger Media"
            width={310}
            height={106}
            priority
          />
        </Link>
        <nav className="navlinks" aria-label="Main navigation">
          {nav.map(([n, h]) => (
            <Link key={h} href={h}>
              {n}
            </Link>
          ))}
        </nav>
        <Link className="btn hidden-cta" href={whatsapp}>
          WhatsApp <span className="arrow">↗</span>
        </Link>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "≡"}
        </button>
      </header>
      {open && (
        <nav className="mobile-menu">
          {nav.map(([n, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)}>
              {n}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <Image
                src="/jaeger-logo-transparent.png"
                alt="Jaeger Media"
                width={310}
                height={106}
              />
            </Link>
            <p>Where Vision Meets Results.</p>
            <p>Design, content and growth systems for ambitious businesses.</p>
          </div>
          <div>
            <h4>Explore</h4>
            {nav.slice(0, 4).map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services">Websites</Link>
            <Link href="/services">Paid Ads</Link>
            <Link href="/services">Social Media</Link>
            <Link href="/services">Branding</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link href={whatsapp}>WhatsApp</Link>
            <a href={`mailto:${email}`}>{email}</a>
            <Link href="/contact">Project enquiry</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jaeger Media.</span>
          <Link href={whatsapp}>
            Website built &amp; developed by Jaeger Media
          </Link>
        </div>
      </div>
    </footer>
  );
}
export function CTA() {
  return (
    <section className="cta shell">
      <p className="eyebrow">Your next move</p>
      <h2 className="display">Ready to look the part—and perform?</h2>
      <div className="hero-actions">
        <Link className="btn" href={whatsapp}>
          WhatsApp us <span className="arrow">↗</span>
        </Link>
        <a className="btn ghost" href={`mailto:${email}`}>
          Email us
        </a>
      </div>
    </section>
  );
}
export function Shell({
  children,
  hideCTA = false,
  hideHeader = false,
}: {
  children: React.ReactNode;
  hideCTA?: boolean;
  hideHeader?: boolean;
}) {
  return (
    <>
      {!hideHeader && <Header />}
      {children}
      {!hideCTA && <CTA />}
      <Footer />
    </>
  );
}
