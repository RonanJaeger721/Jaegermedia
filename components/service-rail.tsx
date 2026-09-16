"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const tiles = [
  [
    "Web Design",
    "/projects/inner-living-hero.jpg",
    "Responsive websites built to make your business look established and turn attention into enquiries.",
  ],
  [
    "Paid Advertising",
    "/projects/cablesting-hero.jpg",
    "Campaign strategy, creative and media buying designed to put the right offer in front of the right people.",
  ],
  [
    "Social Media",
    "/projects/inner-living-hero.jpg",
    "Content, design and ongoing management that keeps your brand visible and consistent.",
  ],
  [
    "Branding & Design",
    "/projects/cablesting-hero.jpg",
    "Logos, identities and campaign graphics made to give your business a clearer, stronger presence.",
  ],
  [
    "Content Creation",
    "/projects/inner-living-hero.jpg",
    "Purposeful visuals, captions and short-form content built around the way customers actually scroll.",
  ],
  [
    "Lead Generation",
    "/projects/cablesting-hero.jpg",
    "Focused journeys that connect advertising, landing pages and WhatsApp conversations.",
  ],
  [
    "Promo Video",
    "/projects/inner-living-hero.jpg",
    "Short, polished edits for launches, offers and paid social campaigns.",
  ],
  [
    "Strategy",
    "/projects/cablesting-hero.jpg",
    "Clear direction for how the website, content and campaigns should work together.",
  ],
] as const;

export function ServiceRail() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(
      () => setActive((v) => (v + 1) % tiles.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [reduced]);
  const ordered = Array.from(
    { length: 5 },
    (_, i) => (active + i - 2 + tiles.length) % tiles.length,
  );
  return (
    <div className="service-experience">
      <div
        className="service-rail"
        role="region"
        aria-label="Services carousel"
      >
        {ordered.map((index, position) => {
          const tile = tiles[index];
          return (
            <button
              key={`${index}-${position}`}
              className={`service-tile pos-${position}`}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <Image
                src={tile[1]}
                alt=""
                fill
                sizes="(max-width: 700px) 74vw, 280px"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{tile[0]}</b>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="service-copy"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {[0, 1, 2].map((offset) => {
            const tile = tiles[(active + offset) % tiles.length];
            return (
              <button
                key={tile[0]}
                onClick={() => setActive((active + offset) % tiles.length)}
              >
                <small>0{((active + offset) % tiles.length) + 1}</small>
                <strong>{tile[0]}</strong>
                <p>{tile[2]}</p>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
