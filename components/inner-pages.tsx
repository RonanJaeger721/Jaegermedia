"use client";
import Link from "next/link";
import { useState } from "react";
import { Shell } from "./site-shell";
import { Reveal } from "./motion";
import {
  clients,
  email,
  faqs,
  pricing,
  projects,
  services,
  whatsapp,
} from "@/data/site";
const intro: Record<string, [string, string, string]> = {
  about: [
    "Inside Jaeger",
    "Built on the belief that better design creates better business.",
    "Jaeger Media is a creative digital agency helping businesses grow through strong design, smart marketing and a modern online presence.",
  ],
  services: [
    "What we do",
    "Creative and growth, working as one.",
    "From the first impression to the final enquiry, we build connected digital experiences that look right and work hard.",
  ],
  work: [
    "Selected work",
    "Proof is in the presence.",
    "A growing body of websites, campaign systems and brand experiences created for businesses ready to move forward.",
  ],
  "case-studies": [
    "Case studies",
    "The thinking behind the finish.",
    "A structured look at the challenge, the decisions and the work delivered. Detailed verified outcomes can be added as each project is documented.",
  ],
  process: [
    "Our process",
    "Clear enough to trust. Flexible enough to create.",
    "A collaborative path from first conversation to launch, with every stage designed to protect quality and momentum.",
  ],
  pricing: [
    "Pricing",
    "A stronger presence starts here.",
    "Clear website packages and custom scopes for social media, advertising, branding and ongoing growth.",
  ],
  contact: [
    "Start a project",
    "Tell us where you want to go.",
    "Tell us about your business and what you need. We’ll come back with a practical next step.",
  ],
};
function Hero({ type }: { type: string }) {
  const [e, h, p] = intro[type];
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">{e}</p>
        <h1 className="display">{h}</h1>
        <p>{p}</p>
      </div>
    </section>
  );
}
function About() {
  return (
    <>
      <Hero type="about" />
      <section className="section shell split">
        <p className="eyebrow">Our point of view</p>
        <Reveal className="prose">
          <h2 className="display">
            Looking good is the beginning—not the outcome.
          </h2>
          <p>
            We care about the complete signal a business sends: the clarity of
            its message, the confidence of its visual identity, the ease of its
            website and the path that turns interest into a conversation.
          </p>
          <p>
            That is why our work crosses design and growth. A beautiful site is
            stronger when the advertising, content and conversion journey
            support the same idea.
          </p>
        </Reveal>
      </section>
      <section className="section shell">
        <div className="values">
          {[
            [
              "01",
              "Clarity",
              "We remove noise so the right message lands quickly.",
            ],
            [
              "02",
              "Craft",
              "Details matter because trust is built in the details.",
            ],
            [
              "03",
              "Momentum",
              "We favour practical progress over endless complexity.",
            ],
            [
              "04",
              "Partnership",
              "Good work comes from honest, responsive collaboration.",
            ],
          ].map(([n, h, p]) => (
            <Reveal className="value glass" key={n}>
              <span className="muted">{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
function Services() {
  return (
    <>
      <Hero type="services" />
      <section className="shell">
        {services.map((s, i) => (
          <Reveal className="detail" key={s.title}>
            <span className="step-index">0{i + 1}</span>
            <div>
              <h2 className="display">{s.title}</h2>
              <p>{s.short}</p>
              <div className="chips">
                {s.items.map((x) => (
                  <span className="chip" key={x}>
                    {x}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn ghost">
                Discuss this service ↗
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
function Work() {
  const [filter, setFilter] = useState("All");
  const all = [
    ...projects,
    {
      name: "GlowKraft",
      type: "Branding",
      summary: "Visual identity assets shaped for a confident beauty brand.",
    },
    {
      name: "Social Campaign System",
      type: "Social Media",
      summary: "A reusable content framework for consistent brand presence.",
    },
    {
      name: "Lead Campaign",
      type: "Ads",
      summary: "A focused ad-to-WhatsApp journey built around real enquiries.",
    },
  ];
  const shown =
    filter === "All" ? all : all.filter((p) => p.type.includes(filter));
  return (
    <>
      <Hero type="work" />
      <section className="section shell">
        <div className="filters">
          {["All", "Website", "Ads", "Branding", "Social Media"].map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="case-grid">
          {shown.map((p) => (
            <Reveal className="case glass" key={p.name}>
              <span className="project-tag">{p.type}</span>
              <h2 className="display">{p.name}</h2>
              <p>{p.summary}</p>
              <Link href="/case-studies" className="btn ghost">
                View case study
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="section">
          <p className="eyebrow">Projects for</p>
          <div className="reason-grid">
            {clients.map((c, i) => (
              <div className="reason" key={c}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c}</h3>
                <p>
                  Text mark shown until an approved client logo is added to
                  /public/clients.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
function Cases() {
  return (
    <>
      <Hero type="case-studies" />
      <section className="section shell">
        <div className="case-grid">
          {projects.map((p) => (
            <Reveal className="case glass" key={p.name}>
              <span className="project-tag">{p.type}</span>
              <h2 className="display">{p.name}</h2>
              <p>
                <b>Challenge</b>
                <br />
                Create a clearer, more credible digital presence suited to the
                audience.
              </p>
              <p>
                <b>What we did</b>
                <br />
                {p.summary}
              </p>
              <div className="chips">
                <span className="chip">Strategy</span>
                <span className="chip">Design</span>
                <span className="chip">Build</span>
              </div>
              <small className="muted">
                Verified performance outcomes to be added when approved.
              </small>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
function Process() {
  return (
    <>
      <Hero type="process" />
      <section className="section shell timeline">
        {[
          [
            "01",
            "Discovery",
            "We begin with the business: goals, customers, offer, competitors, current materials and what success needs to look like.",
          ],
          [
            "02",
            "Strategy",
            "We turn context into a focused plan for content, structure, messaging, design direction and the conversion journey.",
          ],
          [
            "03",
            "Design",
            "We create the visual system and key screens, then refine the details until the experience feels right for the brand.",
          ],
          [
            "04",
            "Build",
            "The approved direction becomes a responsive, fast and accessible experience with clean interactions and working action paths.",
          ],
          [
            "05",
            "Launch & Growth",
            "After final checks, we launch. Campaigns, content and ongoing refinement can then compound the initial work.",
          ],
        ].map(([n, h, p]) => (
          <Reveal className="phase" key={n}>
            <span className="dot">{n}</span>
            <div className="phase-card glass">
              <h2 className="display">{h}</h2>
              <p>{p}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
function Pricing() {
  return (
    <>
      <Hero type="pricing" />
      <section className="section shell">
        <div className="price-grid">
          {pricing.map((p, i) => (
            <Reveal
              key={p.name}
              className={`price glass ${i === 1 ? "featured" : ""}`}
            >
              <h3>{p.name}</h3>
              <span className="muted">{p.note}</span>
              <strong>{p.price}</strong>
              <ul>
                {p.items.map((x) => (
                  <li key={x}>— {x}</li>
                ))}
              </ul>
              <Link className="btn ghost" href="/contact">
                Choose package
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="detail">
          <h2 className="display">Custom growth support.</h2>
          <div>
            <p>
              Social media management, ad management, branding, design retainers
              and lead-generation systems are quoted according to scope, volume
              and campaign needs.
            </p>
            <Link className="btn ghost" href="/contact">
              Request a custom quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Hero type="contact" />
      <section className="section shell contact-grid">
        <div>
          <div className="contact-card glass">
            <b>WhatsApp</b>
            <span>Fastest way to start a conversation</span>
            <br />
            <Link href={whatsapp}>+263 78 993 7251 ↗</Link>
          </div>
          <div className="contact-card glass">
            <b>Email</b>
            <span>Send us your brief or project details.</span>
            <br />
            <a href={`mailto:${email}`}>{email} ↗</a>
          </div>
          <div className="contact-card glass">
            <b>Response time</b>
            <span>We aim to respond within one business day.</span>
          </div>
        </div>
        <form
          className="contact-form glass"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="form-grid">
            <Field label="Name">
              <input required name="name" />
            </Field>
            <Field label="Business name">
              <input name="business" />
            </Field>
            <Field label="Phone / WhatsApp">
              <input required name="phone" type="tel" />
            </Field>
            <Field label="Email">
              <input required name="email" type="email" />
            </Field>
            <Field label="Service needed">
              <select name="service">
                <option>Website design</option>
                <option>Social media management</option>
                <option>Paid advertising</option>
                <option>Branding & graphics</option>
                <option>Promo video</option>
                <option>Lead generation</option>
              </select>
            </Field>
            <Field label="Budget range">
              <select name="budget">
                <option>Under $100</option>
                <option>$100 – $200</option>
                <option>$200 – $500</option>
                <option>$500+</option>
                <option>Let’s discuss</option>
              </select>
            </Field>
            <Field label="Message" full>
              <textarea
                required
                name="message"
                placeholder="Tell us about your business and what you need."
              />
            </Field>
            <div className="field full">
              <button className="btn" type="submit">
                Send project enquiry ↗
              </button>
              {sent && (
                <p role="status">
                  Thank you — your enquiry has been captured for this preview.
                  For an immediate response, please use WhatsApp.
                </p>
              )}
            </div>
          </div>
        </form>
      </section>
      <section className="section shell faq">
        <div>
          <p className="eyebrow">Before you ask</p>
          <h2 className="display">Useful answers.</h2>
        </div>
        <div>
          {faqs.slice(0, 3).map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`field ${full ? "full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}
export function InnerPage({ type }: { type: string }) {
  let page: React.ReactNode;
  if (type === "about") page = <About />;
  else if (type === "services") page = <Services />;
  else if (type === "work") page = <Work />;
  else if (type === "case-studies") page = <Cases />;
  else if (type === "process") page = <Process />;
  else if (type === "pricing") page = <Pricing />;
  else page = <Contact />;
  return (
    <Shell>
      <main>{page}</main>
    </Shell>
  );
}
