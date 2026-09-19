"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  { title: "Social Media Management", image: "/services/social-media.jpg", detail: "Planning, creative, Reels, captions and day-to-day brand management." },
  { title: "Paid Advertising", image: "/services/paid-advertising-v2.png", detail: "Purposeful Meta, Instagram and TikTok campaigns built around the offer." },
  { title: "Lead Generation", image: "/services/lead-generation-v2.png", detail: "The right offer, a simple next step and a real customer conversation." },
  { title: "Content Production", image: "/services/content-production-v2.png", detail: "Campaign photography, short-form video and content people want to stop for." },
  { title: "Web Development", image: "/projects/em-nutrition-hero.png", detail: "Credible digital homes that turn campaign traffic into action." },
  { title: "Branding & Design", image: "/services/branding-design-v2.png", detail: "Visual identities and campaign design that make businesses recognisable." },
] as const;

export function ServiceRail() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <div className="service-experience">
      <div className="service-index-list" role="list" aria-label="Jaeger Media services">
        {services.map((service, index) => (
          <button
            type="button"
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
            key={service.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service.title}</strong>
            <i aria-hidden="true">↗</i>
            <small>{service.detail}</small>
          </button>
        ))}
      </div>
      <figure className="service-active-visual">
        <Image
          key={selected.image}
          src={selected.image}
          alt={`${selected.title} creative work and art direction`}
          fill
          sizes="(max-width: 820px) 100vw, 46vw"
        />
        <figcaption><span>What we handle</span><b>{selected.title}</b></figcaption>
      </figure>
    </div>
  );
}
