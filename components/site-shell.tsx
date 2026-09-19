"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { email, nav, whatsapp } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 3) {
        setCompact(y > 140 && delta > 0);
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <header className={`official-nav global-official-nav ${compact ? "is-compact" : ""}`}>
        <Link className="official-logo" href="/">
          <Image
            className="brand-logo"
            src="/jaeger-logo-transparent.png"
            alt="Jaeger Media"
            width={310}
            height={106}
            priority
          />
        </Link>
        <nav className={`official-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {nav.map(([n, h]) => {
            const active = pathname === h || pathname.startsWith(`${h}/`);
            return <Link key={h} href={h} onClick={() => setOpen(false)} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
              <i aria-hidden="true" />
              <span>{n}</span>
            </Link>
          })}
        </nav>
        <Link className="official-start" href="/contact">
          Start a Project <ArrowRight size={14} />
        </Link>
        <button
          className="official-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "≡"}
        </button>
      </header>
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
            <p>Marketing and digital systems built around the business.</p>
          </div>
          <div>
            <h4>Explore</h4>
            {nav.map(([n, h]) => (
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
            <span>Instagram · TikTok · Facebook · LinkedIn</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jaeger Media.</span>
          <Link href={whatsapp}>
            Built &amp; Developed by Jaeger Media
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
      <h2 className="display">Ready to look the part and perform?</h2>
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
