"use client";

import Image from "next/image";

const tiles = [
  {
    title: "Web Design",
    image: "/services/web-design.jpg",
    alt: "Editorial website design inspiration",
  },
  {
    title: "Paid Advertising",
    image: "/services/paid-advertising.jpg",
    alt: "Creative campaign production inspiration",
  },
  {
    title: "Social Media",
    image: "/services/social-media.jpg",
    alt: "Social media moodboard and campaign inspiration",
  },
  {
    title: "Branding & Design",
    image: "/services/branding-design.jpg",
    alt: "Brand identity design studio inspiration",
  },
  {
    title: "Content Creation",
    image: "/services/content-creation.png",
    alt: "Zimbabwean editorial content creator inspiration",
  },
  {
    title: "Lead Generation",
    image: "/services/lead-generation.jpg",
    alt: "Digital marketing and lead generation inspiration",
  },
  {
    title: "Promo Video",
    image: "/services/promo-video.jpg",
    alt: "Behind the scenes video production inspiration",
  },
  {
    title: "Strategy",
    image: "/services/strategy.jpg",
    alt: "Brand and marketing strategy moodboard inspiration",
  },
] as const;

function ServiceSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="service-loop-group" aria-hidden={hidden || undefined}>
      {tiles.map((tile, index) => (
        <article className="service-tile" key={tile.title}>
          <Image
            src={tile.image}
            alt={hidden ? "" : tile.alt}
            fill
            sizes="(max-width: 700px) 68vw, 300px"
          />
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{tile.title}</b>
        </article>
      ))}
    </div>
  );
}

export function ServiceRail() {
  return (
    <div className="service-experience">
      <div
        className="service-rail"
        role="region"
        aria-label="Jaeger Media services"
      >
        <div className="service-track">
          <ServiceSet />
          <ServiceSet hidden />
        </div>
      </div>
      <div className="service-name-marquee" aria-hidden="true">
        <div className="service-name-track">
          {[...tiles, ...tiles].map((tile, index) => (
            <span key={`${tile.title}-${index}`}>
              {tile.title} <i>↗</i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
