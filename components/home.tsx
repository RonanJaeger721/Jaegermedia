import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";
import { ServiceRail } from "./service-rail";
import { Shell } from "./site-shell";
import { ProjectHero } from "./project-hero";
import { featuredProjects, liveProjects } from "@/data/liveProjects";
import { email, pricing, whatsapp } from "@/data/site";

const adPlans = [
  { name: "Start", total: "$250", service: "$150", spend: "$100", description: "A starter campaign for testing an offer, audience or campaign direction." },
  { name: "Grow", total: "$500", service: "$250", spend: "$250", description: "A stronger campaign budget for more reach and creative testing." },
  { name: "Scale", total: "$800", service: "$500", spend: "$300", description: "Higher-touch management, creative involvement and optimisation." },
];

export function HomePage() {
  return (
    <Shell hideCTA hideHeader>
      <main className="jm-home">
        <ProjectHero />

        <section className="jm-services" id="services">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">What we do</p>
              <h2>What we do.</h2>
              <p>
                One team across the digital side of your business.
              </p>
            </Reveal>
          </div>
          <ServiceRail />
        </section>

        <section className="growth-engine" id="paid-ads">
          <div className="shell growth-grid">
            <Reveal className="growth-copy">
              <p className="jm-kicker light">Paid advertising + lead generation</p>
              <h2>Attention is good.<br/><em>Enquiries are better.</em></h2>
              <p>We structure campaigns around the right offer, the right audience and a clear path to genuine customer enquiries.</p>
              <div className="platform-line"><span>Meta / Facebook</span><span>Instagram</span><span>TikTok</span></div>
              <Link href="/contact">Run ads with us ↗</Link>
            </Reveal>
            <span className="section-anchor" id="lead-generation" />
            <Reveal className="lead-flow" aria-label="Lead generation journey">
              <div><span>01</span><b>Ad</b><small>The right offer</small></div><i>→</i>
              <div><span>02</span><b>Content</b><small>A clear message</small></div><i>→</i>
              <div><span>03</span><b>WhatsApp</b><small>A simple next step</small></div><i>→</i>
              <div className="flow-result"><span>04</span><b>Enquiry</b><small>A real conversation</small></div>
            </Reveal>
          </div>
        </section>

        <section className="social-core" id="social-media">
          <div className="shell social-core-grid">
            <span className="section-anchor" id="content" />
            <Reveal className="social-visual">
              <Image src="/services/content-production-v2.png" alt="Professional content production for a business campaign" fill sizes="(max-width: 800px) 100vw, 48vw"/>
              <span>Content in production</span>
            </Reveal>
            <Reveal className="social-copy">
              <p className="jm-kicker">Social media management</p>
              <h2>Active. Consistent.<br/>Worth following.</h2>
              <p>We keep brands active, consistent and recognisable through structured planning, creative and ongoing campaign support.</p>
              <div className="social-list">{["Content planning","Social graphics","Reels / short video","Captions + posting","Community engagement","Campaign support","Brand consistency"].map((item)=><span key={item}>{item}</span>)}</div>
              <Link href="/contact">Get a management quote ↗</Link>
            </Reveal>
          </div>
        </section>

        <section className="jm-live" id="websites">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">Selected work</p>
              <h2>Our Portfolio</h2>
              <p>
                Selected websites, brands and campaigns we have brought to life.
              </p>
            </Reveal>
          </div>
          <div className="logo-rail">
            <div className="logo-track">
              {[...liveProjects, ...liveProjects].map((project, i) => (
                <a
                  key={`${project.name}-${i}`}
                  className="live-logo"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={240}
                      height={110}
                    />
                  ) : (
                    <strong className="text-mark">{project.mark}</strong>
                  )}
                  <span>
                    <b>{project.name}</b>
                    <small>Website · View live ↗</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="shell selected-builds">
            <p className="jm-kicker">Website portfolio</p>
            {featuredProjects.map((project, i) => (
              <Reveal className="build-row" delay={(i % 2) * .1} direction="scale" key={project.name}>
                <div className="build-count">0{i + 1}</div>
                <div className="build-shot">
                  <Image
                    src={project.screenshot!}
                    alt={`${project.name} website preview`}
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                  />
                </div>
                <div className="build-info">
                  <span>{project.industry}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="jm-story">
          <div className="shell story-grid">
            <Reveal>
              <p className="jm-kicker">About Jaeger Media</p>
              <h2>
                Built around the businesses we work with.
              </h2>
            </Reveal>
            <Reveal>
              <p className="story-large">
                Jaeger Media connects advertising, content, lead generation, web
                development and brand design around what each business needs.
              </p>
              <p>
                Strategy is only useful when it becomes work people can see,
                understand and act on.
              </p>
              <p>
                From first impression to final enquiry, we build the digital systems
                that make businesses easier to discover and choose.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="jm-team">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">The people behind the work</p>
              <h2>
                Creative, marketing
                <br />
                and technical direction.
              </h2>
            </Reveal>
            <div className="team-layout">
              <Reveal className="team-person ronan" direction="right">
                <div className="team-visual">
                  <span>FRONT</span>
                  <Image
                    className="team-photo"
                    src="/team/ronan.jpg"
                    alt="Ronan, Founder and Creative & Client Lead at Jaeger Media"
                    fill
                    sizes="(max-width: 700px) 100vw, 34vw"
                  />
                  <small>01 / RONAN</small>
                </div>
                <div>
                  <p className="jm-kicker light">Creative · Marketing</p>
                  <h3>Ronan</h3>
                  <h4>Creative & Marketing</h4>
                  <p>
                    Ronan works across client strategy, creative direction, content,
                    campaigns and commercial growth.
                  </p>
                </div>
              </Reveal>
              <Reveal className="team-person mikey" direction="left" delay={.1}>
                <div className="team-visual">
                  <span>BACK</span>
                  <Image
                    className="team-photo"
                    src="/team/mikey.jpg"
                    alt="Michael Mikey, Development and Technical Lead at Jaeger Media"
                    fill
                    sizes="(max-width: 700px) 100vw, 32vw"
                  />
                  <small>02 / MIKEY</small>
                </div>
                <div>
                  <p className="jm-kicker light">
                    Development · Digital
                  </p>
                  <h3>Michael “Mikey”</h3>
                  <h4>Development & Digital</h4>
                  <p>
                    Mikey leads development, technical implementation, deployment and the
                    digital systems behind the work.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="jm-web-pricing">
          <div className="shell">
            <Reveal className="jm-section-head">
              <p className="jm-kicker light">Website pricing</p>
              <h2>Websites.</h2>
              <p>
                Built around what the business actually needs, without unnecessary
                complexity.
              </p>
            </Reveal>
            <div className="jm-price-row">
              {pricing.map((plan, i) => (
                <Reveal
                  className={`jm-price ${i === 1 ? "featured" : ""}`}
                  delay={i * .09}
                  key={plan.name}
                >
                  <span>0{i + 1}</span>
                  <h3>{plan.name}</h3>
                  <strong>USD {plan.price.slice(1)}</strong>
                  <small className="one-time">One-time fee</small>
                  <p>{plan.note}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact">Start a project ↗</Link>
                </Reveal>
              ))}
            </div>
            <div className="custom-build">
              <b>Custom builds</b>
              <span>Quoted according to scope.</span>
            </div>
          </div>
        </section>

        <section className="jm-ads">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">Paid advertising</p>
              <h2>
                Put the right offer
                <br />
                in front of the right people.
              </h2>
              <p>
                From campaign setup to creative and optimisation, we structure
                advertising around the offer, audience and budget.
              </p>
            </Reveal>
            <div className="ad-plans">
              {adPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * .09}>
                  <span>{plan.name}</span>
                  <strong>USD {plan.total.slice(1)}</strong>
                  <div className="ad-split"><b>{plan.service}<small>Service</small></b><b>{plan.spend}<small>Ad spend</small></b></div>
                  <p>{plan.description}</p>
                  <Link href="/contact">Discuss campaign ↗</Link>
                </Reveal>
              ))}
            </div>
            <div className="commission">
              <h3>Performance / Commission</h3>
              <p>
                Custom commission-based structures are available for selected
                businesses and campaigns where appropriate.
              </p>
              <Link href="/contact">Contact us ↗</Link>
            </div>
            <p className="ad-note">
              Ad spend is allocated to the advertising platform. The service fee
              covers planning, setup, creative direction, targeting, monitoring,
              optimisation and management. Duration and deliverables are confirmed
              before launch. Results are never guaranteed.
            </p>
          </div>
        </section>

        <section className="jm-process">
          <div className="shell">
            <Reveal className="jm-section-head dark-text">
              <p className="jm-kicker">How we work</p>
              <h2>
                Discover. Build.
                <br />
                Launch. Grow.
              </h2>
            </Reveal>
            <div className="process-line">
              {[
                ["Discover", "We understand the business, offer and audience."],
                [
                  "Build",
                  "We create the website, content or campaign around that objective.",
                ],
                ["Launch", "We test, refine and put the work live."],
                [
                  "Grow",
                  "For ongoing clients, we keep improving content, campaigns and digital presence.",
                ],
              ].map(([h, p], i) => (
                <Reveal key={h} delay={i * .09}>
                  <span>0{i + 1}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="jm-support">
          <div className="shell support-grid">
            <Reveal>
              <p className="jm-kicker">Ongoing support</p>
              <h2>
                Stay visible.
                <br />
                Stay consistent.
              </h2>
            </Reveal>
            <Reveal>
              <div className="support-block">
                <span>Social media management</span>
                <p>
                  Content planning · design · short-form video · captions ·
                  posting · campaign support · community engagement · monthly
                  review where applicable.
                </p>
                <Link href="/contact">Get a management quote ↗</Link>
              </div>
              <div className="support-block">
                <span>Design & brand work</span>
                <p>
                  Logos · brand identity · flyers · campaign creatives · social
                  content · promo assets.
                </p>
                <Link href="/services">Explore services ↗</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="jm-final">
          <div className="shell">
            <p className="jm-kicker light">Got something in mind?</p>
            <h2>
              Let’s build
              <br />
              <em>what’s next.</em>
            </h2>
            <p>
              Tell us what you’re working on and we’ll tell you how Jaeger Media
              can help.
            </p>
            <div className="jm-actions">
              <a className="jm-btn pale" href={`mailto:${email}`}>
                Start a project ↗
              </a>
              <Link className="jm-btn dark-line" href={whatsapp}>
                WhatsApp us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
